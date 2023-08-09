import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import Logo from './Logo'
import Description from './Description'
import Images from './Images'
import { getImages } from './api'
import LoadingSpinner from './LoadingSpinner'


const ImagesList = () => {
	const [selectedState, setSelectedState] = useState('')
	const [images, setImages] = useState([])
	// console.log(images)
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		
		if (selectedState) {
			setLoading(true)

			setImages([])	
			getImages(selectedState).then((data) => {
				console.log(data)
				setImages(data.collection.items)
			})
		}
	}, [selectedState])
	// console.log(getImages)

	
	

	function handleSearch (stateName)  {
			
		// Update the selected state when clicked
		setSelectedState(stateName)
	}
  
	
	return (
		<div className='body'>
			<Logo />
			<SearchBar onClick={handleSearch} />
			<Description />
			{images.length === 0 && <LoadingSpinner />}
			<Images images={images} />
			<LoadingSpinner loading={loading} />
		</div>
	)
}

export default ImagesList

//as long as images is an empty array I want the loading spinner to show
//as long as loading is true I want the spinner to show.
//as long as data has a links property the image show.
// you can remove the instagram after that html tag ends to see what you can do.