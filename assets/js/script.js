
document.querySelectorAll(".treeview a").forEach((d) => {
    d.addEventListener("click", (e) => {
        if (e.target.tagName.toLowerCase() === "a") e.target.nextElementSibling.classList.toggle("treeview-menu-show");
        else e.target.parentElement.nextElementSibling.classList.toggle("treeview-menu-show");
    });
});

// var accHD = document.querySelectorAll(".treeview a");

// for (i = 0; i < accHD.length; i++) {
//     accHD[i].addEventListener('click', toggleItem, false);
// }

// function toggleItem() {
//     let item = this.nextElementSibling;
//     for (i = 0; i < item.length; i++) {
//         item[i].classList.remove("treeview-menu-show");
//     }
//     if (item.className === "treeview-menu") item.classList.add("treeview-menu-show");
// }

document.getElementById("sidebar-toogle").addEventListener("click", () => {
    document.querySelector("aside").classList.toggle("sidenav-hide");
});

if (window.innerWidth <= 768) document.querySelector("aside").classList.add("sidenav-hide");

window.addEventListener("resize", () => {
    if (window.innerWidth <= 768) document.querySelector("aside").classList.add("sidenav-hide");
});