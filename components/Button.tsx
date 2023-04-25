import React from 'react'

import { faBoltLightning } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type ButtonProps = {
	color: string
}

const Button = ({ color }: ButtonProps) => {
  return (
  	<div className="button" style={{borderRadius: "50%", border: "2px solid white", backgroundColor: `${color}`, display: "inline-block", width: "2.35rem", height: "2.35rem", margin: "0 auto", display: "flex", justifyContent: "center", alignItems: "center", position: "relative", top: "-1.35rem"}}>
  		<FontAwesomeIcon icon={faBoltLightning} style={{fontSize: "1rem", lineHeight: "1rem", margin: "0 auto", textAlign: "center", color: "white"}} />
  	</div>
  );
}

export default Button;