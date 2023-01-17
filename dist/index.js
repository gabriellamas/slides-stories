import Slide from "./Slide.js";
const containter = document.getElementById('slide');
const slideElements = document.getElementById('slide-elements');
const controls = document.getElementById('slide-controls');
if (containter && slideElements && controls && slideElements.children.length) {
    new Slide(containter, Array.from(slideElements.children), controls, 3000);
}
//# sourceMappingURL=index.js.map