# Sharik Figma MVP Landing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current legacy home page with a Figma-matched single-page MVP for "ШАРиК digital" inside the existing Vite/React project.

**Architecture:** Keep `src/main.tsx` as the entry point and rebuild `src/App.tsx` around a new componentized landing flow. Move landing copy and card data into a dedicated content file, reuse local SVG assets from the workspace, and remove legacy dark/SPG presentation from the public homepage. Verification will rely on the Vite production build and a repo-wide brand search because the project does not expose an automated UI test suite.

**Tech Stack:** Vite, React 18, TypeScript, Tailwind CSS

---

### Task 1: Reframe the landing architecture

**Files:**
- Modify: `src/App.tsx`
- Create: `src/components/sharik/*`
- Create: `src/data/sharik-content.ts`

- [ ] Replace legacy homepage composition with the new section order from the approved MVP structure.
- [ ] Move section copy, card lists, footer contacts, and form checklist data into a dedicated content module.
- [ ] Keep supporting legal/public files intact unless they expose legacy branding on key public entry points.

### Task 2: Rebuild the visual system

**Files:**
- Modify: `src/index.css`
- Modify: `tailwind.config.js`

- [ ] Replace dark glassmorphism tokens and global effects with a light Figma-aligned visual system.
- [ ] Define typography, colors, card surfaces, dotted separators, and section layout utilities for the new landing.
- [ ] Remove custom cursor, heavy noise overlays, and other legacy homepage presentation rules that conflict with the approved design.

### Task 3: Implement the landing sections

**Files:**
- Create: `src/components/sharik/Header.tsx`
- Create: `src/components/sharik/HeroSection.tsx`
- Create: `src/components/sharik/DiagnosticSection.tsx`
- Create: `src/components/sharik/ServicesSection.tsx`
- Create: `src/components/sharik/ProcessSection.tsx`
- Create: `src/components/sharik/CasesSection.tsx`
- Create: `src/components/sharik/ResultsSection.tsx`
- Create: `src/components/sharik/CTAFooterSection.tsx`
- Create: `src/components/sharik/shared.tsx`

- [ ] Build each section as a focused component that mirrors the exported design references and uses local assets where available.
- [ ] Keep the cases block compact and qualitative, with no unsupported metrics or public SPG references.
- [ ] Use real form fields in the CTA section without backend submission logic.

### Task 4: Brand cleanup and verification

**Files:**
- Modify: public homepage-related source files as needed

- [ ] Search the repo for `SPG|spg|SPG Agency|spgagency|old-spg` and remove homepage/public-entry references that conflict with the new brand.
- [ ] Run `npm run build`.
- [ ] Report changed files, build status, remaining legacy pages, and any pixel-perfect follow-up gaps.
