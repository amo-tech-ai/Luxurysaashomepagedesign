# StartupAI Documentation

> **Last Updated:** 2026-02-04

---

## 🧠 How StartupAI Works

StartupAI is an AI operating system for founders that guides you from strategy to daily execution.

**The Flow:**

1. **Chat with the Coach** - Ask any startup question and get expert answers with real numbers and sources
2. **Prompt Packs** - Step-by-step guided flows during onboarding that build your Canvas (business model)
3. **Canvas Feeds Validator** - Your business model automatically populates the Validator, which tells you if your idea is worth pursuing and what to fix
4. **24 Specialized Agents** - Behind the scenes, your questions route to expert agents (canvas, pitch, CRM, etc.) who pull industry-specific advice from Playbooks and research stats from the Vector DB
5. **90-Day Lean System** - Validation sprints cycle you through continuous improvement every quarter

**The Result:** You talk → AI understands your context → gives you decisions, not just data.

---

## 📂 Folder Structure

```
docs/
├── features/          # Feature specifications & implementation plans
├── website/           # Website & marketing content docs
├── design/            # Design system & guidelines
├── dashboards/        # Dashboard feature docs
├── onboarding/        # Onboarding flow docs
├── home/              # Homepage variations docs
├── pitch-deck/        # Pitch deck generator docs
└── *.md              # Root-level shared docs
```

---

## 📋 Organization Rules

### ✅ Keep Related Docs Together
- **Feature docs** → `/docs/features/`
- **Website/Marketing** → `/docs/website/`
- **Design systems** → `/docs/design/` or `/docs/design-bcg/`
- **Component-specific** → Create subfolder (e.g., `/docs/onboarding/`)

### ✅ Naming Convention
- Use kebab-case: `validator-implementation-plan.md`
- Be descriptive: `sitemap-visual-guide.md` not `sitemap.md`
- Add version numbers when needed: `home-v5.md`, `home-v6.md`

### ✅ Document Headers
Include at top of each doc:
```markdown
# Document Title
> **Updated:** YYYY-MM-DD
> **Status:** Draft | In Progress | Complete
```

---

## 📁 Current Documentation

### Features
- `/docs/features/prd.md` - Product Requirements Document (full system spec)
- `/docs/features/tasks.md` - Implementation tasks (67 tasks across 5 phases)
- `/docs/features/progress-tracker.md` - **Verified progress tracker** (accurate status vs actual code)
- `/docs/features/implementation-prompts.md` - **Actionable build prompts** (user stories, success criteria, code)
- `/docs/features/system-diagrams.md` - Mermaid diagrams (architecture, workflows, journeys)
- `/docs/features/01-validator-implementation-plan.md` - Startup Validator v2.0 plan
- `/docs/features/02-coach.md` - Coach UI design (3-panel layout)
- `/docs/features/03-coach-plan.md` - Coach backend implementation (30 tasks)

### Website
- Coming soon

### Design
- `/docs/01-style-guide.md` - BCG aesthetic style guide
- `/docs/design/` - Design specifications
- `/docs/design-bcg/` - BCG consulting design system

### Shared
- `/docs/progress-tracker.md` - Project progress tracking
- `/docs/FOOTER_LINK_VERIFICATION.md` - Footer links audit
- `/docs/NAVIGATION_LINKS.md` - Navigation structure
- `/docs/SITEMAP_PAGE.md` - Sitemap implementation
- `/docs/SITEMAP_VISUAL_GUIDE.md` - Sitemap visual design

---

## 🔍 Quick Find

| Looking for... | Go to... |
|----------------|----------|
| Feature implementation plans | `/docs/features/` |
| Website copy & marketing | `/docs/website/` |
| Design guidelines | `/docs/design/` or `/docs/design-bcg/` |
| Component specs | Subfolder by component name |
| Progress tracking | `/docs/progress-tracker.md` |
| Navigation structure | `/docs/NAVIGATION_LINKS.md` |

---

## 🚀 Adding New Docs

1. **Determine category** - Feature? Website? Design?
2. **Choose folder** - Use existing or create new subfolder
3. **Name clearly** - Use descriptive kebab-case
4. **Add header** - Include title, date, status
5. **Update this README** - Add to relevant section

---

**Keep it simple. Keep it organized.**