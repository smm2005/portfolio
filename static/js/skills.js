const langs = document.getElementById("langs");
const tools = document.getElementById("ts");
const mods = document.getElementById("mods");
const webdev = document.getElementById("webdevb");

const lang_tab = document.getElementById("languages");
const tool_tab = document.getElementById("tools");
const modules_tab = document.getElementById("modules");
const dev_tab = document.getElementById("webdev");

const reset = () => {
    var content = document.getElementsByClassName('tabcontent');

    for (const elem of content){
        elem.style.display = 'none';
    }

    var links = document.getElementsByClassName('links');
    for (const elem of links){
        elem.className = elem.className.replace(' active', '');
    }
}

reset();

langs.addEventListener("click", (event)=>{
    reset();
    lang_tab.style.display = "block";
    event.currentTarget.className += " active";
});

mods.addEventListener("click", (event)=>{
    reset();
    modules_tab.style.display = "block";
    event.currentTarget.className += " active";
});

tools.addEventListener("click", (event)=>{
    reset();
    tool_tab.style.display = "block";
    event.currentTarget.className += " active";
});

webdev.addEventListener("click", (event)=>{
    reset();
    dev_tab.style.display = "block";
    event.currentTarget.className += " active";
});

langs.click();

