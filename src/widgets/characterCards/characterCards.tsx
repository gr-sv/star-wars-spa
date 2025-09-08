import React from "react";
import s from './chatacterCards.module.scss';
import Wrapper from '../wrapper/wrapper';

interface Character {
    name: string;
}

interface CharacterCardsProps {
	characters: Character[];
};

function CharacterCards({ characters }: CharacterCardsProps) {
	return (
		<Wrapper>
			
			{characters.map(character => (
				<div className={s.cards}>
					<div key={character.name} className={s.cardIconBack} />
					<h2 className={s.cardName}>{character?.name}</h2>
				</div>
			))}
			
		</Wrapper>
	)
}

export default CharacterCards;