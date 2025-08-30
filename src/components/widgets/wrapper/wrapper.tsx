import React from "react";
import s from './wrapper.module.scss'

export interface WrapperProps  { 
   children?: React.ReactNode
}

function Wrapper({children}: WrapperProps) {
	return (
		<div className={s.wrapper}>
			{ children }
		</div>
	)
}

export default Wrapper;