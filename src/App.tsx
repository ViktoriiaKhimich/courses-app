import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';
import PrivateRoute from './helpers/privateRoute';

import './App.css';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/courses' element={<PrivateRoute component={Courses} />} />
				<Route path='/registration' element={<Registration />} />
				<Route path='/courses/add' element={<CreateCourse />} />
				<Route path='/courses/:courseId' element={<CourseInfo />} />
			</Routes>
		</>
	);
}

export default App;
