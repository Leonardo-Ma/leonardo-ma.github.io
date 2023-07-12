class Project extends HTMLElement
{
    connectedCallback()
    {
        const projectTitle = this.getAttribute("projectTitle");
        const imgFile = this.getAttribute("imgFile");
        const imgAlt = this.getAttribute("imgAlt")
        const projectDescription = this.getAttribute("projectDescription");
        const githubUrl = this.getAttribute("githubUrl");
        const dockerUrl = this.getAttribute("dockerUrl");

        this.innerHTML = `
        <div class="project">
            <h2 class="projectTitle">${projectTitle}</h2>
            <div class="projectImage">
                <img src="/./assets/${imgFile}" alt="${imgAlt}">
            </div>
            <p class="projectDescription">${projectDescription}</p>
            <a href="${githubUrl}">
                <ion-icon name="logo-github" size="large"></ion-icon>
            </a>
            <a href="${dockerUrl}"> <!-- Docker logo-->
                <ion-icon name="logo-docker" size="large"></ion-icon>
            </a>
        </div>
      `;
    }
}

customElements.define("project-element", Project);