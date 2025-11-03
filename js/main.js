document.addEventListener("DOMContentLoaded", () => {
  const projects = [
    {
      title: "Website Blog Cá Nhân",
      image: "images/project1.jpg",
      description: "Blog cá nhân viết bằng HTML, CSS, JavaScript.",
      demoLink: "https://tenban.github.io/blog/",
      codeLink: "https://github.com/tenban/blog"
    },
    {
      title: "Ứng dụng To-Do List",
      image: "images/project2.jpg",
      description: "App quản lý công việc đơn giản bằng LocalStorage.",
      demoLink: "https://tenban.github.io/todo-app/",
      codeLink: "https://github.com/tenban/todo-app"
    }
  ];

  const projectList = document.getElementById("project-list");

  projects.forEach(proj => {
    const div = document.createElement("div");
    div.classList.add("project-card");
    div.innerHTML = `
      <img src="${proj.image}" alt="${proj.title}">
      <h3>${proj.title}</h3>
      <p>${proj.description}</p>
      <a href="${proj.demoLink}" class="btn" target="_blank">Xem Demo</a>
      <a href="${proj.codeLink}" class="btn" target="_blank">Xem Code</a>
    `;
    projectList.appendChild(div);
  });
});
