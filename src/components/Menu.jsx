import "./menu.css";
import React, { useState } from "react";

export default function Menu() {
	const [open, setOpen] = useState(false);

	return (
		<>
			<div id="hambi" className={open ? "hambi open" : "hambi"} onClick={open ? () => setOpen(false) : () => setOpen(true)}>
				<div className="hambiLine" id="hL1"></div>
				<div className="hambiLine" id="hL2"></div>
				<div className="hambiLine" id="hL3"></div>
			</div>
			{open &&
				<div id="hambiMenu">
					<div className="hambiMenuItem" id="mI1"><a href="/#1">Text #1</a></div>
					<div className="hambiMenuItem" id="mI2"><a href="/#2">Text #2</a></div>
					<div className="hambiMenuItem" id="mI3"><a href="/#3">Text #3</a></div>
					<div className="hambiMenuItem" id="mI4"><a href="/#4">Text #4</a></div>
				</div>
			}
		</>
	);
}