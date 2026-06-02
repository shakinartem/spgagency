# Restore Figma Home Design With Dental Cases

## Goal

Return the homepage to the older Figma-based visual design while keeping the public brand only as `ШАРиК digital`.

At the same time, integrate a dedicated cases screen that presents four best dental-related cases from the old SPG materials in a careful MVP format:

- visible on the homepage as a full screen/section
- four cards only
- click on a card opens a modal with more detail
- no loud claims, fake percentages, or unverified metrics
- no public mention of SPG anywhere in UI or metadata

## Scope

Included:

- restore the old Figma visual direction on the homepage
- preserve current brand cleanup so public UI stays `ШАРиК digital`
- add a homepage cases screen for top 4 dental / clinic / near-medical cases
- use modal-based detail view instead of routing users into legacy case pages
- keep supporting legacy pages available only where needed, but not as the main UX

Not included:

- full redesign of all internal SEO pages to the old Figma style
- rebuilding the multi-page content system from scratch
- publishing detailed public proof pages with disputed metrics

## Recommended Source Of Truth

For the homepage visual restoration, use the local reference set in `design-reference/`:

- `Хиро.png`
- `Где теряет.png`
- `Система.png`
- `Поток.png`
- `Результаты.png`
- `Ста.png`

These references define the intended visual rhythm, composition, and section order more reliably than guessing from later iterations.

## Information Architecture

Homepage should follow the old Figma-led storytelling structure, adapted to the current brand:

1. Hero
2. Problem / where the clinic loses patients
3. System / how the agency assembles growth
4. Flow / work process
5. Results / trust-building proof layer
6. Cases screen with 4 best dental cases
7. Remaining CTA / footer flow

The exact section names in UI may vary to match the references, but the visual and narrative order should follow that structure.

## Cases Screen

### Purpose

Show real niche experience without turning the block into an overclaimed public case library.

### Card Count

Exactly 4 cards.

### Content Model Per Card

- niche
- task
- what was strengthened
- neutral impact statement focused on appointments, trust, lead handling, or analytics

### Candidate Source Pool

Primary candidates from prior extracted materials:

- `Biomed`
- `Interdent`
- `Dental Pro`
- `IbraDent`

If any client naming looks unsafe in final context, replace with neutral labels such as:

- `стоматологическая клиника`
- `сеть стоматологий`
- `медицинский проект`

### Interaction

Each card opens a modal.

Modal contains:

- project title or neutral label
- niche marker
- task summary
- what was strengthened
- tools / directions involved
- neutral outcome framing
- close action

No unsupported claims or celebratory KPI treatment.

## Brand And Content Rules

- public brand everywhere is only `ШАРиК digital`
- no `SPG`, `SPG Agency`, `spgagency`, or related legacy naming in UI, meta, CTA, footer, or visible text
- no imported “wins” language unless explicitly supported by source material
- if numbers exist but are risky or disputable, prefer neutral wording over quantified claims
- homepage links should point to current MVP destinations and modals, not legacy case pages

## Technical Plan

### Homepage

Refactor homepage sections in the current React app so the main landing matches the old Figma references again.

### Cases

Reuse the existing modal interaction pattern where possible, but retune the content and styling for the restored homepage design.

### Legacy Pages

Keep old case detail pages out of the primary journey. They can remain noindex/legacy, but the homepage experience should rely on the 4-card modal section.

## Error Handling And Risks

### Main Risks

- restoring old visual structure may conflict with newer content blocks
- some old case naming may not be safe for prominent public display
- current homepage sections may need partial replacement rather than simple restyling

### Mitigation

- prioritize visual restoration of homepage first
- keep the case layer compact and editable through data structures
- anonymize client names whenever there is doubt
- avoid routing dependency on legacy case pages

## Verification

Implementation will be considered successful when:

- homepage visually aligns with the old Figma references
- branding is only `ШАРиК digital`
- a dedicated screen with 4 best dental cases exists
- each card opens a working modal
- no unsupported metrics appear in cards or modals
- project builds successfully

