# Faraz Iqbal Portfolio

A responsive single-page portfolio built with React, TypeScript, Vite, Tailwind CSS v4, and an Express server.

## Development

- `npm install` installs the pinned dependencies.
- `npm run dev` starts the preview server on port 3000.
- `npm run build` typechecks the project and builds the frontend into `dist/`.
- `npm run start` serves the production build and contact API.

## Replace before public launch

Update the GitHub and LinkedIn profile URLs and the live-demo/repository placeholders in `src/App.tsx`. The skill indicators in `src/data.ts` are visual starting points and should be calibrated to Faraz’s self-assessment. Add the final resume as `public/resume.pdf`; the download button checks for that file and downloads it when present.

## Contact form

The form posts to `/api/contact`, validates submissions server-side, includes a honeypot, and limits each source to five attempts per 15 minutes. It uses Elastic Email’s transactional-send API to deliver messages to Faraz’s listed email address; the visitor’s email is set as Reply-To. Add `ELASTIC_EMAIL_API_KEY` (with SendHttp permission) and `ELASTIC_EMAIL_FROM_EMAIL` (an Elastic Email-verified sender) through the protected project secrets UI. The values are read only by the server and must never be added to frontend code. `.env.example` lists the variable names without credentials.

API references: [Elastic Email REST API v4](https://elasticemail.com/developers/api-documentation/rest-api) and [Elastic Email JavaScript integration guide](https://elasticemail.com/developers/api-libraries/javascript).
