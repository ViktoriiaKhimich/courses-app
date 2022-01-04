import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { v4 } from 'uuid';

import { mockedCoursesList, mockedAuthorsList, GO_BACK } from '../../constants';
import { pipeDuration } from '../../helpers/pipeDuration';
import { CourseInterface } from '../Courses/coursesTypes';

import './CourseInfo.css';

const CourseInfo = () => {
	const { courseId } = useParams();

	const course = mockedCoursesList.find((course) => course.id === courseId);

	const {
		id,
		title,
		description,
		duration,
		authors,
		creationDate,
	}: CourseInterface = course;

	const formattedAuthors = authors.map((item: string) =>
		mockedAuthorsList
			.map((author) => author.id === item && author.name)
			.filter((item) => item)
	);

	return (
		<div className='course__info'>
			<Link to='/courses' className='redirect'>
				{GO_BACK}
			</Link>
			<h2 className='course__info__heading'>{title}</h2>
			<div className='course__info__main'>
				<div className='course__info__description'>
					<p>{description}</p>
				</div>
				<div>
					<p className='course__info__title'>
						<span className='course__info__title__text'>ID:</span> {id}
					</p>
					<p className='course__info__title'>
						<span className='course__info__title__text'>Duration:</span>{' '}
						{pipeDuration(duration)}
					</p>
					<p className='course__info__title'>
						<span className='course__info__title__text'>Created:</span>{' '}
						{creationDate}
					</p>
					<ul>
						<p className='course__info__title course__info__title__text'>
							Authors:
						</p>
						{formattedAuthors.map((author) => (
							<li key={v4()}>{author}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default CourseInfo;
