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
- [Supersets](#supersets)
- [Circuit Workouts](#circuit-workouts)
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

Only one workout can be in progress at a time. While one is running, the
start buttons on Home are hidden, and starting from the other device joins
the workout already in progress instead of replacing it.

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
  and expands the next one (for a superset, both exercises have to be
  finished first — see below).

You can add or remove exercises and sets mid-workout, and a running
**elapsed time** is always visible in the toolbar. When you're done,
**Finish Workout** saves it to your history; **Discard Workout** throws it
away.

Swipe the workout down to get back to the rest of the app. A banner at the
bottom of the screen keeps showing the workout name, the exercise and set
you're on, and any running timer. Tap it to jump back in.

If a workout was started from a template and you changed the plan on the fly
(added/removed an exercise or set, changed a target), Onus shows a **Template
Changes** review after you finish, listing what changed by exercise so you
can accept the changes into the template or reject them and keep the
template as-is.

## Supersets

A **Superset** pairs two exercises to perform back-to-back, at your own pace.
To create one, open a workout's options menu, choose **Add Superset**, select
two exercises, and tap **Group as Superset**. (The option needs at least two
standalone exercises in the workout.)

Each superset has its own name, a **Sets** count, and a **Rests** duration
taken after each round. During a workout, the superset's card shows both
exercises and only moves on once **both** have completed the current round.
If you remove one exercise from a superset, the other goes back to being a
regular standalone exercise.

## Circuit Workouts

A **Circuit** turns a whole workout into a timed interval session: Onus runs
the clock and moves you from exercise to exercise. To set one up, open the
workout's options menu and choose **Convert Workout to Circuit**. Every
exercise joins one circuit (any supersets are merged into it), and exercises
you add later join it automatically. To go back, choose **Convert Workout to
Standard**, which removes the timing and makes every exercise standalone
again.

A circuit has four settings:

- **Sets** — how many rounds to run. Every exercise in the circuit always has
  the same number of sets.
- **Work** — how long each exercise's interval lasts (60 seconds by default).
- **Transition** — rest between exercises within a round (15 seconds by
  default).
- **Recovery** — rest after a full round, before the next one starts (your
  Default Duration rest by default).

The −/+ buttons change these by your **Rest Timer → Increment** setting. You
can rename the circuit and reorder its exercises from its header menu.

**Running a circuit.** On iPhone, tap **Start Circuit** to begin the first
work interval. On Apple Watch, a 5-second "Starting in" countdown shows which
exercise is up first. The circuit then runs round by round: set 1 of every
exercise, then set 2, and so on. The timer shows **Now:** during work and
**Next:** during rests, plus where you are in the round. Work intervals are
shown in gold and rests in teal. The controls are **Pause**, **−**/**+**
(adjust the current phase by your Increment), and **Skip** (end the current
phase now; skipping a work interval completes that set). If you change the
Work time mid-session, it applies to the next interval.

**Logging reps.** Since the timer finishes each set for you, reps are
confirmed afterwards. A set whose interval has ended is waiting **to log**,
shown with its values and checkmark in gold. Onus pre-fills a suggestion
from your previous round, the template's target, or your last session. Tap
the check to log it as-is, or edit the values first. On Apple Watch, the **To
Log** page steps through the waiting sets with the ‹ and › buttons. If you
tap **Finish Workout** with sets still unlogged, Onus offers to take you back
to log them.

**Automatic pause.** So you don't miss an interval while you're entering
numbers, a circuit pauses on its own at the next phase change when you're
typing on iPhone, when you're on the To Log page on the Watch, or when
you've swiped the workout down to the banner. If you've left Onus, you'll
get a **Circuit Paused** notification. Press play to pick up where you left
off.

Circuit sets don't count toward [Personal Records](#personal-records), since
timed intervals aren't comparable to regular sets. Onus ships with a
preloaded **Spartacus Circuit** program if you want to try one out.

## Rest Timer

In a standard workout, completing a set automatically starts a rest timer
(except after the last set). It uses the exercise's own rest time, or your
Default Duration if it doesn't have one. The timer shows what's coming next
(the exercise and set number) and has **Pause**, **−**/**+**, and **Skip**
controls. The −/+ step is set in **Settings → Rest Timer → Increment**. It
keeps counting even if you background the app, alerting you with your chosen
sound when it ends.

## Personal Records

Onus automatically detects when a completed set is a new personal record for
that exercise and celebrates it with an on-screen trophy animation. PR sets
are marked with a trophy badge everywhere they appear — the active workout,
workout summaries, history, and [Progress Graphs](#progress-graphs) (where
PR points are drawn larger and in a distinct color) — so your best lifts are
always easy to spot. Sets logged during a [circuit](#circuit-workouts) aren't
counted as PRs.

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
pair exercises into supersets, turn a workout into a circuit, adjust targets,
or delete what you no longer need. When adding workouts to a program, the
confirm button shows how many you've selected (e.g. **Add (3)**). If you try
to close an editor with unsaved edits, Onus asks whether to **Discard
Changes** or **Keep Editing**.

**Copying.** To start from something you already have, tap the add button on
either sub-tab and choose **Copy Existing**, then pick the program or workout
to copy. The copy opens in the editor named "&lt;original&gt; (Copy)", ready
to rename, and nothing is saved until you tap Save.

- **Copying a workout** copies everything: notes, exercises, sets and
  targets, rest times, and supersets/circuits. The new workout stands alone
  and isn't added to any program.
- **Copying a program** keeps its workouts in the same order (but not its
  Active/Current status). By default the copy shares the original's
  workouts, so editing one updates both. Turn on **Duplicate Workout
  Templates** to give the new program its own independent copies of each
  workout instead. You can name each copy before saving.

## Exercise Library

Browse the full built-in exercise catalog from **Settings → Exercises →
Exercise Library**, filterable by muscle group, equipment type, and search
text. Each exercise entry shows its primary and secondary muscles and
equipment, and has a lookup menu for form instructions via YouTube,
muscleandstrength.com, musclewiki.com, or the free-exercise-db project —
opened in an in-app browser so you never leave Onus.

Muscle groups are Chest, Back, Shoulders, Biceps, Triceps, Forearms, Core,
Quads, Hamstrings, Glutes, Calves, Full Body, Cardio, and Other.

You can also add your own **custom exercises** with a name, primary muscle,
any number of secondary muscles, and equipment type — useful for movements
not in the built-in catalog or gym equipment that's a little different from
the standard. Secondary muscles appear in brackets after the primary one,
e.g. "Chest (Triceps, Shoulders)". Filters and progress use the primary
muscle. To change or remove a custom exercise later, swipe left on it in the
library and tap **Edit** or **Delete**. When adding exercises to a workout,
you can multi-select several at once instead of adding them one at a time.

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
  its sets (teal for done, pulsing for the current set, red for skipped), and
  **REPS** and **LB/KG** rows with −/+ buttons. Reps change by 1 and weight by
  the exercise's increment. You can also turn the **Digital Crown** to adjust
  whichever value is outlined, or tap the outlined value again to type an
  exact number on a keypad. Buttons along the bottom step to the previous or
  next set and complete the current one.
- In a standard workout, the rest timer appears on the same screen, with
  **−**/**+** around the countdown and **Pause** and **Skip** below it, plus
  what's up next. Circuit workouts get a dedicated interval timer page, and
  the set screen becomes the **To Log** page (see
  [Circuit Workouts](#circuit-workouts)).
- Firm haptic taps let you know when to lift: three buzzes when rest ends,
  two when a circuit work interval ends, and a tick for each of the last
  three seconds of a circuit interval.
- Swipe over to the **Now Playing** screen to control music without leaving
  the workout.
- A **summary** screen shows elapsed time, your live heart rate, and active
  calories at the top, followed by every exercise and set for the
  in-progress workout. You can add or remove sets and jump directly to any
  set. It flags whether you finished every set or left some incomplete, and
  if you tap **Finish Workout** with sets still open, Onus double-checks that
  you meant to before wrapping up.
- **Working out with both devices.** A workout started on either iPhone or
  Apple Watch joins the other automatically whenever they're in range, and
  both stay in sync while you train. Log a set on one and it shows up on the
  other, the timer matches on both, and the iPhone shows your Watch's live
  heart rate and calories. If both devices change the same set at once, the
  most recent change wins. Finishing or discarding on either device ends the
  workout on both.
- Workouts done only on the Watch sync back to iPhone automatically via
  WatchConnectivity — no internet connection involved, just a direct
  device-to-device link — and, just like on iPhone, you'll get a chance to
  review and accept any changes back into the template.
- A watch face complication gives you a one-tap shortcut straight into Onus.

## Settings

Onus is tuned to how you train:

- **Appearance** — light, dark, or system.
- **Exercises** — default source for the exercise library's form-lookup
  shortcut (YouTube, etc.), and access to the [Exercise Library](#exercise-library).
- **Rest Timer** — Default Duration, Increment (how much the −/+ timer
  buttons and circuit settings change by: 5, 10, 15, 30, or 60 seconds), and
  completion Sound.
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
value) to enrich your workout summaries. Every completed workout is also
written to Apple Health so it shows up alongside your other activity.
Workouts tracked with the Apple Watch are saved by the Watch with measured
heart rate and calories. Workouts logged from iPhone alone are saved by the
iPhone with estimated calories. A workout is never saved twice when you use
both devices. Strength workouts are saved as Traditional Strength Training,
and circuit workouts as High Intensity Interval Training. This is all
handled by Apple's HealthKit framework
directly on your device — see the [Privacy Policy](PRIVACY_POLICY.md) for
details.

## Privacy

Onus doesn't collect, transmit, or sell any of your data — full details are
in the [Privacy Policy](PRIVACY_POLICY.md).

## Support

Have a question, found a bug, or want to request a feature?
onus.support@gmail.com
