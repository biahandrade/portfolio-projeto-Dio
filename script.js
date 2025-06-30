const githubUser = "biahandrade"; // Altere para seu usuário do GitHub

async function fetchProjects() {
    const res = await fetch(`https://api.github.com/users/${githubUser}/repos?sort=updated`);
    const data = await res.json();
    const container = document.getElementById('github-projects');
    if (!container) return;
    container.innerHTML = "";
    data.slice(0, 4).forEach(repo => {
        const card = document.createElement('div');
        card.className = "projeto-card";
        card.innerHTML = `
            <span class="star-glow">
                <svg viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <circle cx="19" cy="19" r="8" fill="#fff" fill-opacity="0.9"/>
                        <circle cx="19" cy="19" r="6" fill="#E384FF" fill-opacity="0.5"/>
                        <path d="M19 2v8M19 28v8M2 19h8M28 19h8M8.22 8.22l5.66 5.66M24.12 24.12l5.66 5.66M8.22 29.78l5.66-5.66M24.12 13.88l5.66-5.66" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
                    </g>
                </svg>
            </span>
            <h3>${repo.name.replace(/-/g, ' ')}</h3>
            <p>${repo.description ? repo.description : "Projeto sem descrição."}</p>
            <a href="${repo.html_url}" target="_blank">Ver no GitHub</a>
        `;
        container.appendChild(card);
    });
}
fetchProjects();
