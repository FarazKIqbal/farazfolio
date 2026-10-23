import {
  SiC,
  SiCplusplus,
  SiFirebase,
  SiFlask,
  SiOpenjdk,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTensorflow,
} from "react-icons/si";
import type { IconType } from "react-icons";

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export const technologyStack: { name: string; Icon: IconType }[] = [
  { name: "Python", Icon: SiPython },
  { name: "C", Icon: SiC },
  { name: "C++", Icon: SiCplusplus },
  { name: "Java", Icon: SiOpenjdk },
  { name: "React", Icon: SiReact },
  { name: "Flask", Icon: SiFlask },
  { name: "TensorFlow", Icon: SiTensorflow },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Firebase", Icon: SiFirebase },
];

export const projects = [
  {
    number: "01",
    name: "FairScore",
    category: "Responsible AI · Fintech",
    role: "Student project",
    description:
      "An explainable credit-scoring system for people with limited credit history, designed to make credit-line evaluation clearer and fairer.",
    technologies: ["Python", "LightGBM", "Random Forest", "Transformers", "React.js", "REST API", "Explainable AI"],
    slug: "fairscore",
  },
  {
    number: "02",
    name: "FraudGuard",
    category: "Applied ML · AdTech",
    role: "Academic project",
    description:
      "A machine-learning system built to detect and prevent click fraud in digital advertising in real time.",
    technologies: ["Python", "Flask", "React.js", "REST API", "TensorFlow"],
    slug: "fraudguard",
  },
  {
    number: "03",
    name: "DocQA Chatbot",
    category: "RAG · Knowledge tools",
    role: "Learning project",
    description:
      "Upload a PDF, ask a question in plain language, and get an answer grounded in the document with source-page citations.",
    technologies: ["Python", "Claude API", "ChromaDB", "Sentence Transformers", "Streamlit"],
    slug: "docqa-chatbot",
  },
  {
    number: "04",
    name: "group.ai",
    category: "Conversational AI",
    role: "Student project",
    description:
      "A personalized recommendation chatbot combining conversational understanding with a focused React experience.",
    technologies: ["IBM Watson Assistant", "IBM Cloud", "React", "Watson NLP"],
    slug: "group-ai",
  },
  {
    number: "05",
    name: "HomeCareConnect",
    category: "Full-stack · Marketplace",
    role: "Practice project",
    description:
      "A home-services booking platform connecting customers with the help they need, backed by a Firebase-powered workflow.",
    technologies: ["Python", "React", "Node.js", "Firebase"],
    slug: "homecareconnect",
  },
];

export const skillGroups = [
  {
    title: "Languages",
    index: "01",
    skills: [
      { name: "Python", value: 70 },
      { name: "C", value: 55 },
      { name: "C++", value: 45 },
      { name: "Java", value: 50 },
    ],
  },
  {
    title: "AI / Machine Learning",
    index: "02",
    skills: [
      { name: "Machine Learning", value: 65 },
      { name: "TensorFlow", value: 50 },
      { name: "LightGBM", value: 45 },
      { name: "Transformers", value: 40 },
      { name: "RAG", value: 45 },
      { name: "Explainable AI", value: 50 },
    ],
  },
  {
    title: "Web / Backend",
    index: "03",
    skills: [
      { name: "React.js", value: 60 },
      { name: "Flask", value: 55 },
      { name: "Node.js", value: 45 },
      { name: "REST APIs", value: 50 },
      { name: "Firebase", value: 55 },
    ],
  },
  {
    title: "Tools",
    index: "04",
    skills: [
      { name: "ChromaDB", value: 35 },
      { name: "Streamlit", value: 55 },
      { name: "IBM Cloud", value: 40 },
    ],
  },
];

export const softSkills = ["Teamwork", "Learning agility", "Analytical thinking", "Communication"];

export const milestones = [
  {
    type: "Recognition",
    title: "Top 12 · AI Chatbot Innovation",
    detail: "Placed in the top 12 among 650+ projects during the AI/ML Internship Program 2024.",
    source: "CSRBOX × IBM",
    number: "01",
  },
  {
    type: "Certification",
    title: "IBM SkillsBuild",
    detail: "Getting Started with AI · AI Fundamentals · Project Management Fundamentals.",
    source: "Three certifications",
    number: "02",
  },
  {
    type: "Workshop",
    title: "Illuminate",
    detail: "Workshop by BDC MEC with E-Cell IIT Bombay.",
    source: "BDC MEC × E-Cell IIT Bombay",
    number: "03",
  },
  {
    type: "Workshop",
    title: "Technopreneur 2023",
    detail: "Entrepreneurship workshop organized by IEDC MEC.",
    source: "IEDC MEC",
    number: "04",
  },
];

