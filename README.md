# HireMock 🎤  
AI-powered interview practice for the Swedish job market

Early-stage product being developed to validate whether AI-driven interview feedback
in Swedish can meaningfully help job seekers and support a sustainable business model.

---

## 🚩 The Problem

Many job seekers prepare for interviews **without structured feedback**.

Common options today:
- Practicing alone → no objective insight
- Hiring a coach → expensive and not scalable
- Using interview tools → mostly English-first and generic

This gap is especially visible in the Swedish job market, where
communication style and expectations differ from English-speaking contexts.

---

## 💡 What HireMock Does

HireMock is a **mobile-first interview practice app** that lets users:

1. Answer a realistic interview question on video (1–3 minutes)
2. Receive **structured AI feedback** focused on:
   - answer structure (STAR)
   - clarity of communication
   - language quality (Swedish)
   - confidence indicators
3. Repeat and improve before real interviews

The product is designed to support **learning through practice**, not memorization.

---

## 🎯 MVP Scope (Intentionally Focused)

The HireMock MVP is deliberately scoped to validate real user value.



**Included:**
- One interview question
- Video-based answers
- Speech-to-text processing (Swedish)
- Structured AI feedback
- Free access with a daily practice limit
- Interview history and progress tracking available in the paid tier


**Intentionally excluded (for now):**
- Body language / eye contact analysis
- Offline or on-device AI inference
- Multiple roles or languages
- Marketplace or peer interviews

The goal is to validate user value before investing in technical optimization.

---

## 💰 Business Reasoning

The business rationale behind HireMock:

Job seekers are willing to pay for structured interview feedback
that is cheaper than personal coaching but more effective than practicing alone.

**Pricing model (early assumption):**
- Free: limited daily practice access
- Paid tier: subscription-based access with saved history and continued practice


Indicative pricing is expected to fall within a typical
consumer SaaS range for job-seeking tools in Sweden.
Final pricing will be informed by user feedback and demand validation.

---

## 🛠 Technical Overview

**Frontend**
- React Native (Expo)
- Mobile-first UX focused on recording and feedback clarity

**Backend**
- Node.js API
- PostgreSQL (data persistence)
- Cloud-based Speech-to-Text (Swedish)
- LLM-based feedback generation
- Managed authentication (Clerk)
- Stripe (payments)


Key technical and product trade-offs are documented in  
👉 [`docs/decisions.md`](./docs/decisions.md)

---

## 👤 About the Author

Frontend-focused developer with experience in product-oriented engineering
and building real-world, monetizable applications.
