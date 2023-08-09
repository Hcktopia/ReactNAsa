import React from 'react'

const Images = (props) => {
	console.log(props.images[0])

	const Description = (description) => {
		// Remove <a> tags from description
		const withoutLinks = description.replace(/<a\b[^>]*>(.*?)<\/a>/g, '')

		
		const withoutCredit = withoutLinks.split('Credit:')[0]

		return withoutCredit.trim() // Trim any leading/trailing whitespace
	}

	return (
		<div className='image-container'>
			{props.images.map((data) => {
				const item = data.data[0]

				return (
					<div key={item.date_created}>
						{data.links && <img src={data.links[0].href} alt={item.data} />}

						<h2>{item.data}</h2>

						<p>Date Created: {item.date_created}</p>
						
						<p>Description: {Description(item.description)}</p>
					</div>
				)
			})}
		</div>
	)
}

export default Images
