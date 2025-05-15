var l = ["python", "java", "javascript", "c", "cplusplus"];
var t = ["vscode", "powershell", "git", "github", "linux", "bash", "mysql"];
var m = ["opencv", "arduino", "numpy"];
var w = ["html5", "css3", "react", "nodejs", "express", "flask"]

var type = ["l", "t", "m", "w"];

const imageMap = (type) => {
    switch (type){
        case "l":
            l.forEach(lang => {
                var img = new Image();
                img.src = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${lang}/${lang}-plain.svg`;
                document.getElementById("languages").appendChild(img);
            });
            break;
        case "t":
            t.forEach(tool => {
                var img = new Image();
                if (img === "mysql"){
                    img.src = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tool}/${tool}-original.svg`;
                }
                else{
                    img.src = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tool}/${tool}-plain.svg`;
                }
                document.getElementById("tools").appendChild(img);
            });
            break;
        case "m":
            m.forEach(module => {
                var img = new Image();
                img.src = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${module}/${module}-plain.svg`;
                document.getElementById("modules").appendChild(img);
            });
            break;
        case "w":
            w.forEach(dev => {
                var img = new Image();
                if (dev === "flask" || dev === "express" || dev === "react"){
                    img.src = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${dev}/${dev}-original.svg`;
                }
                else{
                    img.src = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${dev}/${dev}-plain.svg`;
                }
                document.getElementById("webdev").appendChild(img);
            })
            break;
    }
}

document.addEventListener("DOMContentLoaded", ()=>{
    type.forEach(elem => {
        imageMap(elem);
    })
})