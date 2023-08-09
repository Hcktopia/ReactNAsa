function getImages(selectedState) {
	return fetch(`https://images-api.nasa.gov/search?q=${selectedState}`)
		.then((res) => res.json())
		.then((res) => res)
		.catch((err) => err)
}

module.exports = {
	getImages
}
