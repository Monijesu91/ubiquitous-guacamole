function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function changeColor(element) {
    const bodyColor = getRandomColor();
    const nameColor = getRandomColor();

    document.body.style.backgroundColor = bodyColor;
    element.style.color = nameColor;
}
