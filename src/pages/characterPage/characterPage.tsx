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

						<div className={s.cardInformation}>
							<h2 className={s.cardTitle_main}>Character's Name</h2>
							<h3 className={s.cardTitle}>Birth year: </h3>
							<h3 className={s.cardTitle}>Gender: </h3>
							<h3 className={s.cardTitle}>Height: </h3>
							<h3 className={s.cardTitle}>Mass: </h3>
						</div>
					</div>

				</Wrapper>
			</main>
		</>
	)
}

export default CharacterPage;