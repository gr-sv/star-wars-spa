import React from "react";
import s from "./card.module.scss"

function Card() {
	return (
		<div className={s.card}>		
			<div className={s.cardIconBack} />
			<h2 className={s.cardName}>Name</h2>
			<div className={s.cardUnderlining} />
		</div>
	)
}

export default Card;