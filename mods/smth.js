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
elements.weird = {
	color: "ff00ff",
	behavior: behaviors.POWDER,
	category: "misc",
	state: "solid",
	tick: function(pixel) {
		pixel.y = pixel.y + 1
		deletePixel(pixel.x, pixel.y+1)
	}
}
