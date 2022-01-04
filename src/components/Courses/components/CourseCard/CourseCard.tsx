import React from 'react';
import { Link } from 'react-router-dom';

import { pipeDuration } from '../../../../helpers/pipeDuration';
import { SHOW_COURSE_BTN } from '../../../../constants';
import { CourseInterface } from '../../coursesTypes';

import './CourseCard.css';

const CourseCard = (props: CourseInterface) => {
	const { description, title, creationDate, duration, authors, id } = props;
	const formattedDate = creationDate.split('/').join('.');

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
				<Link to={`/courses/${id}`} className='btn link__btn'>
					{SHOW_COURSE_BTN}
				</Link>
			</div>
		</div>
	);
};

export default CourseCard;
