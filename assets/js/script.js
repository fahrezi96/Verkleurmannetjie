
document.querySelectorAll(".treeview a").forEach((d) => {
    d.addEventListener("click", (e) => {
        if (e.target.tagName.toLowerCase() === "a") e.target.nextElementSibling.classList.toggle("treeview-menu-show");
        else e.target.parentElement.nextElementSibling.classList.toggle("treeview-menu-show");
    });
});

document.getElementById("sidebar-toogle").addEventListener("click", () => {
    document.querySelector("aside").classList.toggle("sidenav-hide");
});
