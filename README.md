# OLearn (تعلّم) — Oman Education Distribution and Workforce Intelligence Platform

An interactive bilingual (Arabic/English) platform that transforms open education data from the [National Open Data Portal](https://opendata.gov.om) into analytical dashboards for understanding the distribution of schools, university enrollment trends, graduate output, and workforce Omanization across the Sultanate of Oman.

**Live Demo:** [olearn-sandy.vercel.app](https://olearn-sandy.vercel.app)

## Datasets Used from the National Open Data Portal

### Ministry of Education (وزارة التربية والتعليم)
Publisher page: [opendata.gov.om/en/publishers/09e6018f-d48f-44b0-8090-2b0d478774b9](https://opendata.gov.om/en/publishers/09e6018f-d48f-44b0-8090-2b0d478774b9) — 17 datasets

| Dataset | How it was used |
|---|---|
| **All student data in the Ministry of Education for 2024** | Analyzed the distribution of 1,270 government schools across all 11 governorates and their wilayats, broken down by education type (Basic Education, Post-Basic Education), school gender (Boys, Girls, Co-Ed), and working time (Morning, Evening). |
| **Teaching staff data for 2024** | Calculated student-to-teacher ratios by governorate and identified areas with staffing shortages. |

### Sultan Qaboos University — SQU (جامعة السلطان قابوس)
Publisher page: [opendata.gov.om/en/publishers/eb196b14-3f48-41bb-8279-de60a2a4907b](https://opendata.gov.om/en/publishers/eb196b14-3f48-41bb-8279-de60a2a4907b) — 15 datasets

| Dataset | How it was used |
|---|---|
| **Growth of undergraduate admitted, registered & graduated students according to category and gender (2000/2001 to 2024/2025)** | Built the SQU enrollment trend dashboard showing 25-year trends in Diploma vs. Bachelor enrollment by gender across scientific and humanities colleges. |
| **Growth in number of research projects by various types of grants** | Tracked research productivity trends and funding source diversification (External, Internal, Strategic, Joint, National Research grants). |
| **Growth in number of research papers published in journals and presented in conferences** | Analyzed research output trends and correlated them with postgraduate enrollment growth. |
| **Growth of number of employees at the university according to employer and nationality** | Tracked Omanization rates and workforce composition (Academic, Technical, Administrative). |
| **Scholarships by college and degree type** | Analyzed investment in human capital development across SQU colleges. |

### University of Technology and Applied Sciences — UTAS (جامعة التقنية والعلوم التطبيقية)
Publisher page: [opendata.gov.om/en/publishers/402b311b-178a-40e1-85b0-dc1beb003ae0](https://opendata.gov.om/en/publishers/402b311b-178a-40e1-85b0-dc1beb003ae0) — 4 datasets

| Dataset | How it was used |
|---|---|
| **Statistics of active students at UTAS by specialization, branch, academic year, and gender** | Analyzed student distribution across 11 UTAS branches (Muscat, Nizwa, Ibri, Salalah, Al Musanna, Ibra, Shinas, Sohar, Sur, Al Rustaq, Khasab). |
| **UTAS graduates by branch (2024–2025)** | Mapped graduate output by campus, revealing top-producing branches and gender distribution (females consistently outperform males in graduation rates). |
| **HR statistics (2025–2026)** | Analyzed workforce composition (Academics, Technicians, Administrators) by branch and Omanization rates across all campuses. |

### Ministry of Higher Education, Research & Innovation (وزارة التعليم العالي والبحث العلمي والابتكار)
Publisher page: [opendata.gov.om/en/publishers/5c648ffa-eeac-466b-8481-520158bf96bb](https://opendata.gov.om/en/publishers/5c648ffa-eeac-466b-8481-520158bf96bb) — 4 datasets

| Dataset | How it was used |
|---|---|
| **Undergraduate & postgraduate students admitted, registered & graduated in scientific and humanities colleges (2025/2026)** | Provided a nationwide higher education enrollment overview across all public institutions by degree and gender. |

## Key Analyses Built from Open Data

### 1. School Distribution Explorer (`/schools`)
Maps the geographic distribution of 1,270 government schools across all governorates and wilayats, broken down by:
- Education type: Basic Education vs. Post-Basic
- School gender: Boys, Girls, Co-Ed
- Geographic coverage per wilaya

Key finding: North Al Batinah has the highest concentration (175 schools), while Al Wusta has only 60 — reflecting population distribution but also potential coverage gaps.

### 2. SQU 25-Year Enrollment Dashboard (`/dashboard`)
Analyzes how student demographics at Sultan Qaboos University have shifted from 2000 to 2025:
- Bachelor enrollment grew from ~4,000 to **18,000+** students
- Female students consistently outnumber males across most colleges
- Research project count reached **266 active projects** in 2025 (17.2% YoY growth)
- Research budget grew to **OMR 2.33 million**

### 3. UTAS Branch Performance (`/dashboard`)
Compares graduate output, student distribution, and workforce across 11 UTAS campuses:
- Muscat branch produces the most graduates (**2,130** in 2024–2025)
- Total UTAS graduates: **7,060** across all branches
- Females account for ~62% of all graduates

### 4. Workforce & Omanization Tracking (`/workforce`)
Monitors Omanization rates in higher education institutions by role category:
- Academic staff: Omanization rates by branch and department
- Technical staff: Distribution across campuses
- Administrative staff: Highest Omanization rates

## Platform Features

- Bilingual interface (Arabic/English) with RTL support
- Interactive charts showing multi-year trends
- School explorer with governorate and wilaya drill-down
- Workforce composition analysis with Omanization metrics
- Data provenance page with links to source datasets
- Dark/light mode
- Fully responsive design

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Charts:** Recharts
- **Data Processing:** XLSX parsing for original portal data files
- **Deployment:** Vercel

## Data Provenance

All data used in this platform is sourced exclusively from the [Oman National Open Data Portal](https://opendata.gov.om). Original Excel files from the portal were parsed using the `parse-data.cjs` script and stored as typed TypeScript data files in `data/` with clear attribution.

The platform aligns with Oman Vision 2040's education and human capital development goals by making education data accessible for evidence-based planning.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the platform.

## License

Open Government License — Sultanate of Oman
