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
			<div className={s.cards}>
				{characters?.map(character => (
					<div className={s.card}>
						<div key={character.name} className={s.cardIconBack} />
						<h2 className={s.cardName}>{character?.name}</h2>
					</div>
				))}
			</div>
		</Wrapper>
	)
}

export default CharacterCards;