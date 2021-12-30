import React, { useState } from 'react';
import { v4 } from 'uuid';

import Input from '../../common/Input/Input';
import { Button } from '../../common/Button/Button';
import TextArea from '../../common/TextArea/TextArea';
import useForm from '../../hooks/useForm';
import {
	mockedAuthorsList,
	mockedCoursesList,
	CREATE_COURSE_BTN,
	CREATE_AUTHOR_BTN,
	ADD_AUTHOR_BTN,
	DELETE_AUTHOR_BTN,
} from '../../constants';
import { pipeDuration } from '../../helpers/pipeDuration';
import { generateCurrentDate } from '../../helpers/dateGenerator';

import './CreateCourse.css';

const CreateCourse = ({ handleClose }) => {
	const [authors, setAuthors] = useState(mockedAuthorsList);
	const [newCourseAuthor, setNewCourseAuthor] = useState([]);

	const createAuthorHandler = () => {
		const newAuthor = {
			id: v4(),
			name: values.author_name,
		};
		setAuthors([...authors, newAuthor]);
		mockedAuthorsList.push(newAuthor);
	};

	const addAuthorToCourseAuthors = (authorId, authorName) => {
		setAuthors(authors.filter((author) => author.id !== authorId));
		setNewCourseAuthor([
			...newCourseAuthor,
			{ name: authorName, id: authorId },
		]);
	};

	const deleteAuthorFromCourseAuthors = (authorId, authorName) => {
		setNewCourseAuthor(
			newCourseAuthor.filter((author) => author.id !== authorId)
		);
		setAuthors([...authors, { id: authorId, name: authorName }]);
	};

	const onSubmit = (e) => {
		const createdCourse = {
			id: v4(),
			title: values.title,
			description: values.description,
			creationDate: generateCurrentDate(),
			duration: values.duration,
			authors: newCourseAuthor.map((author) => author.id),
		};
		mockedCoursesList.push(createdCourse);
		handleClose();
	};

	const { handleChange, handleSubmit, values, errors } = useForm(onSubmit);

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<div className='create_course_description'>
					<Input
						value={values.title}
						type='text'
						inputId='title'
						inputName='title'
						placeholderText='Enter title ...'
						labelText='Title'
						onChange={handleChange}
					/>
					<Button type='submit' buttonText={CREATE_COURSE_BTN} />
				</div>
				<div>
					<TextArea
						value={values.description}
						inputId='decription'
						inputName='description'
						labelText='Description'
						placeholderText='Enter descriprion'
						onChange={handleChange}
					/>
					{errors.description && (
						<p className='error_msg'>{errors.description}</p>
					)}
				</div>
			</div>
			<div className='create_author'>
				<div className='create_author_left'>
					<div className='add_author_box'>
						<h4>Add author</h4>
						<Input
							value={values.author_name}
							type='text'
							inputId='author_name'
							inputName='author_name'
							placeholderText='Enter author name ...'
							labelText='Author name'
							onChange={handleChange}
						/>
						{errors.author_name && (
							<p className='error_msg'>{errors.author_name}</p>
						)}
						<Button
							className='create_author_btn'
							type='button'
							buttonText={CREATE_AUTHOR_BTN}
							onClick={createAuthorHandler}
						/>
					</div>
					<div className='add_duration_box'>
						<h4 className='add_duration_title'>Duration</h4>
						<Input
							value={values.duration}
							className='create_author_input'
							type='number'
							inputId='duration'
							inputName='duration'
							placeholderText='Enter duration in minutes ...'
							labelText='Duration'
							onChange={handleChange}
						/>
						{errors.duration && <p className='error_msg'>{errors.duration}</p>}
						<p>Duration: {pipeDuration(values.duration)}</p>
					</div>
				</div>
				<div>
					<div>
						<ul className='author_list'>
							<h4 className='add_duration_title'>Authors</h4>
							{authors.map((author) => (
								<li key={author.id} className='author_list_item'>
									<p>{author.name}</p>
									<Button
										type='button'
										buttonText={ADD_AUTHOR_BTN}
										className='add_author_btn'
										onClick={() =>
											addAuthorToCourseAuthors(author.id, author.name)
										}
									/>
								</li>
							))}
						</ul>
					</div>
					<div>
						<ul>
							<h4 className='add_duration_title'>Course authors</h4>
							{!newCourseAuthor.length && (
								<p className='add_duration_title'>Author list is empty</p>
							)}
							{newCourseAuthor.map((author) => (
								<li key={author.id} className='author_list_item'>
									<p>{author.name}</p>
									<Button
										type='button'
										buttonText={DELETE_AUTHOR_BTN}
										onClick={() =>
											deleteAuthorFromCourseAuthors(author.id, author.name)
										}
									/>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</form>
	);
};

export default CreateCourse;
