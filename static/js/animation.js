document.addEventListener("DOMContentLoaded", ()=>{
    let atag = document.getElementById("navbar").getElementsByClassName("hov");
    Array.from(atag).forEach((hov) => {
            hov.addEventListener("mouseover", ()=>{
                hov.classList.add("hovered");
            });

            hov.addEventListener("mouseout", ()=>{
                hov.classList.add("unhovered");
                hov.classList.remove("hovered");

                setTimeout(()=>{
                    hov.classList.add("hovered");
                }, 5);

                setTimeout(()=>{ hov.addEventListener("animationend", animationEnd()); }, 1000);
            });

            function animationEnd(){
                hov.classList.remove("unhovered", "hovered");
                hov.removeEventListener("animationend", animationEnd);
            }; 
    });
});