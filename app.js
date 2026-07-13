const skillGrid = document.getElementById("skill-grid");
const skillPicker = document.getElementById("skill-picker");
const drillResults = document.getElementById("drill-results");
const resultsTitle = document.getElementById("results-title");
const resultsDescription = document.getElementById("results-description");
const drillList = document.getElementById("drill-list");
const backButton = document.getElementById("back-button");

function renderSkillGrid() {
  skillGrid.innerHTML = "";
  SKILLS.forEach((skill) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "skill-card";
    card.addEventListener("click", () => showDrills(skill.id));
    card.innerHTML = `
      <span class="skill-icon">${skill.icon}</span>
      <h3>${skill.name}</h3>
      <p>${skill.description}</p>
    `;
    skillGrid.appendChild(card);
  });
}

function showDrills(skillId) {
  const skill = SKILLS.find((s) => s.id === skillId);
  if (!skill) return;

  resultsTitle.textContent = `${skill.icon} ${skill.name} Drills`;
  resultsDescription.textContent = skill.description;

  drillList.innerHTML = "";
  skill.drills.forEach((drill) => {
    const card = document.createElement("article");
    card.className = "drill-card";
    const difficultyClass = `difficulty-${drill.difficulty.toLowerCase()}`;
    card.innerHTML = `
      <div class="drill-card-header">
        <h3>${drill.name}</h3>
        <span class="difficulty ${difficultyClass}">${drill.difficulty}</span>
      </div>
      <p class="drill-summary">${drill.summary}</p>
      <p class="drill-instructions">${drill.instructions}</p>
      <div class="drill-meta">
        <span><strong>Duration:</strong> ${drill.duration}</span>
        <span><strong>Equipment:</strong> ${drill.equipment}</span>
      </div>
    `;
    drillList.appendChild(card);
  });

  skillPicker.hidden = true;
  drillResults.hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showSkillPicker() {
  drillResults.hidden = true;
  skillPicker.hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

backButton.addEventListener("click", showSkillPicker);

renderSkillGrid();
