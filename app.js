const STORAGE = {
  profile: "fitforge.profile",
  calendar: "fitforge.calendar",
  completions: "fitforge.completions"
};

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const muscleGroups = [
  {
    name: "Chest",
    accent: "#9be15d",
    cue: "Push strength",
    home: [
      { name: "Tempo Push-up", sets: "4", reps: "8-15", equipment: "Bodyweight", tips: ["Lower for 3 seconds.", "Keep ribs down and elbows at 45 degrees."] },
      { name: "Decline Push-up", sets: "3", reps: "8-12", equipment: "Chair or bed", tips: ["Feet elevated.", "Pause briefly at the bottom."] },
      { name: "Floor Press", sets: "4", reps: "10-14", equipment: "Backpack", tips: ["Press straight up.", "Squeeze chest at lockout."] },
      { name: "Close Push-up", sets: "3", reps: "AMRAP", equipment: "Bodyweight", tips: ["Hands under shoulders.", "Stop 1 rep before form breaks."] }
    ],
    gym: [
      { name: "Barbell Bench Press", sets: "4", reps: "5-8", equipment: "Bench, barbell", tips: ["Drive feet into the floor.", "Touch lower chest with control."] },
      { name: "Incline Dumbbell Press", sets: "3", reps: "8-12", equipment: "Incline bench", tips: ["Use a neutral wrist.", "Keep shoulder blades set."] },
      { name: "Cable Fly", sets: "3", reps: "12-15", equipment: "Cable stack", tips: ["Move in a wide arc.", "Do not over-stretch the shoulder."] },
      { name: "Machine Chest Press", sets: "3", reps: "10-12", equipment: "Chest press", tips: ["Adjust handles to mid-chest.", "Control the return."] }
    ]
  },
  {
    name: "Back",
    accent: "#2bb7a8",
    cue: "Pull power",
    home: [
      { name: "Table Row", sets: "4", reps: "6-12", equipment: "Sturdy table", tips: ["Pull chest to table edge.", "Brace your glutes."] },
      { name: "Backpack Row", sets: "4", reps: "10-15", equipment: "Loaded bag", tips: ["Hinge at hips.", "Pull elbows toward pockets."] },
      { name: "Prone W Raise", sets: "3", reps: "12-18", equipment: "Bodyweight", tips: ["Lift thumbs up.", "Keep neck relaxed."] },
      { name: "Reverse Snow Angel", sets: "3", reps: "10-14", equipment: "Bodyweight", tips: ["Move slowly.", "Keep hands off the floor."] }
    ],
    gym: [
      { name: "Lat Pulldown", sets: "4", reps: "8-12", equipment: "Pulldown station", tips: ["Pull elbows down.", "Avoid swinging back."] },
      { name: "Seated Cable Row", sets: "4", reps: "8-12", equipment: "Cable row", tips: ["Start with shoulder blades.", "Pause at ribs."] },
      { name: "Chest Supported Row", sets: "3", reps: "10-12", equipment: "Incline bench", tips: ["Keep chest planted.", "Use a full reach."] },
      { name: "Assisted Pull-up", sets: "3", reps: "6-10", equipment: "Pull-up station", tips: ["Lead with chest.", "Lower with control."] }
    ]
  },
  {
    name: "Legs",
    accent: "#ff6f4e",
    cue: "Lower body",
    home: [
      { name: "Split Squat", sets: "4", reps: "8-12 each", equipment: "Bodyweight", tips: ["Front foot flat.", "Drop straight down."] },
      { name: "Goblet Squat", sets: "4", reps: "10-15", equipment: "Backpack", tips: ["Knees track over toes.", "Keep chest tall."] },
      { name: "Hip Thrust", sets: "4", reps: "12-18", equipment: "Sofa or bed", tips: ["Tuck pelvis at top.", "Push through heels."] },
      { name: "Calf Raise", sets: "4", reps: "15-25", equipment: "Step", tips: ["Full stretch.", "Pause high."] }
    ],
    gym: [
      { name: "Back Squat", sets: "4", reps: "5-8", equipment: "Rack, barbell", tips: ["Brace before descent.", "Keep bar over mid-foot."] },
      { name: "Romanian Deadlift", sets: "4", reps: "8-10", equipment: "Barbell", tips: ["Hinge hips back.", "Feel hamstrings stretch."] },
      { name: "Leg Press", sets: "3", reps: "10-14", equipment: "Leg press", tips: ["Do not lock knees hard.", "Use controlled depth."] },
      { name: "Leg Curl", sets: "3", reps: "12-15", equipment: "Machine", tips: ["Squeeze at peak.", "Slow return."] }
    ]
  },
  {
    name: "Shoulders",
    accent: "#f2b84b",
    cue: "Delts and posture",
    home: [
      { name: "Pike Push-up", sets: "4", reps: "6-12", equipment: "Bodyweight", tips: ["Hips high.", "Head moves toward hands."] },
      { name: "Backpack Press", sets: "4", reps: "8-12", equipment: "Loaded bag", tips: ["Brace abs.", "Finish biceps near ears."] },
      { name: "Lateral Raise", sets: "3", reps: "12-20", equipment: "Bottles", tips: ["Soft elbows.", "Stop around shoulder height."] },
      { name: "Wall Slide", sets: "3", reps: "10-15", equipment: "Wall", tips: ["Keep ribs down.", "Move slowly."] }
    ],
    gym: [
      { name: "Overhead Press", sets: "4", reps: "5-8", equipment: "Barbell", tips: ["Squeeze glutes.", "Bar path stays close."] },
      { name: "Dumbbell Shoulder Press", sets: "3", reps: "8-12", equipment: "Dumbbells", tips: ["Neutral wrist.", "Control bottom."] },
      { name: "Cable Lateral Raise", sets: "3", reps: "12-18", equipment: "Cable stack", tips: ["Lead with elbow.", "Keep tension constant."] },
      { name: "Face Pull", sets: "3", reps: "12-18", equipment: "Rope cable", tips: ["Pull toward forehead.", "Rotate thumbs back."] }
    ]
  },
  {
    name: "Arms",
    accent: "#3b82f6",
    cue: "Biceps and triceps",
    home: [
      { name: "Backpack Curl", sets: "4", reps: "10-15", equipment: "Loaded bag", tips: ["Elbows pinned.", "No swinging."] },
      { name: "Chair Dip", sets: "3", reps: "8-14", equipment: "Chair", tips: ["Shoulders down.", "Bend elbows behind you."] },
      { name: "Towel Curl Hold", sets: "3", reps: "20-30 sec", equipment: "Towel", tips: ["Pull against your foot.", "Keep tension steady."] },
      { name: "Diamond Push-up", sets: "3", reps: "6-12", equipment: "Bodyweight", tips: ["Hands close.", "Keep elbows tucked."] }
    ],
    gym: [
      { name: "EZ Bar Curl", sets: "4", reps: "8-12", equipment: "EZ bar", tips: ["Stand tall.", "Lower fully."] },
      { name: "Rope Pressdown", sets: "4", reps: "10-15", equipment: "Cable stack", tips: ["Split rope at bottom.", "Elbows stay close."] },
      { name: "Incline Dumbbell Curl", sets: "3", reps: "10-12", equipment: "Incline bench", tips: ["Let arms hang.", "Do not rush the stretch."] },
      { name: "Overhead Cable Extension", sets: "3", reps: "10-14", equipment: "Cable stack", tips: ["Keep upper arms still.", "Reach long overhead."] }
    ]
  },
  {
    name: "Core",
    accent: "#7c3aed",
    cue: "Abs and stability",
    home: [
      { name: "Dead Bug", sets: "3", reps: "8-12 each", equipment: "Mat", tips: ["Lower back stays down.", "Move opposite arm and leg."] },
      { name: "Plank", sets: "3", reps: "30-60 sec", equipment: "Mat", tips: ["Ribs down.", "Squeeze glutes."] },
      { name: "Side Plank", sets: "3", reps: "20-45 sec each", equipment: "Mat", tips: ["Stack feet.", "Lift hips high."] },
      { name: "Mountain Climber", sets: "4", reps: "30 sec", equipment: "Bodyweight", tips: ["Hands under shoulders.", "Move fast without bouncing."] }
    ],
    gym: [
      { name: "Cable Crunch", sets: "4", reps: "10-15", equipment: "Cable stack", tips: ["Round upper back.", "Hips stay still."] },
      { name: "Hanging Knee Raise", sets: "3", reps: "8-12", equipment: "Pull-up bar", tips: ["Tilt pelvis up.", "Avoid swinging."] },
      { name: "Pallof Press", sets: "3", reps: "10-12 each", equipment: "Cable stack", tips: ["Resist rotation.", "Exhale as arms extend."] },
      { name: "Weighted Plank", sets: "3", reps: "30-45 sec", equipment: "Plate", tips: ["Neutral spine.", "Stop before hips sag."] }
    ]
  }
];

