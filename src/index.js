function changeTheme(button) {
    let body = document.querySelector("body");
    if (body.classList.contains("light-theme")) {
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
        button.innerHTML = "Light Theme";
    } else {
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
        button.innerHTML = "Dark Theme";
    }
}
let themeButton = document.querySelector("#toggle-theme");
themeButton.innerHTML;
themeButton.addEventListener("click", () => changeTheme(themeButton));
