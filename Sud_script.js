let gameBrd = document.querySelector(".game-board")

for (let space = 0; space < 81; space++) {
	let input = document.createElement("input")
	input.classList.add("game-tile")
	gameBrd.appendChild(input)
}