const mealTemplates = {
  nonveg: {
    breakfast: "Egg omelette, oats, fruit",
    lunch: "Chicken or fish, rice or roti, dal, vegetables",
    snack: "Greek yogurt or roasted chana with fruit",
    dinner: "Lean protein, salad, cooked vegetables, small carb serving",
    extra: "Milk, egg, or chicken sandwich"
  },
  eggetarian: {
    breakfast: "Boiled eggs, oats, fruit",
    lunch: "Egg curry, rice or roti, dal, vegetables",
    snack: "Curd bowl or roasted chana",
    dinner: "Paneer or egg bhurji, salad, vegetables",
    extra: "Egg toast or curd with banana"
  },
  vegetarian: {
    breakfast: "Oats or poha with curd and fruit",
    lunch: "Dal, rice or roti, paneer or tofu, vegetables",
    snack: "Roasted chana, curd, or sprouts",
    dinner: "Paneer or tofu, salad, cooked vegetables, small carb serving",
    extra: "Milk, sprouts, or peanut chaat"
  },
  vegan: {
    breakfast: "Oats with soy milk, seeds, fruit",
    lunch: "Dal or chickpeas, rice or roti, tofu, vegetables",
    snack: "Roasted chana, sprouts, fruit",
    dinner: "Tofu or lentils, salad, cooked vegetables, small carb serving",
    extra: "Soy yogurt, hummus toast, or chana salad"
  }
};

