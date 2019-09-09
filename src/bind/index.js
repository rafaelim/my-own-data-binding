export default function interpolate(data) {
    const elements = [...document.querySelectorAll("[bind]")];
    elements.forEach(element => {
        const key = element.getAttribute("bind");
        if(key && data.hasOwnProperty(key)) {
            this.notifier.register(key, () => element.textContent = data[key]);
        }
    })
}