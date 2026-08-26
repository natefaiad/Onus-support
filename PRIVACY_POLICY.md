# Privacy Policy for Onus

_Last updated: 2026-08-25_

Onus ("the app") is a workout tracking app for iPhone and Apple Watch. This
policy describes what data the app accesses and how it is used.

## Summary

Onus does not collect, transmit, or sell any of your data to us or to any
third party. All workout data is created and stored on your device, syncs
only between your own iPhone and Apple Watch, and is backed up (if you have
iCloud enabled) only to your own private iCloud account — never to a server
we operate. The app contains no analytics, no advertising, and no
third-party tracking of any kind.

## Data Onus Stores

Workouts, exercises, programs, and personal records you create are stored
locally on your device using Apple's SwiftData framework. This data is never
uploaded to any server operated by us or any third party. If you delete the
app, this data is deleted with it (unless you have an Onus iCloud backup, see
below, or iCloud device backups enabled at the iOS level).

Onus also stores a small number of app preferences (e.g. your chosen weight
unit, appearance setting, and rest-timer defaults) locally using
`UserDefaults`, Apple's standard on-device settings storage. These are never
transmitted anywhere.

## Apple Watch Sync

If you use the Onus Watch App, your active workout and program data are
synced directly between your iPhone and Apple Watch using Apple's
WatchConnectivity framework. This is a direct, on-device connection between
your own paired devices — it does not pass through any external server.

## iCloud Backup

Onus automatically saves a private, compressed backup of your programs,
workouts, and history to your iCloud Drive after you finish a workout and
periodically while the app is running. You can also trigger a backup or
restore from a previous one manually from **Settings → Import/Export Data →
iCloud Backup**.

This backup is written to your own private iCloud account using Apple's
iCloud APIs — it is never sent to a server operated by us, and no one else
(including us) can access it. It is governed by Apple's iCloud terms and your
device's iCloud storage. You can turn off iCloud for Onus, or delete any
backup, at any time in **Settings → [your name] → iCloud → Apps Using
iCloud** on your iPhone. Restoring from a backup only adds data — it never
deletes anything already on your device.

## HealthKit

With your permission, Onus reads the following from Apple Health:

- Heart rate (to display during a workout)
- Active energy burned (to display calories burned during a workout)
- Body mass (used only to estimate calories burned when the Watch doesn't
  supply a measured value; this estimate is clearly labeled "Estimated" in
  the app)

With your permission, Onus writes completed workouts to Apple Health so they
appear alongside your other activity data.

You can review or revoke Onus's Health access at any time in
**Settings → Privacy & Security → Health → Onus** on your iPhone. Health data
is managed entirely by Apple's HealthKit framework and is never sent to us or
any third party — it stays within Apple's Health ecosystem on your device.

## Notifications

Onus asks for permission to show local notifications so the rest timer can
alert you with a sound when it ends, even if you've left the app. These are
local, on-device notifications only — Onus does not use push notifications
and no notification content is sent to us or anyone else. You can revoke
this permission at any time in **Settings → Notifications → Onus** on your
iPhone.

## Third-Party Links

The exercise library includes optional links to watch a form-tutorial video
for a given exercise. Tapping one opens an in-app browser (not a web view we
control) to a third-party site of your choosing:

- YouTube
- muscleandstrength.com
- musclewiki.com
- the free-exercise-db project page

These are standard web pages operated by those third parties, subject to
their own privacy policies, not ours. Onus does not send any of your data to
these sites beyond the search terms needed to load the page (e.g. an
exercise name).

## Analytics & Tracking

Onus contains no analytics SDKs, no crash reporting services, no advertising
frameworks, and no tracking of any kind. Nothing about your usage of the app
is collected or shared with us or anyone else.

## Children's Privacy

Onus does not knowingly collect data from anyone, so this applies equally
regardless of age. The app is not directed at children and does not require
account creation.

## Changes to This Policy

If this policy changes, the updated version will be posted at this same
location with a new "Last updated" date.

## Contact

onus.support@gmail.com