const goalCopy = {
  "fat-loss": {
    title: "Fat loss",
    calorieShift: -350,
    protein: 1.6,
    note: "Keep protein high, add vegetables first, and keep a small calorie deficit."
  },
  maintain: {
    title: "Maintain",
    calorieShift: 0,
    protein: 1.4,
    note: "Keep meals balanced and use the calendar to stay consistent."
  },
  "muscle-gain": {
    title: "Muscle gain",
    calorieShift: 300,
    protein: 1.8,
    note: "Use a controlled surplus, progressive overload, and enough sleep."
  }
};

const state = {
  view: "home",
  selectedLocation: "home",
  selectedMuscle: "Chest",
  profile: loadJson(STORAGE.profile, null),
  calendar: loadJson(STORAGE.calendar, null),
  completions: loadJson(STORAGE.completions, {})
};

const els = {
  views: document.querySelectorAll("[data-view-panel]"),
  navButtons: document.querySelectorAll(".bottom-nav [data-view]"),
  locationButtons: document.querySelectorAll("[data-location]"),
  muscleFilters: document.querySelector("#muscleFilters"),
  workoutList: document.querySelector("#workoutList"),
  exerciseModal: document.querySelector("#exerciseModal"),
  exerciseModalBody: document.querySelector("#exerciseModalBody"),
  exerciseModalTitle: document.querySelector("#exerciseModalTitle"),
  exerciseModalPlace: document.querySelector("#exerciseModalPlace"),
  homeMuscleTiles: document.querySelector("#homeMuscleTiles"),
  profileForm: document.querySelector("#profileForm"),
  bmiResult: document.querySelector("#bmiResult"),
  dietPlan: document.querySelector("#dietPlan"),
  calendarGrid: document.querySelector("#calendarGrid"),
  calendarSummary: document.querySelector("#calendarSummary"),
  daySelect: document.querySelector("#daySelect"),
  calendarMuscle: document.querySelector("#calendarMuscle"),
  calendarLocation: document.querySelector("#calendarLocation"),
  todayWorkout: document.querySelector("#todayWorkout"),
  todayWorkoutTitle: document.querySelector("#todayWorkoutTitle"),
  homeBmi: document.querySelector("#homeBmi"),
  homeBmiLabel: document.querySelector("#homeBmiLabel"),
  homeBodyType: document.querySelector("#homeBodyType"),
  homeBodyCue: document.querySelector("#homeBodyCue"),
  homePlan: document.querySelector("#homePlan"),
  homeCalories: document.querySelector("#homeCalories"),
  todaySummary: document.querySelector("#todaySummary")
};

init();

