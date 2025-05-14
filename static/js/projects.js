var p = null;
const projtag = document.getElementById("projects");

const createProjectTabs = () => {
    fetch("../projects.json")
    .then(response =>{
        if (!response.ok){
            throw new Error(`Status ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
            p = data.projects;
            p.forEach(elem => {
                var newTab = document.createElement("div");
                newTab.className = "tab";
                
                // Image creation
                const img = new Image();
                img.src = elem.path;
                img.alt = elem.name;
                newTab.appendChild(img);

                // Link creation
                const header = document.createElement("h4");
                const link = document.createElement("a");
                const linkText = document.createTextNode(elem.name);
                link.href = "";
                link.appendChild(linkText);
                header.appendChild(link);
                newTab.appendChild(header);

                // Description creation
                const desc = document.createElement("p");
                const description = document.createTextNode(elem.desc);
                desc.appendChild(description);
                newTab.appendChild(desc);

                // Skills creation
                const skills = document.createElement("p");
                const skilltext = document.createTextNode("Used: ".concat(elem.skills));
                skills.appendChild(skilltext);
                newTab.appendChild(skills);

                // Append to projects
                projtag.appendChild(newTab);
            });
            console.log(p);
        })
    .catch(error => console.log(`${error}: File is loaded incorrectly`));
};

createProjectTabs();