elements.mint = {
	color: "#aaffaa",
	behavior: behaviors.POWDER,
	category: "misc",
	state: "solid",
	tempHigh: 300,
	stateHigh: "dust",
	reactions: {
		"water": { elem1: "foam", elem2: "water" },
        "soda": { elem1: "explosion", elem2: "explosion" },
	}
}

elements.linerx = {
	color: "#ff00ff",
	behavior: behaviors.POWDER,
	category: "misc",
	state: "solid",
	tick: function(pixel) {
        tryMove(pixelMap[pixel.x][pixel.y],pixel.x,pixel.y-1)
	}
}

elements.patternpowder = {
	color: "#ffff00",
	behavior: behaviors.POWDER,
	category: "misc",
	state: "solid",
	tick: function(pixel) {
        tryMove(pixelMap[pixel.x][pixel.y],pixel.x-2,pixel.y-1)
        tryMove(pixelMap[pixel.x][pixel.y],pixel.x+2,pixel.y)
	}
}

elements.conway = {
    //tbc
}

elements.bore = {
    color: "#aaaaaa",
    behavior: [
        ["XX", "XX", "XX"],
        ["XX", "XX", "XX"],
        ["XX", "XX", "XX"]
    ]
}

elements.conway = {
    //tbc
}