function init() {
  if (state.profile) {
    setFormValues(state.profile);
    state.selectedLocation = state.profile.preferredLocation || state.selectedLocation;
  }

  if (!state.calendar) {
    state.calendar = buildDefaultCalendar(state.profile);
    saveJson(STORAGE.calendar, state.calendar);
  }

  renderAll();
  bindEvents();
  setupInstallPrompt();
  registerServiceWorker();
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const viewTarget = event.target.closest("[data-go]");
    if (viewTarget) {
      setView(viewTarget.dataset.go);
      return;
    }

    const navTarget = event.target.closest(".bottom-nav [data-view]");
    if (navTarget) {
      setView(navTarget.dataset.view);
      return;
    }

    const closeExerciseTarget = event.target.closest("[data-close-exercise]");
    if (closeExerciseTarget || event.target === els.exerciseModal) {
      closeExerciseAnimation();
      return;
    }

    const exerciseTarget = event.target.closest("[data-exercise-index]");
    if (exerciseTarget) {
      openExerciseAnimation(Number(exerciseTarget.dataset.exerciseIndex));
      return;
    }

    const muscleTarget = event.target.closest("[data-muscle]");
    if (muscleTarget) {
      state.selectedMuscle = muscleTarget.dataset.muscle;
      renderWorkoutFilters();
      renderWorkouts();
      if (muscleTarget.dataset.openWorkouts === "true") setView("workouts");
      return;
    }

    const completeTarget = event.target.closest("[data-complete-day]");
    if (completeTarget) {
      const day = completeTarget.dataset.completeDay;
      state.completions[day] = !state.completions[day];
      saveJson(STORAGE.completions, state.completions);
      renderCalendar();
      renderToday();
    }
  });

  els.locationButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedLocation = button.dataset.location;
      renderLocationButtons();
      renderWorkouts();
    });
  });

  els.profileForm.addEventListener("submit", (event) => {
    event.preventDefault();
    state.profile = readProfileForm();
    state.selectedLocation = state.profile.preferredLocation;
    saveJson(STORAGE.profile, state.profile);
    saveJson(STORAGE.calendar, state.calendar);
    renderAll();
    setView("bmi");
  });

  document.querySelector("#resetProfile").addEventListener("click", () => {
    localStorage.removeItem(STORAGE.profile);
    state.profile = null;
    els.profileForm.reset();
    renderAll();
  });

  document.querySelector("#generateWeek").addEventListener("click", () => {
    state.calendar = buildDefaultCalendar(state.profile);
    saveJson(STORAGE.calendar, state.calendar);
    renderCalendar();
    renderToday();
  });

  document.querySelector("#saveCalendarDay").addEventListener("click", () => {
    const day = els.daySelect.value;
    const index = days.indexOf(day);
    if (index < 0) return;

    state.calendar[index] = {
      day,
      muscle: els.calendarMuscle.value,
      location: els.calendarLocation.value
    };
    saveJson(STORAGE.calendar, state.calendar);
    renderCalendar();
    renderToday();
  });

  document.querySelector("#clearCompletions").addEventListener("click", () => {
    state.completions = {};
    saveJson(STORAGE.completions, state.completions);
    renderCalendar();
    renderToday();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !els.exerciseModal.hidden) {
      closeExerciseAnimation();
    }
  });
}

function renderAll() {
  renderHomeMuscleTiles();
  renderWorkoutFilters();
  renderLocationButtons();
  renderWorkouts();
  renderProfileResults();
  renderCalendarControls();
  renderCalendar();
  renderToday();
  renderHomeMetrics();
}

function setView(view) {
  state.view = view;
  els.views.forEach((panel) => panel.classList.toggle("is-active", panel.dataset.viewPanel === view));
  els.navButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.view === view));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderLocationButtons() {
  els.locationButtons.forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.location === state.selectedLocation);
  });
}

function renderHomeMuscleTiles() {
  els.homeMuscleTiles.innerHTML = muscleGroups.map((group) => `
    <article class="muscle-tile">
      <button type="button" data-muscle="${group.name}" data-open-workouts="true">
        <span class="tile-icon" style="background:${group.accent}">${group.name.slice(0, 1)}</span>
        <strong>${group.name}</strong>
        <small>${group.cue}</small>
      </button>
    </article>
  `).join("");
}

function renderWorkoutFilters() {
  els.muscleFilters.innerHTML = muscleGroups.map((group) => `
    <button type="button" class="${group.name === state.selectedMuscle ? "is-selected" : ""}" data-muscle="${group.name}">
      ${group.name}
    </button>
  `).join("");
}

