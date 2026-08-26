(function () {
  "use strict";

  /* ---- Theme toggle ------------------------------------------------ */
  var root = document.documentElement;
  var toggle = document.querySelector("[data-theme-toggle]");

  function currentTheme() {
    var stored = null;
    try {
      stored = localStorage.getItem("onus-theme");
    } catch (e) {}
    if (stored === "light" || stored === "dark") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem("onus-theme", next);
      } catch (e) {}
    });
  }

  /* ---- iOS screenshot Light/Dark tabs ------------------------------- */
  var iosSlugs = [
    "01_splash",
    "02_onboarding",
    "03_home",
    "04_history_empty",
    "05_progress_empty",
    "06_programs",
    "07_program_editor",
    "08_workouts",
    "09_workout_editor",
    "10_workout_editor_add_exercises",
    "11_workout_editor_configure",
    "12_settings_top",
    "13_settings_bottom",
    "14_active_session",
    "15_active_session_rest_timer",
    "16_active_session_personal_record",
    "17_active_session_completed",
    "18_active_session_finish_workout",
    "19_history_full",
    "20_session_summary",
    "21_session_summary_template_changes",
    "22_progress_full",
  ];

  var watchShots = [
    { file: "01_home_no_active_programs", label: "Home (No Active Programs)" },
    { file: "02_home", label: "Home" },
    { file: "03_workout_detail", label: "Workout Detail" },
    { file: "04_active_session_active_set", label: "Active Session" },
    { file: "05_active_session_summary", label: "Active Session Summary" },
    {
      file: "06_active_session_rest_timer",
      label: "Active Session Rest Timer",
    },
    {
      file: "07_active_session_personal_record",
      label: "Active Session Personal Record",
    },
    {
      file: "08_active_session_now_playing",
      label: "Active Session Now Playing",
    },
    {
      file: "09_active_session_completed",
      label: "Active Session Completed",
    },
    { file: "10_session_summary", label: "Session Summary" },
    { file: "11_template_changes", label: "Template Changes" },
  ];

  function prettify(slug) {
    return slug
      .replace(/^\d+[_-]/, "")
      .replace(/[_-]/g, " ")
      .replace(/\b\w/g, function (c) {
        return c.toUpperCase();
      });
  }

  var iosGallery = document.querySelector("[data-ios-gallery]");
  var iosVariant = "Dark";

  function renderIosGallery() {
    if (!iosGallery) return;
    iosGallery.innerHTML = "";
    iosSlugs.forEach(function (slug) {
      var src = "Screenshots/iOS/" + iosVariant + "/" + slug + ".png";
      var label = prettify(slug);
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "shot-card";
      btn.innerHTML =
        '<span class="frame"><img src="' +
        src +
        '" alt="Onus iPhone screenshot — ' +
        label +
        " (" +
        iosVariant +
        ' mode)" loading="lazy" width="280" height="609"></span>' +
        '<span class="cap">' +
        label +
        "</span>";
      btn.addEventListener("click", function () {
        openLightbox(src, label);
      });
      iosGallery.appendChild(btn);
    });
  }

  var iosTabs = document.querySelectorAll("[data-ios-tab]");
  iosTabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      iosVariant = tab.getAttribute("data-ios-tab");
      iosTabs.forEach(function (t) {
        t.classList.toggle("is-active", t === tab);
      });
      renderIosGallery();
    });
  });

  renderIosGallery();

  var watchGallery = document.querySelector("[data-watch-gallery]");
  if (watchGallery) {
    watchShots.forEach(function (shot) {
      var src = "Screenshots/WatchOS/" + shot.file + ".png";
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "shot-card watch";
      btn.innerHTML =
        '<span class="frame"><img src="' +
        src +
        '" alt="Onus Apple Watch screenshot — ' +
        shot.label +
        '" loading="lazy" width="211" height="257"></span>' +
        '<span class="cap">' +
        shot.label +
        "</span>";
      btn.addEventListener("click", function () {
        openLightbox(src, shot.label);
      });
      watchGallery.appendChild(btn);
    });
  }

  /* ---- Lightbox -------------------------------------------------------- */
  var lightbox = document.querySelector("[data-lightbox]");
  var lightboxImg = lightbox ? lightbox.querySelector("img") : null;

  function openLightbox(src, alt) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightbox.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  if (lightbox) {
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox || e.target.hasAttribute("data-lightbox-close"))
        closeLightbox();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeLightbox();
    });
  }
})();
