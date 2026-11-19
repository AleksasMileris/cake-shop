# Decisions & lessons learned

Record of what was decided for the cake-shop site and why, so the same questions are not asked again.
Last updated: 2026-11-19.

## The business (from the owner questionnaire)

- Working name **Saldi Akimirka** ("Tortai & Desertai"), Klaipėda, Instagram `@saldi_akimirka6`. Final name and logo still open; the AI baker-girl avatar on Instagram is only a placeholder.
- **Brand voice only** ("mes"). No owner name, photo or personal story on the site: owner finds that TMI.
- **Fixed, limited menu**, including a few diet options (lactose-free etc.). Never promise "we make anything": many variants cost more time than they bring.
- **Pickup is the default.** Delivery is possible by arrangement.
- **Deposit:** none for pickup. Online/app orders with delivery pay a deposit per kg (cakes only).
- **Lead time:** a standard number of days is shown; exceptions are handled by contacting directly.
- Starts in a **home kitchen**, so only **small company (B2B) orders**. Will be *individuali veikla*, VMVT registration / hygiene certificate in progress, **can issue invoices**.
- Instagram photos may be used until a new photoshoot.

Still missing from the owner: flavors (biscuits, creams, fillings), prices, sizes, exact diet list, phone/email, pickup address and hours, deposit amount per kg, standard lead days, largest B2B order. Questionnaire (round 2, with Aleksas' answers): https://claude.ai/artifact/Jo23fDief3BV8gPuNr86q2

## Design

- Base color **ivory / bone** (`--bone` in `src/assets/main.css`), berry red accent, gold details.
- **Rounded corners are wanted.** What is not wanted is the Bootstrap look. **No UI libraries**: all CSS is hand-written.
- **No decorative motion**: no burger→X morphing, no sliding panels, no wiggling icons.
- The **first home-page version** is the preferred look: arched hero photo with round rotated "Rankų darbas" badge, product cards with icon circles, pink "Kaip užsisakyti" section.
- Distinctiveness (so competitors can't say "we have the same site") should come from a real logo, one signature color and a consistent photo style. Revisit once these exist.

## Navigation & layout

- Header spans the **full screen width**: **☰ Meniu on the left** (plain dropdown list), **brand centered**, **cake-shaped "Užsakyti" button on the right** (`src/components/CakeButton.vue`).
- **One order button only.** "Parduotuvė" and "Užsakyti" were merged: both meant "I want a cake". It leads to `/parduotuve`, which shows how to order now and later holds the cake builder.
- The home page holds everything; other pages live in the dropdown: Pradžia, Tortai ir skoniai (`/meniu`), Įmonėms (`/imonems`), Kontaktai.
- Page content keeps a readable max width (1120px); only the header is full width.

**Rejected (do not suggest again):**
- Top tabs that only scroll the page: they look like they open new pages.
- Left "Turinys" chapter outline: looked wrong. (`src/components/ChapterOutline.vue` is kept but unused.)
- Dots on the right, chapter strip under the header, floating bottom pill, progress line + big menu (compared in https://claude.ai/artifact/Lat5JpfnAVuKci3D7muwrK).
- Square corners everywhere.

## Product & tech direction

- Stack: Vue 3 + Vite + TypeScript, Pinia (for the future cart/builder), vue-router.
- All texts, contacts, menu and business rules live in **`src/config/site.ts`**. Empty fields are hidden on the site.
- **Phone app = installable web app (PWA)** from this same code, not a store app. Not built yet.
- **Cake builder** (later, on `/parduotuve`): design a cake from the fixed menu, see price live, pick a date in a calendar, pay a deposit.
- **Įmonėms page now**, company accounts / recurring orders only if real demand appears.
- `/meniu` currently shows **example flavors and prices** with a visible "Pavyzdinis meniu" notice. Replace `menu` in `site.ts` with real data and set `menuIsExample = false`.

## Market notes (Nov 2026)

- Big Lithuanian brands (Mon Ami, Šokolado meistrai, J. Gulbinienės, Ali šokoladinė) run classic e-shops; none has a cake builder.
- Small bakers mostly take orders via Instagram/Facebook DMs and paslaugos.lt; many Klaipėda requests there go unanswered.
- Airomi (Vilnius macarons, `@airomi_chocolate`): strong brand from one signature color + handwritten logo, people-focused Reels, e-shop + café + vending machines, no custom cakes or B2B offer.

## Lessons learned (working notes)

- Don't split one file edit into "delete block" + "append block" while the Vite dev server runs: it may cache the half-written file (blank page, "does not provide an export"). Fix: `touch` the file and reload.
- On this Windows machine, very long Bash heredocs can fail to parse; write large files with the editor/Write tool instead. Python is not installed.
- Requests are often short and mixed English/Lithuanian. When a word is ambiguous (e.g. "menu" = the ☰ dropdown, not the `/meniu` page), ask or state the interpretation first.
- Showing options as a live comparison page worked well for deciding, but the final choice was the simplest one.