function renderWorkouts() {
  const group = getMuscle(state.selectedMuscle);
  const exercises = group[state.selectedLocation];

  els.workoutList.innerHTML = exercises.map((exercise, index) => `
    <article class="workout-card">
      ${renderExerciseAnimation(exercise, group, "compact")}
      <div class="card-top">
        <div>
          <span class="badge" style="background:${group.accent}22;color:${darkenLabel(group.name)}">${group.name}</span>
          <h3>${exercise.name}</h3>
        </div>
        <span class="badge">${state.selectedLocation === "home" ? "Home" : "Gym"}</span>
      </div>
      <div class="workout-meta">
        <div class="meta-box"><span>Sets</span><strong>${exercise.sets}</strong></div>
        <div class="meta-box"><span>Reps</span><strong>${exercise.reps}</strong></div>
        <div class="meta-box"><span>Gear</span><strong>${exercise.equipment}</strong></div>
      </div>
      <ul class="tips">
        ${exercise.tips.map((tip) => `<li>${tip}</li>`).join("")}
      </ul>
      <button class="animation-action" type="button" data-exercise-index="${index}">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 5 11 7-11 7z" /></svg>
        <span>Animation</span>
      </button>
    </article>
  `).join("");
}

function openExerciseAnimation(index) {
  const group = getMuscle(state.selectedMuscle);
  const exercise = group[state.selectedLocation][index];
  if (!exercise) return;

  els.exerciseModalTitle.textContent = exercise.name;
  els.exerciseModalPlace.textContent = `${group.name} | ${state.selectedLocation}`;
  els.exerciseModalBody.innerHTML = `
    ${renderExerciseAnimation(exercise, group, "large")}
    <div class="workout-meta">
      <div class="meta-box"><span>Sets</span><strong>${exercise.sets}</strong></div>
      <div class="meta-box"><span>Reps</span><strong>${exercise.reps}</strong></div>
      <div class="meta-box"><span>Gear</span><strong>${exercise.equipment}</strong></div>
    </div>
    <ul class="tips">
      ${exercise.tips.map((tip) => `<li>${tip}</li>`).join("")}
    </ul>
  `;
  els.exerciseModal.hidden = false;
  document.body.classList.add("modal-open");
}

function closeExerciseAnimation() {
  els.exerciseModal.hidden = true;
  document.body.classList.remove("modal-open");
}

function renderExerciseAnimation(exercise, group, size) {
  const motion = inferMotion(exercise.name);
  return `
    <div class="exercise-visual ${size} motion-${motion}" style="--accent:${group.accent};--label:${darkenLabel(group.name)}" aria-label="${exercise.name} animation">
      <div class="motion-stage" aria-hidden="true">
        <span class="motion-floor"></span>
        <span class="motion-load"></span>
        <span class="motion-head"></span>
        <span class="motion-torso"></span>
        <span class="motion-arm motion-arm-left"></span>
        <span class="motion-arm motion-arm-right"></span>
        <span class="motion-leg motion-leg-left"></span>
        <span class="motion-leg motion-leg-right"></span>
        <span class="motion-sweat"></span>
      </div>
      <span class="motion-label">${motionLabel(motion)}</span>
    </div>
  `;
}

function renderProfileResults() {
  if (!state.profile) {
    els.bmiResult.className = "result-panel empty";
    els.bmiResult.innerHTML = "<h3>Your BMI result</h3><p>Generate your plan to see BMI, calorie target, body type, and training notes.</p>";
    els.dietPlan.className = "result-panel empty";
    els.dietPlan.innerHTML = "<h3>Your diet plan</h3><p>Complete the food habit survey to create a meal structure matched to your goal.</p>";
    return;
  }

  const result = analyzeProfile(state.profile);
  els.bmiResult.className = "result-panel";
  els.bmiResult.innerHTML = `
    <p class="eyebrow">BMI Calculator</p>
    <h3>${result.category.label}</h3>
    <div class="result-value">${result.bmi.toFixed(1)}</div>
    <span class="status-line">${result.bodyType.name}</span>
    <ul class="plan-list">
      <li><strong>Calories</strong><span>${result.targetCalories} kcal/day target</span></li>
      <li><strong>Protein</strong><span>${result.proteinGrams} g/day target</span></li>
      <li><strong>Training bias</strong><span>${result.bodyType.training}</span></li>
    </ul>
  `;

  const diet = generateDietPlan(state.profile, result);
  els.dietPlan.className = "result-panel";
  els.dietPlan.innerHTML = `
    <p class="eyebrow">Diet Plan</p>
    <h3>${goalCopy[state.profile.goal].title} meal structure</h3>
    <p>${goalCopy[state.profile.goal].note}</p>
    <ul class="plan-list">
      ${diet.meals.map((meal) => `<li><strong>${meal.label}</strong><span>${meal.food}</span></li>`).join("")}
    </ul>
    <ul class="tips">
      ${diet.actions.map((action) => `<li>${action}</li>`).join("")}
    </ul>
  `;
}

