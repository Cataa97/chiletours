
const dropDowns = document.querySelectorAll(".dropdown");
dropDowns.forEach((dropDown) => {
    const select = dropDown.querySelector(".select");
    const arrow = dropDown.querySelector(".arrow");
    const menu = dropDown.querySelector(".menu");
    const menuItems = dropDown.querySelectorAll(".menu li");
    const selectTitle = dropDown.querySelector(".select-title");

    select.addEventListener("click", () => {
        select.classList.toggle("select-clicked");
        arrow.classList.toggle("arrow-rotate");
        menu.classList.toggle("menu-open");
    });


    menuItems.forEach((item) => {

        item.addEventListener("click", () => {

            selectTitle.innerText = item.innerText;
            select.classList.remove("select-clicked");
            arrow.classList.remove("arrow-rotate");
            menu.classList.remove("menu-open");
            menuItems.forEach((item) => {
                item.classList.remove("active");
            });
            item.classList.add("active");
        });
    });
});
