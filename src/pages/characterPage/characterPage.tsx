import React from "react";
import Header from "../../widgets/header/header";
import Wrapper from "../../widgets/wrapper/wrapper";

import s from './characterPage.module.scss';

function CharacterPage() {
	return (
		<>
			<Header />
			<main>
				<Wrapper>
					<div className={s.cardWrapper}>
						<div className={s.cardImage} />

						<div className={s.cardInformation}></div>
					</div>

				</Wrapper>
			</main>
		</>
	)
}

export default CharacterPage;