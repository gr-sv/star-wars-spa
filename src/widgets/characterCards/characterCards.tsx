import React from "react";
import s from './chatacterCards.module.scss';
import Wrapper from '../wrapper/wrapper';

interface Character {
    name: string;
}

interface CharacterCardsProps {
	characters: Character[];
	loading: boolean;
};

function CharacterCards({ characters, loading }: CharacterCardsProps) {

	if(loading) {
		return (
			<Wrapper>
				<h2 className={s.loading}>Loading...</h2>
			</Wrapper>
		)
	}

	return (
		<Wrapper>
			<a href="#" className={s.cards}>
				{characters?.map(character => (
					<div key={character.name} className={s.card}>
						<div className={s.cardIconBack} />
						<h2 className={s.cardName}>{character?.name}</h2>
					</div>
				))}
			</a>
		</Wrapper>
	)
}

export default CharacterCards;