function renderHomeMetrics() {
  if (!state.profile) {
    els.homeBmi.textContent = "--";
    els.homeBmiLabel.textContent = "Not calculated";
    els.homeBodyType.textContent = "--";
    els.homeBodyCue.textContent = "Survey pending";
    els.homePlan.textContent = "Balanced";
    els.homeCalories.textContent = "Set profile";
    els.todaySummary.textContent = "Set your profile to generate workouts, diet targets, and a calendar that adapts to your goal.";
    return;
  }

  const result = analyzeProfile(state.profile);
  els.homeBmi.textContent = result.bmi.toFixed(1);
  els.homeBmiLabel.textContent = result.category.label;
  els.homeBodyType.textContent = result.bodyType.short;
  els.homeBodyCue.textContent = result.bodyType.cue;
  els.homePlan.textContent = goalCopy[state.profile.goal].title;
  els.homeCalories.textContent = `${result.targetCalories} kcal`;
  els.todaySummary.textContent = `${result.bodyType.name}: ${result.bodyType.training}`;
}

function renderCalendarControls() {
  els.daySelect.innerHTML = days.map((day) => `<option value="${day}">${day}</option>`).join("");
  els.calendarMuscle.innerHTML = muscleGroups.map((group) => `<option value="${group.name}">${group.name}</option>`).join("");
  els.calendarLocation.value = state.profile?.preferredLocation || state.selectedLocation;
}

function renderCalendar() {
  const doneCount = days.filter((day) => state.completions[day]).length;
  els.calendarSummary.textContent = `${doneCount} of ${days.length} training days completed this week.`;

  const todayIndex = getTodayIndex();
  els.calendarGrid.innerHTML = state.calendar.map((plan, index) => {
    const group = getMuscle(plan.muscle);
    const sample = group[plan.location].slice(0, 2).map((exercise) => exercise.name).join(", ");
    const done = Boolean(state.completions[plan.day]);
    return `
      <article class="calendar-card ${index === todayIndex ? "is-today" : ""}">
        <div class="calendar-day">
          <strong>${plan.day}</strong>
          <span>${index === todayIndex ? "Today" : plan.location}</span>
        </div>
        <p class="calendar-title">${plan.muscle}</p>
        <p class="calendar-detail">${sample}</p>
        <button class="complete-button ${done ? "is-done" : ""}" type="button" data-complete-day="${plan.day}">
          ${done ? "Completed" : "Mark done"}
        </button>
      </article>
    `;
  }).join("");
}

function renderToday() {
  const todayIndex = getTodayIndex();
  const plan = state.calendar[todayIndex] || state.calendar[0];
  const group = getMuscle(plan.muscle);
  const exercises = group[plan.location].slice(0, 3);
  const done = Boolean(state.completions[plan.day]);

  els.todayWorkoutTitle.textContent = `${plan.day}: ${plan.muscle}`;
  els.todayWorkout.innerHTML = `
    <span class="badge" style="background:${group.accent}22;color:${darkenLabel(group.name)}">${plan.location}</span>
    <h3>${done ? "Completed" : `${plan.muscle} session`}</h3>
    <p class="calendar-detail">${exercises.map((exercise) => exercise.name).join(", ")}</p>
    <div class="workout-meta">
      <div class="meta-box"><span>Exercises</span><strong>${exercises.length}</strong></div>
      <div class="meta-box"><span>Place</span><strong>${plan.location}</strong></div>
      <div class="meta-box"><span>Status</span><strong>${done ? "Done" : "Ready"}</strong></div>
    </div>
  `;
}

function inferMotion(name) {
  const text = name.toLowerCase();
  if (text.includes("fly")) return "fly";
  if (text.includes("pulldown") || text.includes("pull-up")) return "pull";
  if (text.includes("row") || text.includes("face pull") || text.includes("snow angel")) return "row";
  if (text.includes("pike") || text.includes("overhead press") || text.includes("shoulder press") || text.includes("wall slide") || text.includes("lateral raise")) return "overhead";
  if (text.includes("squat") || text.includes("leg press")) return "squat";
  if (text.includes("split")) return "lunge";
  if (text.includes("deadlift") || text.includes("hip thrust")) return "hinge";
  if (text.includes("calf") || text.includes("leg curl")) return "legdrive";
  if (text.includes("curl") && !text.includes("leg")) return "curl";
  if (text.includes("dip") || text.includes("pressdown") || text.includes("extension")) return "triceps";
  if (text.includes("plank")) return "plank";
  if (text.includes("bug") || text.includes("climber") || text.includes("crunch") || text.includes("knee raise") || text.includes("pallof")) return "core";
  return "push";
}

