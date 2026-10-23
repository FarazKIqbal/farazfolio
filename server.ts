import { createServer as createHttpServer } from "node:http";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import express, { type Request, type Response } from "express";
import { rateLimit } from "express-rate-limit";
import { createServer as createViteServer } from "vite";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const httpServer = createHttpServer(app);
const recipientEmail = "farazkarukappadathiqbal.mec@gmail.com";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

app.disable("x-powered-by");
app.set("trust proxy", 1);
app.use(express.json({ limit: "12kb" }));

const contactRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: { ok: false, message: "Too many messages from this connection. Please try again later or email Faraz directly." },
});

app.get("/health", (_request, response) => {
  response.status(200).json({ ok: true });
});

app.post("/api/contact", contactRateLimit, async (request: Request, response: Response) => {
  const body = (request.body ?? {}) as Record<string, unknown>;
  const clean = (value: unknown) => typeof value === "string" ? value.trim() : "";
  const name = clean(body.name).replace(/[\r\n\t]+/g, " ");
  const email = clean(body.email);
  const message = clean(body.message);
  const honeypot = clean(body.company);

  // Quietly accept bot submissions without sending them to the inbox.
  if (honeypot) {
    response.status(200).json({ ok: true, message: "Thanks — your message has been sent to Faraz." });
    return;
  }

  if (!name || name.length > 100 || !email || email.length > 254 || !emailPattern.test(email) || message.length < 10 || message.length > 5000) {
    response.status(400).json({ ok: false, message: "Please enter a valid name, email, and message (10–5,000 characters)." });
    return;
  }

  const apiKey = process.env.ELASTIC_EMAIL_API_KEY;
  const fromEmail = process.env.ELASTIC_EMAIL_FROM_EMAIL?.trim();
  if (!apiKey || !fromEmail) {
    response.status(503).json({ ok: false, message: "Contact email is not configured yet. Please use the email link below." });
    return;
  }

  const text = [
    "New message from the portfolio contact form",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    const providerResponse = await fetch("https://api.elasticemail.com/v4/emails/transactional", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-elasticemail-apikey": apiKey,
      },
      body: JSON.stringify({
        Recipients: { To: [recipientEmail] },
        Content: {
          Body: [{ ContentType: "PlainText", Charset: "utf-8", Content: text }],
          From: `Faraz Iqbal Portfolio <${fromEmail}>`,
          ReplyTo: email,
          Subject: `Portfolio message from ${name}`,
        },
      }),
    });

    if (!providerResponse.ok) {
      console.warn(`Elastic Email rejected a contact submission (HTTP ${providerResponse.status}).`);
      response.status(502).json({ ok: false, message: "Email delivery failed. Please email Faraz directly." });
      return;
    }

    response.status(200).json({ ok: true, message: "Thanks — your message has been sent to Faraz." });
  } catch {
    console.warn("Elastic Email could not be reached for a contact submission.");
    response.status(502).json({ ok: false, message: "Email delivery is temporarily unavailable. Please email Faraz directly." });
  }
});

if (process.env.NODE_ENV !== "production") {
  const vite = await createViteServer({
    root: projectRoot,
    configFile: path.join(projectRoot, "vite.config.ts"),
    appType: "custom",
    server: {
      middlewareMode: true,
      hmr: { server: httpServer },
    },
  });

  app.use(vite.middlewares);
  app.use(async (request, response, next) => {
    if (request.method !== "GET") {
      next();
      return;
    }

    try {
      const template = await readFile(path.join(projectRoot, "index.html"), "utf8");
      const html = await vite.transformIndexHtml(request.originalUrl, template);
      response.status(200).type("html").send(html);
    } catch (error) {
      vite.ssrFixStacktrace(error as Error);
      next(error);
    }
  });
} else {
  const distDirectory = path.join(projectRoot, "dist");
  app.use(express.static(distDirectory, { index: false, maxAge: "1h" }));
  app.use((request, response, next) => {
    if (request.method === "GET" && !request.path.startsWith("/api/")) {
      response.sendFile(path.join(distDirectory, "index.html"));
      return;
    }
    next();
  });
}

app.use((request, response) => {
  if (request.path.startsWith("/api/")) {
    response.status(404).json({ ok: false, message: "Not found." });
    return;
  }
  response.status(404).type("text").send("Not found.");
});

const port = Number(process.env.PORT || 3000);
httpServer.listen(port, "0.0.0.0", () => {
  console.log(`Portfolio server listening on 0.0.0.0:${port}`);
});
