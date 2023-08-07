function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function changeColor(element) {
    const names= document.querySelectorAll (".name");
    names.forEach(name => {
        if (name === element) {
            const color= getRandomColor();
name.style.backgroundColor = color;
name.style.color= getConstrastColor(color);
        } 
    })
}
 function getConstrastColor(hexColor) {
    const r = parseInt(hexColor.substr(1,2), 16);
    const g = parseInt(hexColor.substr(3,2), 16);
    const b = parseInt(hexColor.substr(5,2), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.5 ? "#000000" : "#ffffff";
 }