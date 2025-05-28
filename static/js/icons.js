var l = ["python", "java", "javascript", "c", "cplusplus"];
var t = ["vscode", "powershell", "git", "github", "linux", "bash", "mysql"];
var m = ["opencv", "numpy"];
var w = ["html5", "css3", "react", "nodejs", "express", "flask", "bootstrap"]

var type = ["l", "t", "m", "w"];

const re = /fill="#\w+"/gm
const re2 = /fill-rule="\w+"/gm
const re3 = /d=/gm

const fetchSVG = (svg, id) => {
    let vectorg = "";
    fetch(svg)
    .then(res => res.text())
    .then(data => {
        if (data.search(re2) != -1){
            data = data.replace(re2, "fill-rule=\"evenodd\" fill=#F0FFFF");
        }
        else if (data.search(re) != -1){
            data = data.replace(re, "fill=#F0FFFF");
        }
        else{
            data = data.replace(re3, "fill=#F0FFFF d=");
        }
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
                if (tool === "mysql" || tool === "github"){
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