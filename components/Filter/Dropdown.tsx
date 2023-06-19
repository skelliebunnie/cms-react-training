import React from 'react'

import styles from "@/styles/FilterIndex.module.css"

type OptionProps = {
	options: [
		{
			value: string,
			label: string
		}
	]
}

const Dropdown = (props: OptionProps) => {

  return (
  	<select className={styles.filterInput}>
		{props.options.map(option => (<option key={option.value} value={option.value}>{option.label}</option>))}
	</select>
  )
}


export default Dropdown;