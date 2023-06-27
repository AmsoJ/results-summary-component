export default function testTaken({category, score, icon, $b, $p1, $p2, divClass}) {
    return `<div class="${divClass}">
        <img src="${icon}" alt="icon">

        <p class="${$p1}"><b>${category}</b></p>

        <p class="${$p2}">
        <b class="${$b}">${score}</b> / 100
        </p>
    </div>`
}