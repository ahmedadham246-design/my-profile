# Plan: Extract Reusable Section Components

## Goal
Extract 3 repeating section patterns (CaseStudy, Reels, Designs) from `app/layouts/Khazna/` and `app/layouts/MonaAtwa/` into generic reusable components, driven by props and data only.

---

## Tasks

### 1. Normalize data shapes in `app/data/`

**`app/data/MonaAtwaData.ts`**:
- Change `MONA_REELS` from `string[]` to `{ link: string; title?: string; views?: number }[]`
- Change `MONA_DESIGNS` from `string[]` to `{ link: string }[]`

**`app/data/KhaznaData.ts`**:
- Change `KHAZNA_DESIGNS` from `{ id: string; link: string }[]` to `{ link: string }[]` (drop unused `id` field)

### 2. Create `app/components/CaseStudySection.tsx`

Replaces: `KhaznaApp.tsx`, `MonaAtwa.tsx`

```ts
interface CaseStudySectionProps {
  counter: number;
  caseLabel: string;           // "CASE 01", "CASE 02"
  title: string;               // "01 Khazna App"
  logo: StaticImageData;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
  headline: ReactNode;          // allows highlighted <span> text
  description: string;
  challenge: string;
  insight: string;
  execution: string;
  resultsLabel: string;         // "RESULTS" or "METRICS"
  results: { title: string; unit?: string; description: string }[];
  badges: string[];
}
```

Layout (identical to current, no structural changes):
- `<section className="section bg-black">` with SectionCounter header
- Title bar with `title` text + `<Image logo>`
- 3-col grid: left 2/3 (headline, description, challenge/insight/execution list), right 1/3 (results card with `resultsLabel`, metrics grid, badges)

### 3. Create `app/components/ReelsSection.tsx`

Replaces: `KhaznaReels.tsx`, `Mona-reels.tsx`

```ts
interface ReelData {
  link: string;
  title?: string;
  views?: number;
}

interface ReelsSectionProps {
  counter: number;
  description: string;         // "REELS POC"
  sectionNumber: string;       // "01-"
  title: string;                // "KHAZNA · REELS"
  subtitle: string;            // "FINTECH"
  subtitleMuted: string;       // "EGYPT + KSA"
  dateRange: string;            // "2021–2025"
  reels: ReelData[];
}
```

Layout: section header + title bar + `<Slider>` with `<ReelCard>` for each reel.

### 4. Create `app/components/DesignsSection.tsx`

Replaces: `KhaznaDesigns.tsx`, `Mona-designs.tsx`

```ts
interface DesignData {
  link: string;
}

interface DesignsSectionProps {
  counter: number;
  description: string;         // "DESIGNS POC"
  sectionNumber: string;       // "01-"
  title: string;               // "KHAZNA · DESIGNS"
  subtitle: string;            // "FINTECH EGYPT + KCA"
  dateRange: string;           // "2021-2023"
  bgColor: string;             // "bg-foreground" or "bg-pink-50"
  textColor: string;           // "text-black"
  designs: DesignData[];
  imagePrefix: string;         // "kd" or "mona" (for img src)
}
```

Layout: section header + title bar + 4-col grid of `<DesignCard>`.

### 5. Update consumer files to use new components

**`app/layouts/Khazna/Khazna-reels.tsx`** → thin wrapper passing Khazna data to `<ReelsSection />`
**`app/layouts/Khazna/Khazna-designs.tsx`** → thin wrapper passing Khazna data to `<DesignsSection />`
**`app/layouts/Khazna/Khazna-app.tsx`** → thin wrapper passing Khazna data to `<CaseStudySection />`
**`app/layouts/MonaAtwa/Mona-reels.tsx`** → thin wrapper passing Mona data to `<ReelsSection />`
**`app/layouts/MonaAtwa/Mona-designs.tsx`** → thin wrapper passing Mona data to `<DesignsSection />`
**`app/layouts/MonaAtwa/MonaAtwa.tsx`** → thin wrapper passing Mona data to `<CaseStudySection />`

Each wrapper becomes ~15 lines: import component + data, return `<Component {...props} />`.

### 6. No changes needed
- `app/page.tsx` — imports remain the same
- `ReelCard.tsx` — already accepts optional `title`/`views`
- `DesignCard.tsx` — no changes needed

---

## Validation
- Visual regression: compare before/after screenshots for all 6 sections
- TypeScript: `npx tsc --noEmit` passes
- Build: `npm run build` passes
