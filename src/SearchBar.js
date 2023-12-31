import React, { useState } from 'react'

const SearchBar = (props) => {
	const [selectedState, setSelectedState] = useState('')
	  const statesList = [
			'Alabama',
			'Alaska',
			'Arizona',
			'Arkansas',
			'California',
			'Colorado',
			'Connecticut',
			'Delaware',
			'Florida',
			'Georgia',
			'Hawaii',
			'Idaho',
			'Illinois',
			'Indiana',
			'Iowa',
			'Kansas',
			'Kentucky',
			'Louisiana',
			'Maine',
			'Maryland',
			'Massachusetts',
			'Michigan',
			'Minnesota',
			'Mississippi',
			'Missouri',
			'Montana',
			'Nebraska',
			'Nevada',
			'New Hampshire',
			'New Jersey',
			'New Mexico',
			'New York',
			'North Carolina',
			'North Dakota',
			'Ohio',
			'Oklahoma',
			'Oregon',
			'Pennsylvania',
			'Rhode Island',
			'South Carolina',
			'South Dakota',
			'Tennessee',
			'Texas',
			'Utah',
			'Vermont',
			'Virginia',
			'Washington',
			'West Virginia',
			'Wisconsin',
			'Wyoming',
		]


	const handleSearch = () => {
		if (selectedState === '') {
      alert(
        'Yo Bro Cant you see you did not pick a state??? Or Invalid State Name! Please make sure the spelling is correct. Or It is the states of the USA'
      );
    } else if (!statesList.includes(selectedState)) {
      alert('Please check your spelling! The state does not exist in the list.');
    } else {
      props.onClick(selectedState);
    }
			


		// Array.include 
		// 	alert('please check your spelling!')
		// 	return
		// }
	}

	const handleStateChange = (event) => {
		setSelectedState(event.target.value) //updates the s
	}

	return (
		<div>
			<input
				type='text'
				placeholder='Type state name'
				value={selectedState}
				onChange={handleStateChange}
			/>
			<select value={selectedState} onChange={handleStateChange}>
				<option value=''>Type a state</option>
				<option value='Alabama'>Alabama</option>
				<option value='Alaska'>Alaska</option>
				<option value='Arizona'>Arizona</option>
				<option value='Arkansas'>Arkansas</option>
				<option value='California'>California</option>
				<option value='Colorado'>Colorado</option>
				<option value='Connecticut'>Connecticut</option>
				<option value='Delaware'>Delaware</option>
				<option value='Florida'>Florida</option>
				<option value='Georgia'>Georgia</option>
				<option value='Hawaii'>Hawaii</option>
				<option value='Idaho'>Idaho</option>
				<option value='Illinois'>Illinois</option>
				<option value='Indiana'>Indiana</option>
				<option value='Iowa'>Iowa</option>
				<option value='Kansas'>Kansas</option>
				<option value='Kentucky'>Kentucky</option>
				<option value='Louisiana'>Louisiana</option>
				<option value='Maine'>Maine</option>
				<option value='Maryland'>Maryland</option>
				<option value='Massachusetts'>Massachusetts</option>
				<option value='Michigan'>Michigan</option>
				<option value='Minnesota'>Minnesota</option>
				<option value='Mississippi'>Mississippi</option>
				<option value='Missouri'>Missouri</option>
				<option value='Montana'>Montana</option>
				<option value='Nebraska'>Nebraska</option>
				<option value='Nevada'>Nevada</option>
				<option value='New Hampshire'>New Hampshire</option>
				<option value='New Jersey'>New Jersey</option>
				<option value='New Mexico'>New Mexico</option>
				<option value='New York'>New York</option>
				<option value='North Carolina'>North Carolina</option>
				<option value='North Dakota'>North Dakota</option>
				<option value='Ohio'>Ohio</option>
				<option value='Oklahoma'>Oklahoma</option>
				<option value='Oregon'>Oregon</option>
				<option value='Pennsylvania'>Pennsylvania</option>
				<option value='Rhode Island'>Rhode Island</option>
				<option value='South Carolina'>South Carolina</option>
				<option value='South Dakota'>South Dakota</option>
				<option value='Tennessee'>Tennessee</option>
				<option value='Texas'>Texas</option>
				<option value='Utah'>Utah</option>
				<option value='Vermont'>Vermont</option>
				<option value='Virginia'>Virginia</option>
				<option value='Washington'>Washington</option>
				<option value='West Virginia'>West Virginia</option>
				<option value='Wisconsin'>Wisconsin</option>
				<option value='Wyoming'>Wyoming</option>
			</select>
			<button onClick={handleSearch}>Search</button>
		</div>
	)
}

export default SearchBar
