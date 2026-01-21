# Changelog

All notable changes to this project are documented here.

Format: [Semantic Versioning](https://semver.org/) with git refs for recovery.

---

## [v0.2.1] - 2026-01-21

**Colophon easter egg**

### Added
- Expandable colophon in footer (click to reveal)
- Credits: Astro, Claude (Opus 4.5), Claude Code CLI, Ghostty, Cursor, Vercel, IBM Plex

### Git
- Ref: `b8f12f9`

---

## [v0.2] - 2026-01-20

**Minimal table layout**

### Changed
- Redesigned index page as minimal table (inspired by designstudios.cc)
- Separated content from presentation:
  - `src/data/resume.ts` — structured data (jobs, skills, contact)
  - `src/content/bio.md` — prose intro with tagline
- Reduced job information density (role, type, company, years only)
- Hide "Type" column on mobile

### Removed (archived in git)
- Detailed job descriptions (bullet points per role)
- Full skills breakdown by category
- Recognition/awards section
- Detailed education info

**To recover detailed content:** `git show 2532205:src/pages/index.astro`

### Git
- Ref: `b0f5feb`
- Compare: `git diff 2532205 b0f5feb`

---

## [v0.1] - 2026-01-20

**Full resume page**

### Added
- Single-page resume/CV at `/`
- Sections: Experience (with bullet points), Skills (categorized), Education, Recognition, Contact
- Mobile responsive layout
- Dark/light theme toggle
- Contact info updated (timbeitz@gmail.com, Philadelphia)

### Changed
- Converted profile page to resume format
- Hidden `/work` nav link (page still exists)
- Updated footer location

### Content Source
- Resume PDF: `/Users/timbeitz/Dropbox/_WORK SAMPLES/_Portfolio Downloads/Resume for Tim Beitz.pdf`

### Git
- Ref: `2532205`

---

## [v0.0] - 2026-01-09

**Initial scaffold**

### Added
- Astro project with minimal template
- BaseLayout with theme toggle
- Profile page (`/`)
- Work index page (`/work`) with project table
- IBM Plex Sans/Mono typography
- CSS custom properties for theming

### Git
- Ref: `2e4612a`

---

## Inactive Content

Content removed from display but preserved in git:

| Content | Last seen | Git ref | Recovery |
|---------|-----------|---------|----------|
| Detailed job bullet points | v0.1 | `2532205` | `git show 2532205:src/pages/index.astro` |
| Skills by category | v0.1 | `2532205` | (same) |
| Recognition/awards | v0.1 | `2532205` | (same) |
| Full education details | v0.1 | `2532205` | (same) |

---

## Roadmap

See `ctx/projects/ACS250 - Website/ACS250-STATE.md` for planned versions.

### Next: v0.3 — Design Polish
- Typography refinement
- Mobile layout improvements
- Hover/interaction states

### Future
- v0.4: Work index
- v0.5: Case studies
- v1.0: Launch (custom domain, final copy)
