document.addEventListener("DOMContentLoaded", () => {
    const target = document.getElementById("auto-type");
    const text = "Anwar";
    let index = 0;
    const autoType = () => {
        if (index < text.length) {
            target.textContent += text.charAt(index);
            index++;
            setTimeout(autoType, 200);
        }
    };
    autoType();
});
