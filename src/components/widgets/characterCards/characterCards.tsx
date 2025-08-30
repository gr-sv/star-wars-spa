import React from "react";
import s from './chatacterCards.module.scss'
import Wrapper from "../wrapper/wrapper";
import Card from "../card/card";

function CharacterCards() {
	return (
		<Wrapper>
			<div className={s.cards}>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />				
			</div>
		</Wrapper>
	)

}

export default CharacterCards;