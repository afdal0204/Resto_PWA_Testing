/* eslint-disable eol-last */
/* eslint-disable space-before-function-paren */
/* eslint-disable indent */
/* eslint-disable quotes */
import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/responsive.css";
import App from "./views/app";
import swRegister from "./utils/sw-register";

const app = new App({
    button: document.querySelector("#menu"),
    drawer: document.querySelector("#drawer"),
    content: document.querySelector("#maincontent"),
});

window.addEventListener("hashchange", () => {
    app.renderPage();
});

window.addEventListener("load", async() => {
    app.renderPage();
    await swRegister();
});