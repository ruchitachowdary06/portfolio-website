fetch("http://127.0.0.1:3000/projects")
  .then(res => res.json())
  .then(data => {
    const div = document.getElementById("projects");
    

    data.forEach(p => {
      div.innerHTML += `
        <div class="card">
          <h4>${p.title}</h4>
          <p>${p.description}</p>
          <p><b>Tech:</b> ${p.techStack.join(", ")}</p>
        </div>
      `;
    });
  });