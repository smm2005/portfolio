var l = ["python", "java", "javascript", "c", "cplusplus"];
var t = ["vscode", "powershell", "git", "github", "linux", "bash", "mysql"];
var m = ["opencv", "arduino", "numpy"];
var w = ["html5", "css3", "react", "nodejs", "express", "flask"]

var type = ["l", "t", "m", "w"];

const re = /fill="#\w+"/gm

const fetchSVG = (svg, id) => {
    let vectorg = "";
    fetch(svg)
    .then(res => res.text())
    .then(data => {
        data = data.replace(re, "fill=#000000");
        vectorg = data;
        var container = document.createElement("div");
        container.className = "icon";
        container.innerHTML = vectorg;
        document.getElementById(id).appendChild(container);
    });
    console.log(vectorg);
}

const imageMap = (type) => {
    switch (type){
        case "l":
            l.forEach(lang => {
                var link = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${lang}/${lang}-plain.svg`
                fetchSVG(link, "languages");
            });
            break;
        case "t":
            t.forEach(tool => {
                if (tool === "mysql"){
                    var link = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tool}/${tool}-original.svg`;
                    fetchSVG(link, "tools");
                }
                else{
                    var link = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tool}/${tool}-plain.svg`;
                    fetchSVG(link, "tools");
                }
            });
            break;
        case "m":
            m.forEach(module => {
                var link = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${module}/${module}-plain.svg`;
                fetchSVG(link, "modules");
            });
            break;
        case "w":
            w.forEach(dev => {
                if (dev === "flask" || dev === "express" || dev === "react"){
                    var link = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${dev}/${dev}-original.svg`;
                    fetchSVG(link, "webdev");
                }
                else{
                    var link = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${dev}/${dev}-plain.svg`;
                    fetchSVG(link, "webdev");
                }
            })
            break;
    }
}

document.addEventListener("DOMContentLoaded", ()=>{
    type.forEach(elem => {
        imageMap(elem);
    })
})