function motionLabel(motion) {
  return {
    push: "Press path",
    fly: "Chest arc",
    pull: "Vertical pull",
    row: "Row path",
    overhead: "Overhead path",
    squat: "Squat depth",
    lunge: "Split stance",
    hinge: "Hip hinge",
    legdrive: "Lower-leg drive",
    curl: "Curl path",
    triceps: "Elbow extension",
    plank: "Hold line",
    core: "Core control"
  }[motion] || "Movement path";
}

function readProfileForm() {
  const data = new FormData(els.profileForm);
  return {
    gender: data.get("gender"),
    age: clampNumber(data.get("age"), 13, 90, 25),
    height: clampNumber(data.get("height"), 120, 230, 175),
    weight: clampNumber(data.get("weight"), 30, 250, 70),
    goal: data.get("goal"),
    activity: data.get("activity"),
    frame: data.get("frame"),
    gainPattern: data.get("gainPattern"),
    build: data.get("build"),
    trainingLevel: data.get("trainingLevel"),
    dietStyle: data.get("dietStyle"),
    meals: data.get("meals"),
    proteinHabit: data.get("proteinHabit"),
    vegetables: data.get("vegetables"),
    sweetDrinks: data.get("sweetDrinks"),
    cooking: data.get("cooking"),
    avoid: data.get("avoid"),
    preferredLocation: data.get("preferredLocation")
  };
}

function setFormValues(profile) {
  Object.entries(profile).forEach(([key, value]) => {
    const field = els.profileForm.elements[key];
    if (field) field.value = value;
  });
}

function analyzeProfile(profile) {
  const heightM = profile.height / 100;
  const bmi = profile.weight / (heightM * heightM);
  const bmr = profile.gender === "male"
    ? (10 * profile.weight) + (6.25 * profile.height) - (5 * profile.age) + 5
    : (10 * profile.weight) + (6.25 * profile.height) - (5 * profile.age) - 161;
  const activityMultiplier = { light: 1.35, moderate: 1.55, high: 1.75 }[profile.activity] || 1.55;
  const maintenance = Math.round(bmr * activityMultiplier);
  const goal = goalCopy[profile.goal] || goalCopy.maintain;
  const targetCalories = Math.max(1300, maintenance + goal.calorieShift);
  const proteinGrams = Math.round(profile.weight * goal.protein);

  return {
    bmi,
    category: getBmiCategory(bmi),
    bmr: Math.round(bmr),
    maintenance,
    targetCalories,
    proteinGrams,
    bodyType: identifyBodyType(profile, bmi)
  };
}

function getBmiCategory(bmi) {
  if (bmi < 18.5) return { label: "Underweight", tone: "amber" };
  if (bmi < 25) return { label: "Healthy weight", tone: "green" };
  if (bmi < 30) return { label: "Overweight", tone: "coral" };
  return { label: "Obesity range", tone: "coral" };
}

function identifyBodyType(profile, bmi) {
  const score = { ectomorph: 0, mesomorph: 0, endomorph: 0 };

  if (profile.frame === "narrow") score.ectomorph += 2;
  if (profile.frame === "medium") score.mesomorph += 2;
  if (profile.frame === "broad") score.endomorph += 1.5;

  if (profile.gainPattern === "hard") score.ectomorph += 2;
  if (profile.gainPattern === "steady") score.mesomorph += 2;
  if (profile.gainPattern === "easy") score.endomorph += 2;

  if (profile.build === "lean") score.ectomorph += 1.5;
  if (profile.build === "athletic") score.mesomorph += 1.5;
  if (profile.build === "soft") score.endomorph += 1.5;

  if (bmi < 20) score.ectomorph += 1;
  if (bmi >= 20 && bmi < 27) score.mesomorph += 1;
  if (bmi >= 27) score.endomorph += 1;

  const winner = Object.entries(score).sort((a, b) => b[1] - a[1])[0][0];
  const map = {
    ectomorph: {
      name: "Ectomorph leaning",
      short: "Ecto",
      cue: "Lean build",
      training: "Prioritize progressive strength, longer rests, and enough calories."
    },
    mesomorph: {
      name: "Mesomorph leaning",
      short: "Meso",
      cue: "Athletic build",
      training: "Blend compound lifting, accessories, and steady conditioning."
    },
    endomorph: {
      name: "Endomorph leaning",
      short: "Endo",
      cue: "Solid build",
      training: "Use strength training plus brisk conditioning and high-fiber meals."
    }
  };

  return map[winner];
}

