# iPad Family Hub — Vibe Log & Development Tracker

## Overview
12.5" iPad in kiosk mode serving as the family command center hub.

---

## Vibe Sessions Log

### Session 1 — March 21, 2026 (01:16)
**Vibe:** Initial concept and build
**What we built:**
- 4-panel dashboard layout
- Large clock + weather widget
- Bus times with dual tabs (To City / To Home)
- Family status grid (Jim, Nicola, Sophie, Lilly)
- Quick actions panel
- System status panel
- Screen wake lock to prevent sleep

**Tech stack:**
- Pure HTML/CSS/JS (no framework)
- Open-Meteo API for weather
- Transport NSW API for buses
- Vercel hosting

**Design decisions:**
- Dark theme (easy on eyes, always-on display)
- Large fonts (readable from distance)
- Grid layout (balanced, scannable)
- Real-time indicators (green pulse dots)

---

## Feature Requests & Ideas

### Current (Built)
- [x] Clock with date
- [x] Sydney weather
- [x] Bus times (270, 270X, 271, 274 only)
- [x] Family member status
- [x] Quick action buttons
- [x] System status
- [x] Auto-refresh (30s buses, 10min weather)
- [x] Screen wake lock

### Pending / Future Vibes
- [ ] Recipe of the day
- [ ] Meal planner view
- [ ] Shopping list
- [ ] Calendar events
- [ ] Windfoil conditions (when relevant)
- [ ] Home Assistant status
- [ ] Voice control integration
- [ ] Night mode (dim after 10pm)
- [ ] Touch-to-wake from screensaver

---

## iPad Setup Notes

### Hardware
- Device: iPad 12.5" (specify model)
- Location: Kitchen / central area
- Power: Always plugged in

### Software Setup
1. Deploy to Vercel ✅
2. Add to Home Screen
3. Enable Guided Access (kiosk mode)
4. Settings → Accessibility → Guided Access → ON
5. Triple-click Home to start/stop

### Kiosk Mode Features
- No home button exit
- No accidental app switching
- Screen stays on (wake lock)
- Single-app focus

---

## URLs
- **Family Hub:** https://marvin-commute.vercel.app/family-hub.html
- **Bus API:** https://marvin-commute.vercel.app/api/bus

---

## Vibe Continuation

Next time we vibe on this:
- What panel needs love?
- New integrations?
- Design tweaks?
- Performance issues?

**Last updated:** March 21, 2026 — 01:18
