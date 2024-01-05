document.addEventListener("DOMContentLoaded", function() {
  const addProjectButton = document.getElementById("addProjectButton");
  const projectList = document.querySelector(".project-list");

  addProjectButton.addEventListener("click", function() {
    const projectName = document.getElementById("projectName").value;
    const projectLink = document.getElementById("projectLink").value;
    const projectDescription = document.getElementById("projectDescription").value;

    if (projectName.trim() !== '' && projectLink.trim() !== '' && projectDescription.trim() !== '') {
      const newProjectCard = document.createElement("div");
      newProjectCard.classList.add("project-card");

      const imgWidth = "70%"; 
      const imgHeight = "200px";

      newProjectCard.innerHTML = `
        <img src="${projectLink}" class="img1" alt="${projectName}"/>
        <div>
          <h3 class="head-text">${projectName}</h3>
          <p class="para">${projectDescription}</p>
          <button class="p-button">View Project</button>
        </div>
      `;

      projectList.appendChild(newProjectCard);

      document.getElementById("projectName").value = '';
      document.getElementById("projectLink").value = '';
      document.getElementById("projectDescription").value = '';

      console.log("New Project Added:");
      console.log({
        name: projectName,
        link: projectLink,
        description: projectDescription
      });
    } else {
      alert("Please fill in all fields");
    }
  });
});
