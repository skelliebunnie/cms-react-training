import React from 'react'

import Dropdown from "@/components/Filter/Dropdown"

import styles from "@/styles/FilterIndex.module.css"

const FilterIndex = () => {
	
	const characterOptions = [
		{ label: "Character", value: "" },
		{ label: "Iron Man", value: "Iron Man" },
		{ label: "Captain America", value: "Captain America" },
		{ label: "Thor", value: "Thor" },
		{ label: "Deadpool", value: "Deadpool" },
		{ label: "Scarlet Witch", value: "Scarlet Witch" },
		{ label: "Black Widow", value: "Black Widow" },
		{ label: "Wasp", value: "Wasp" },
		{ label: "Gamora", value: "Gamora" },
	];
	
	const creatorOptions = [
		{ label: "Creator", value: "" },
		{ label: "Kate Leth", value: "Kate Leth" },
		{ label: "Brian Michael Bendis", value: "Brian Michael Bendis" },
		{ label: "Stan Lee", value: "Stan Lee" },
		{ label: "Steve Ditko", value: "Steve Ditko" },
		{ label: "Jack Kirby", value: "Jack Kirby" },
	]

  return (
  	<div className={styles.filterIndex}>
		<span>Filter by:</span>
		<Dropdown options={characterOptions} />
		<Dropdown options={creatorOptions} />
	</div>
  )
}


export default FilterIndex;