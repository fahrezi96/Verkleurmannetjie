
document.querySelectorAll(".treeview a").forEach((d) => {
    d.addEventListener("click", (e) => {
        if (e.target.tagName.toLowerCase() === "a") e.target.nextElementSibling.classList.toggle("treeview-menu-show");
        else e.target.parentElement.nextElementSibling.classList.toggle("treeview-menu-show");
    });
});

document.getElementById("sidebar-toogle").addEventListener("click", () => {
    document.querySelector("aside").classList.toggle("sidenav-hide");
});

if (window.innerWidth <= 768) document.querySelector("aside").classList.add("sidenav-hide");

window.addEventListener("resize", () => {
    if (window.innerWidth <= 768) document.querySelector("aside").classList.add("sidenav-hide");
});