import { useState } from 'react';

const useForm = (callback) => {
	const [values, setValues] = useState({});
	const [errors, setErrors] = useState({});

	const omit = (key, { [key]: _, ...obj }) => obj;

	const validateInputs = (name, value) => {
		switch (name) {
			case 'description':
				if (value.length < 2) {
					setErrors({
						...errors,
						description: 'Description should be at least 2 characters long',
					});
				} else {
					let newObj = omit(errors, 'description');
					setErrors(newObj);
				}
				break;
			case 'author_name':
				if (value.length < 2) {
					setErrors({
						...errors,
						author_name: 'Author name should be at least 2 characters long',
					});
				} else {
					let newObj = omit(errors, 'author_name');
					setErrors(newObj);
				}
				break;
			case 'duration':
				if (value <= 0) {
					setErrors({
						...errors,
						duration: 'Course duration should be more than 0 minutes',
					});
				} else {
					let newObj = omit(errors, 'duration');
					setErrors(newObj);
				}
				break;

			default:
				break;
		}
	};

	const handleChange = (e) => {
		e.preventDefault();

		const { name, value } = e.target;

		validateInputs(name, value);

		setValues({
			...values,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (Object.keys(values).length !== 0) {
			callback();
		} else {
			alert('Please, fill in all the fields');
		}
	};

	return { values, errors, handleChange, handleSubmit };
};

export default useForm;
