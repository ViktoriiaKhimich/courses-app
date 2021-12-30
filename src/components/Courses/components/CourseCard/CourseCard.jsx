import React from 'react';

import { Button } from '../../../../common/Button/Button';
import { pipeDuration } from '../../../../helpers/pipeDuration';
import { SHOW_COURSE_BTN } from '../../../../constants';

import './CourseCard.css';

const CourseCard = (props) => {
	const { description, title, date, duration, authors } = props;
	const formattedDate = date.split('/').join('.');

	return (
		<div className='course__card'>
			<div className='course__card__left__side'>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
			<div className='course__card__right__side'>
				<p className='course__card__item truncate'>
					<span className='course__card__title'>Authors: </span>
					{authors.join(', ')}
				</p>
				<p className='course__card__item'>
					<span className='course__card__title'>Duration: </span>{' '}
					{pipeDuration(duration)}
				</p>
				<p className='course__card__item'>
					<span className='course__card__title'>Created: </span> {formattedDate}
				</p>
				<Button
					type='button'
					buttonText={SHOW_COURSE_BTN}
					className='course__card__btn'
				></Button>
			</div>
		</div>
	);
};

export default CourseCard;
