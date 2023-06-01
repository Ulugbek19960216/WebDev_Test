

function changeStyle() {
    const title = document.getElementById("text");
    const  btn = document.getElementById("js--style");
    
    btn.style.backgroundColor = "green";
    btn.style.padding = "15px";
    btn.style.borderRadius = "5px";
    btn.style.border = "none";
    btn.style.color = "white";
    btn.style.fontWeight = "bold";

    title.style.color = "red";
    title.style.fontSize = "24px";
    title.style.fontWeight = "bold";
}