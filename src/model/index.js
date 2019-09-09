export default function model(data) {
    const elements = [...document.querySelectorAll("[model]")];
    elements.forEach(element => {
        const key = element.getAttribute("model");
        element.addEventListener("input", ({target: { value }}) => {
            data[key] = value;
        })
    })
}