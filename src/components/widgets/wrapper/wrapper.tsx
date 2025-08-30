import React from "react";
import s from './wrapper.module.scss'

export interface WrapperProps  { 
   children?: React.ReactNode
   className?: string;
}

function Wrapper({children, className}: WrapperProps) {
	return (
		<div className={s.wrapper}>
			{ children }
		</div>
	)
}

export default Wrapper;