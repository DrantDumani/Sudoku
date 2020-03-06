let gameBrd = document.querySelector(".game-board")

for (let row = 1; row <= 9; row++) {
	let trow = document.createElement("tr")
	trow.classList.add("table-row")
	for (let cell = 1; cell <= 9; cell++) {
		let tcell = document.createElement("td")
		let input = document.createElement("input")
		input.setAttribute("maxlength", 1)
		input.classList.add("num-space")
		if ((row == 3) || (row == 6)) {
			tcell.classList.add("section-divider-V")
		}
		if ((cell == 3) || (cell == 6)) {
			tcell.classList.add("section-divider-H")
		} 
		tcell.appendChild(input)
		tcell.classList.add("game-tile")
		trow.appendChild(tcell)
	}
	gameBrd.appendChild(trow)
}