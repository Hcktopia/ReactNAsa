import React from 'react'


export default function LoadingSpinner({loading}) {
	return (
		loading &&
		<div className='spinner-container'>
			<div className='loading-spinner'></div>
		</div>
	)
}
