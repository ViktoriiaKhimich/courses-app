import React, { useState } from 'react';

import CourseCard from './components/CourseCard/CourseCard';
import { Button } from '../../common/Button/Button';
import SearchBar from './components/SearchBar/SearchBar';
import {
	mockedCoursesList,
	mockedAuthorsList,
	ADD_COURSE_BTN,
} from '../../constants';

import './Courses.css';

const Courses = ({ handleClose }) => {
	const [courses, setCourses] = useState(mockedCoursesList);

	const [searchedCourse, setSearchedCourse] = useState('');

	const handleChange = (e) => {
		setSearchedCourse(e.target.value);
		if (e.target.value === '') {
			setCourses(mockedCoursesList);
		}
	};

	const filterCoursesBySearchedName = () => {
		// eslint-disable-next-line array-callback-return
		return courses.filter((course) => {
			if (
				course.title.toLowerCase().includes(searchedCourse.toLowerCase()) ||
				course.id.toLowerCase().includes(searchedCourse.toLowerCase())
			) {
				return course;
			}
		});
	};

	const handleClick = () => {
		setCourses(filterCoursesBySearchedName());
	};

	return (
		<div>
			<div className='courses__toolbar'>
				<SearchBar
					value={searchedCourse}
					onChange={handleChange}
					onClick={handleClick}
				/>
				<Button buttonText={ADD_COURSE_BTN} onClick={handleClose} />
			</div>
			{courses.map((course) => (
				<CourseCard
					key={course.id}
					authors={course.authors.map((item) =>
						mockedAuthorsList
							.map((author) => author.id === item && author.name)
							.filter((item) => item !== false)
					)}
					title={course.title}
					duration={course.duration}
					date={course.creationDate}
					description={course.description}
				/>
			))}
			{!courses.length && (
				<h4 className='no__courses__msg'>
					There aren't any courses with such name or id
				</h4>
			)}
		</div>
	);
};

export default Courses;
