# Architectural & Product Decisions

This document records key technical and product decisions made during the development
of HireMock, including the reasoning and trade-offs behind them.

The goal is to document thinking, not to prescribe a final or universal solution.

---

## MVP Scope

**Decision:**  
Limit the MVP to a single interview question with repeated practice.

**Reasoning:**  
The primary risk at this stage is lack of user value, not technical feasibility.
A narrow scope allows faster iteration, clearer feedback, and simpler validation.

**Trade-off:**  
Reduced realism compared to full interview simulations, accepted in exchange for focus
and faster learning.

---

## Backend Language: Node.js

**Decision:**  
Use Node.js for the core backend API.

**Reasoning:**  
Node.js aligns with existing frontend expertise and enables faster, more reliable
delivery of the MVP. The backend primarily orchestrates external services rather than
performing heavy computation.

**Trade-off:**  
Some AI-related logic may be more naturally expressed in Python, which is addressed
through isolated experiments rather than core infrastructure.

---

## Python for Isolated AI Experiments

**Decision:**  
Use Python only for isolated experiments and learning, not for the core backend.

**Reasoning:**  
Introducing a new language into the main backend would increase delivery risk.
Isolating Python experiments allows learning without blocking product progress.

**Trade-off:**  
Experimental code is not directly production-ready, which is acceptable at this stage.

---

## Database Choice: PostgreSQL

**Decision:**  
Use PostgreSQL as the primary database.

**Reasoning:**  
PostgreSQL is a well-established, production-ready relational database that integrates
cleanly with Node.js and supports structured data and long-term scalability.

**Trade-off:**  
Requires upfront schema design compared to schemaless alternatives, but provides better
data integrity and clarity.

---

## Authentication Strategy

**Decision:**  
Use a managed authentication solution for the MVP.

**Reasoning:**  
Authentication is not a core differentiator for HireMock.
Using a managed service reduces security risk and implementation effort, allowing focus
on interview feedback and user experience.

**Trade-off:**  
Introduces dependency on a third-party service, which can be revisited if requirements
change.

---

## AI Feedback Approach

**Decision:**  
Start with text-based feedback derived from speech-to-text transcripts.

**Reasoning:**  
Early testing indicates that structured feedback on clarity and answer structure provides
more immediate value than multimodal analysis.

**Trade-off:**  
Non-verbal communication is not evaluated in the MVP.

---

## Free vs Paid Access Model

**Decision:**  
Introduce a daily practice limit for free users, with interview history and progress
tracking available only in the paid tier.

**Reasoning:**  
Daily limits encourage consistent practice while keeping the free experience useful.
Persisted history represents long-term value and provides a clear, fair boundary between
free and paid access.

**Trade-off:**  
Free users have limited ability to track improvement over time, which is acceptable for
early validation.

---

## Documentation Strategy

**Decision:**  
Keep the repository public and document decisions explicitly.

**Reasoning:**  
Transparency improves code quality, encourages deliberate decision-making, and makes the
project useful as a portfolio case.

**Trade-off:**  
Early-stage ideas are visible publicly, which is acceptable given the focus on learning
and execution rather than secrecy.

---

## Closing Note

These decisions reflect the current stage of the project and are expected to evolve.
Changes are documented as updates rather than rewrites to preserve context.
