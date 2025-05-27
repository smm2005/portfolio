var p = null;
const projtag = document.getElementById("projects");

const createProjectTabs = () => {
    fetch("./projects.json")
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
                newTab.className = "row";
                newTab.id = "tab";
                
                var imgTab = document.createElement("div");
                imgTab.className = "col-lg-2"

                var contentTab = document.createElement("div");
                contentTab.className = "col-lg-10";

                // Image creation
                const img = new Image();
                img.src = elem.path;
                img.alt = elem.name;
                imgTab.appendChild(img);
                newTab.appendChild(imgTab);

                // Link creation
                const header = document.createElement("h4");
                const link = document.createElement("a");
                const linkText = document.createTextNode(elem.name);
                link.href = elem.href;
                link.appendChild(linkText);
                header.appendChild(link);
                contentTab.appendChild(header);

                // Description creation
                const desc = document.createElement("p");
                const description = document.createTextNode(elem.desc);
                desc.appendChild(description);
                contentTab.appendChild(desc);

                // Skills creation
                const skills = document.createElement("p");
                const skilltext = document.createTextNode("Used: ".concat(elem.skills));
                skills.appendChild(skilltext);
                contentTab.appendChild(skills);

                // Append to projects
                newTab.appendChild(contentTab);
                projtag.appendChild(newTab);
            });
            console.log(p);
        })
    .catch(error => console.log(`${error}: File is loaded incorrectly`));
};

document.addEventListener("DOMContentLoaded", ()=>{ createProjectTabs(); });