# 🤖 Multi-Agent Chatbot with n8n

A multi-agent AI chatbot built using **Node.js, n8n, and Google Gemini**.

The system uses an AI-based router to understand the user's intent and automatically routes the query to the appropriate specialized agent such as Coding, Career, Resume, or General.

---

## 🚀 Features

- 🤖 AI-powered multi-agent chatbot
- 🧠 AI-based intent routing
- 💻 Coding Agent
- 💼 Career Agent
- 📄 Resume Agent
- 🌐 General Agent
- 🔀 Conditional routing using n8n Switch
- 🔗 Webhook-based communication
- 🧩 Visual workflow orchestration using n8n
- ⚡ Node.js frontend server
- 🧠 Google Gemini for AI responses

---

## 🏗️ System Architecture

```text
User
  ↓
Node.js Frontend
  ↓
n8n Webhook
  ↓
AI Router
  ↓
Switch
  ├── Coding Agent
  ├── Career Agent
  ├── Resume Agent
  └── General Agent
          ↓
       Gemini
          ↓
Respond to Webhook
          ↓
Node.js Frontend
          ↓
User