function generateDietPlan(profile, result) {
  const base = { ...mealTemplates[profile.dietStyle] };
  applyAvoidances(base, profile.avoid);

  const meals = [
    { label: "Breakfast", food: base.breakfast },
    { label: "Lunch", food: base.lunch },
    { label: "Snack", food: base.snack },
    { label: "Dinner", food: base.dinner }
  ];

  if (profile.meals === "3") {
    meals.splice(2, 1);
  }

  if (profile.meals === "5") {
    meals.push({ label: "Extra", food: base.extra });
  }

  const actions = [
    `${result.targetCalories} kcal and about ${result.proteinGrams} g protein per day.`,
    "Aim for fruit or vegetables in at least two meals."
  ];

  if (profile.proteinHabit === "low") actions.push("Add a clear protein source to breakfast and dinner.");
  if (profile.vegetables === "low") actions.push("Add one bowl of vegetables or salad before your main carb serving.");
  if (profile.sweetDrinks === "daily") actions.push("Replace daily sweet drinks with water, lime water, or unsweetened tea most days.");
  if (profile.cooking === "quick") actions.push("Keep fast staples ready: boiled eggs, curd, tofu, sprouts, dal, roasted chana, and fruit.");
  if (profile.goal === "muscle-gain") actions.push("Add a pre-workout carb such as banana, poha, rice, or toast.");
  if (profile.goal === "fat-loss") actions.push("Keep dinner lighter: protein plus vegetables first, then carbs if still hungry.");

  return { meals, actions };
}

function applyAvoidances(base, avoid) {
  if (avoid === "dairy") {
    Object.keys(base).forEach((key) => {
      base[key] = base[key]
        .replaceAll("Greek yogurt", "soy yogurt")
        .replaceAll("curd", "soy curd")
        .replaceAll("Curd", "Soy curd")
        .replaceAll("paneer", "tofu")
        .replaceAll("Paneer", "Tofu")
        .replaceAll("Milk", "Soy milk")
        .replaceAll("milk", "soy milk");
    });
  }

  if (avoid === "gluten") {
    Object.keys(base).forEach((key) => {
      base[key] = base[key]
        .replaceAll("roti", "rice")
        .replaceAll("toast", "rice cakes");
    });
  }

  if (avoid === "nuts") {
    Object.keys(base).forEach((key) => {
      base[key] = base[key]
        .replaceAll("peanut chaat", "sprouts chaat")
        .replaceAll("seeds", "fruit");
    });
  }
}

function buildDefaultCalendar(profile) {
  const preferredLocation = profile?.preferredLocation || "home";
  const goal = profile?.goal || "maintain";
  const sequence = goal === "fat-loss"
    ? ["Legs", "Back", "Core", "Chest", "Shoulders", "Arms", "Core"]
    : goal === "muscle-gain"
      ? ["Chest", "Back", "Legs", "Shoulders", "Arms", "Core", "Legs"]
      : ["Chest", "Legs", "Back", "Core", "Shoulders", "Arms", "Core"];

  return days.map((day, index) => ({
    day,
    muscle: sequence[index],
    location: preferredLocation
  }));
}

function getMuscle(name) {
  return muscleGroups.find((group) => group.name === name) || muscleGroups[0];
}

function getTodayIndex() {
  return (new Date().getDay() + 6) % 7;
}

function clampNumber(value, min, max, fallback) {
  const number = Number(value);
  if (!Number.isFinite(number)) return fallback;
  return Math.min(max, Math.max(min, number));
}

function darkenLabel(name) {
  return {
    Chest: "#416b2f",
    Back: "#156e64",
    Legs: "#a13a24",
    Shoulders: "#7b5414",
    Arms: "#1d4f9e",
    Core: "#5b21b6"
  }[name] || "#111714";
}

function loadJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function saveJson(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Local storage can be unavailable in some locked-down WebViews.
  }
}

function setupInstallPrompt() {
  let deferredPrompt = null;
  const installButton = document.querySelector("#installButton");

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredPrompt = event;
    installButton.hidden = false;
  });

  installButton.addEventListener("click", async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    installButton.hidden = true;
  });
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js").catch(() => {});
  });
}
