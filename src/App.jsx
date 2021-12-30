import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';

function App() {
	const [showCreateCourse, setShowCreateCourse] = useState(false);

	const handleClose = () => {
		setShowCreateCourse(!showCreateCourse);
	};

	const handleSubmit = (newCourseData) => {
		console.log(newCourseData);
	};

	return (
		<>
			<Header />
			{showCreateCourse ? (
				<CreateCourse handleClose={handleClose} handleSubmit={handleSubmit} />
			) : (
				<Courses handleClose={handleClose} />
			)}
		</>
	);
}

export default App;
