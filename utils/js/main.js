
document.addEventListener("DOMContentLoaded", () => {
  const projects = [
  {
    name: "12V Solenoid Password Lock",
    description: "Simple 12V solenoid lock with passwords using AVR microcontroller",
    img: "assets/image/IMG_20250626_133257.jpg",
    link: "https://github.com/leafhuy/DigitallockbaseCode"
  },
  {
    name: "SATELLITE GROUND SATION",
    description: "Receiving realtime data from satellite using SDR system.",
    img: "assets/image/ami_rgb_Clean_Longwave_IR_Window_Band_map.png",
    link: "https://github.com/username/project2"
  }
  // Thêm project mới chỉ cần push object vào mảng này
];

const projectList = document.getElementById("project-list");

projects.forEach(project => {
  const card = document.createElement("a");
  card.href = project.link;
  card.target = "_blank";
  card.className = "project-card";

    card.innerHTML = `
    <div class="project-img-wrapper">
      <img src="${project.img}" alt="${project.name}">
    </div>
    <h3>${project.name}</h3>
    <p>${project.description}</p>
  `;


  projectList.appendChild(card);
});
});


/*==========THEME CHANGER========== */
const btn = document.getElementById("theme-toggle");
const body = document.body;

// Load theme đã lưu
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  btn.textContent = "☀️";
}

// Toggle theme khi nhấn nút
btn.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    btn.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    btn.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});
