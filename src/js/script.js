import $ from "jquery"
import scrollFadeIn from "./module/scrollFadeIn";

window.onload = () => {
    scrollFadeIn();
    $(".wrapper").attr("data-show", true);
}
