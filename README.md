# Onus User Guide

Onus is a straightforward workout tracker for iPhone and Apple Watch: build
programs, log sets in real time, and see your progress and personal records
over time — with no account, no ads, and no data leaving your device (except
to your own private iCloud, if you choose to back up). This guide walks
through the app's main features.

---

## Table of Contents

- [Getting Started](#getting-started)
- [Home](#home)
- [Starting a Workout](#starting-a-workout)
- [Logging a Workout](#logging-a-workout)
- [Supersets & Circuits](#supersets--circuits)
- [Rest Timer](#rest-timer)
- [Personal Records](#personal-records)
- [Workouts & Programs](#workouts--programs)
- [Exercise Library](#exercise-library)
- [History](#history)
- [Progress Graphs](#progress-graphs)
- [Apple Watch App](#apple-watch-app)
- [Settings](#settings)
- [Data Export, Import & iCloud Backup](#data-export-import--icloud-backup)
- [Apple Health Integration](#apple-health-integration)
- [Privacy](#privacy)
- [Support](#support)

---

## Getting Started

Onus has no sign-up and no account — open the app and start logging. The
first time you launch it, you'll be asked to pick one of the built-in
preloaded programs to start as your Current program (you can change or
ignore this later); after that there's nothing to configure before your
first workout. Your data lives on your device (and syncs to your paired
Apple Watch).

The app is organized into four tabs: **Home**, **History**, **Workouts**,
and **Settings**. The exercise library lives inside Settings rather than its
own tab (see [Exercise Library](#exercise-library)).

## Home

Home is your launch pad. From here you can:

- See your **Current Program** front and center, with its workouts listed
  underneath — tap any workout to quick-start it pre-filled with its planned
  exercises and sets.
- See any other **Active Programs** you're running, collapsed below the
  current one, so you can switch between multiple programs (e.g. alternating
  a strength block with a conditioning block) without losing track of either.

## Starting a Workout

There are two ways to start a session:

1. **From your iPhone** — quick-start any workout listed on Home, pre-loaded
   with its planned exercises, sets, reps, and target weights. Only programs
   marked **Active** in the Workouts tab show up on Home, so mark a program
   Active there first to make its workouts available to quick-start. (The
   Workouts tab itself is for building and editing programs/workouts, not
   starting them — quick-start happens from Home.)
2. **From your Apple Watch** — start a workout directly on the Watch, even
   without your iPhone nearby. Only programs marked **Active** on iPhone are
   synced to the Watch, so the same Active programs available to quick-start
   on Home are what you'll see there (see
   [Apple Watch App](#apple-watch-app)).

## Logging a Workout

The active workout screen lists each exercise as an expandable card. For each
set you log:

- **Weight** and **Reps**, entered on a custom numeric keypad — big digit
  keys, a decimal point (only where relevant, e.g. disabled for reps), and a
  dedicated +/- stepper sized per muscle group (see [Settings](#settings)) so
  you can nudge a value without touching the keyboard. A **Next** button
  jumps you straight to the following field.
- **Previous** — the weight and reps you logged for that exact set last time,
  shown right next to the input so progressive overload is a glance away.
- A **Complete** checkmark per set — tap it to log the set (and trigger the
  rest timer). Completing every set in an exercise automatically collapses it
  and expands the next one (for a superset or circuit, every exercise in the
  group has to be finished first — see below).

You can add or remove exercises and sets mid-workout, and a running
**elapsed time** is always visible in the toolbar. When you're done,
**Finish Workout** saves it to your history; **Discard Workout** throws it
away.

If a workout was started from a template and you changed the plan on the fly
(added/removed an exercise or set, changed a target), Onus shows a **Template
Changes** review after you finish, listing what changed by exercise so you
can accept the changes into the template or reject them and keep the
template as-is.

## Supersets & Circuits

Group two or more exercises to perform back-to-back, round by round. Group
exactly two exercises and Onus calls it a **Superset**; group three or more
and it's a **Circuit** — the same feature, just a different label. To create
one, multi-select exercises in a workout or template and tap **Group as
Superset/Circuit**.

Each group has its own name and settings: how many sets make up a round,
rest between exercises within a round (for circuits of 3+), and rest after a
full round before starting the next one. During a workout, the group's card
shows every member and only advances once **all** of them have completed the
current round — not just the first one you finish.

## Rest Timer

Completing a working set automatically starts a rest timer with a
progress-filled bar. You can adjust the remaining time in either direction or
skip it outright, and it keeps counting even if you background the app,
alerting you with your chosen sound when it ends.

## Personal Records

Onus automatically detects when a completed set is a new personal record for
that exercise and celebrates it with an on-screen trophy animation. PR sets
are marked with a trophy badge everywhere they appear — the active workout,
workout summaries, history, and [Progress Graphs](#progress-graphs) (where
PR points are drawn larger and in a distinct color) — so your best lifts are
always easy to spot.

## Workouts & Programs

The **Workouts** tab has two sub-tabs:

- **Programs** — a program groups related workouts together (e.g. a
  Push/Pull/Legs split or an Upper/Lower split). Mark a program **Active** to
  make it available to quick-start, and mark one **Current** to feature it on
  Home. Onus ships with several preloaded programs; you can choose which
  ones appear in your library from **Settings → Programs → Preloaded
  Programs**.
- **Workouts** — individual workout templates (e.g. "Push Day"), each a list
  of exercises with planned sets, target reps, target weight, and a rest
  timer duration per exercise. Workouts can belong to one or more programs,
  or stand alone.

Both programs and workouts are fully editable — reorder exercises and sets,
group exercises into supersets/circuits, adjust targets, or delete what you
no longer need.

## Exercise Library

Browse the full built-in exercise catalog from **Settings → Exercises →
Exercise Library**, filterable by muscle group, equipment type, and search
text. Each exercise entry shows its primary and secondary muscles and
equipment, and has a lookup menu for form instructions via YouTube,
muscleandstrength.com, musclewiki.com, or the free-exercise-db project —
opened in an in-app browser so you never leave Onus.

You can also add your own **custom exercises** with a name, muscle group, and
equipment type — useful for movements not in the built-in catalog or gym
equipment that's a little different from the standard. When adding exercises
to a workout, you can multi-select several at once instead of adding them one
at a time.

## History

Every completed workout is logged with:

- A **weekly summary** — workouts completed, total volume, and average
  duration for the current week.
- A chronologically grouped list of past sessions.
- A **detail view** per session: duration, total volume, exercise count, and
  (if you use the Watch) average heart rate and calories burned, followed by
  a full set-by-set breakdown with PR badges.

History has a **Progress** sub-view alongside the chronological list — see
[Progress Graphs](#progress-graphs) below. You can also set a **Start Date**
in Settings to limit how far back both views look.

## Progress Graphs

Track how an exercise is trending over time as a line chart, from
**History → Progress**. Tap **Add Graph** to pick any exercise — from a
program, a specific workout, or your other logged exercises — and Onus plots
it going forward.

Each graph can show **1RM Estimate**, **Top Set**, **Volume**, or **Max
Reps**, over the last **30, 60, or 90 days** or **All Time**, with an
optional trend line. PR sets stand out as larger, highlighted points. Use
**Filter Graphs** to narrow which graphs are shown and **Manage Graphs** to
bulk-edit or delete them. If you'd rather not manage graphs by hand, turn on
**Only Show Current Program** in Settings and Onus keeps your graphs in sync
with your Current program's exercises automatically.

## Apple Watch App

Onus runs as a standalone Apple Watch app — workouts can be started, logged,
and finished entirely from the wrist, even without the iPhone nearby.

- **Home** on the Watch mirrors your active programs and workouts from the
  phone, so you can quick-start the same way you would on iPhone.
- **Active workout** shows the current exercise, a segmented progress bar for
  the exercise's sets (and your position within a superset or circuit), and
  simple +/- adjusters for reps and weight — plus live heart rate and
  calories from a connected HealthKit workout session.
- Swipe over to the **Now Playing** screen to control music without leaving
  the workout.
- A **summary** screen lists every exercise and set for the in-progress
  workout, lets you add or remove sets, and jump directly to any set. It
  flags whether you finished every set or left some incomplete, and if you
  tap **Finish Workout** with sets still open, Onus double-checks that you
  meant to before wrapping up.
- Finished (or discarded) workouts sync back to iPhone automatically via
  WatchConnectivity — no internet connection involved, just a direct
  device-to-device link — and, just like on iPhone, you'll get a chance to
  review and accept any changes back into the template.
- A watch face complication gives you a one-tap shortcut straight into Onus.

## Settings

Onus is tuned to how you train:

- **Appearance** — light, dark, or system.
- **Exercises** — default source for the exercise library's form-lookup
  shortcut (YouTube, etc.), and access to the [Exercise Library](#exercise-library).
- **Rest Timer** — default duration, adjustment step size, and completion
  sound.
- **Previous Set** — show your last performance for the _same workout_ only,
  or for _any workout_ that used the same exercise.
- **Weight** — pounds or kilograms (switching doesn't touch your stored data,
  only how it's displayed), and whether dumbbell sets log the weight of
  _one_ dumbbell (Onus doubles it for volume) or the _combined_ weight of
  both.
- **Weight Increment** — separate +/- step sizes for lower body, upper body,
  and isolation movements, so the quick-adjust buttons match how you actually
  load a bar or pick a dumbbell.
- **Programs** — choose which preloaded programs appear in your library.
- **History** — a Start Date cutoff for History and Progress, plus default
  metric, date range, and trend-line settings for new [Progress
  Graphs](#progress-graphs).
- **Import/Export Data** — see below.

## Data Export, Import & iCloud Backup

From Settings you can:

- **Export Workout History** as a CSV — every completed set across every
  session, ready for a spreadsheet.
- **Export Programs & Workouts** as a JSON file you can share (e.g. AirDrop
  it to a friend or training partner) so they can preview and selectively
  import your programs and workout templates.
- **Import Programs & Workouts** from a file someone shared with you the same
  way — you'll see a preview before anything is added.
- **iCloud Backup** — Onus automatically saves a private snapshot of all
  your data (programs, workouts, and history) to your own iCloud Drive after
  workouts and when you leave the app, so it can be recovered if you lose
  or replace your device. You can also back up or restore manually; restoring
  only adds data and never deletes anything already on your device. See the
  [Privacy Policy](PRIVACY_POLICY.md) for details on what this backup
  contains and where it goes.

## Apple Health Integration

With permission, Onus reads heart rate, active energy burned, and body mass
(the last only to estimate calories when the Watch doesn't supply a measured
value) to enrich your workout summaries. Workouts tracked with the Apple
Watch are also written back to Apple Health so they show up alongside your
other activity; workouts logged from iPhone alone (without the Watch) aren't
written to Health. This is all handled by Apple's HealthKit framework
directly on your device — see the [Privacy Policy](PRIVACY_POLICY.md) for
details.

## Privacy

Onus doesn't collect, transmit, or sell any of your data — full details are
in the [Privacy Policy](PRIVACY_POLICY.md).

## Support

Have a question, found a bug, or want to request a feature?
onus.support@gmail.com
