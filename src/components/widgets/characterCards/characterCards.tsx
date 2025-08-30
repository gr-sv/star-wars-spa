import React from "react";
import s from './chatacterCards.module.scss'

function CharacterCards() {
	return (
		<>
			<div className={s.cards}>
				<div className={s.card}>
					<p>Character</p>
				</div>
				<div className={s.card}>
					<p>Character</p>
				</div>
				<div className={s.card}>
					<p>Character</p>
				</div>
				<div className={s.card}>
					<p>Character</p>
				</div>
				<div className={s.card}>
					<p>Character</p>
				</div>
				<div className={s.card}>
					<p>Character</p>
				</div>
			</div>

			<div>
				{/* pagination */}
			</div>
		</>
	)

}

export default CharacterCards;