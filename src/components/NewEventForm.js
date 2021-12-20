import "./NewEventForm.css";
import React from "react";
import { useState, useRef } from "react";

const NewEventForm = ({ addEvent }) => {
	const [title, setTitle] = useState("");
	const [date, setDate] = useState("");
	const [location, setLocation] = useState("manchester");
	// const title = useRef();
	// const date = useRef();

	// reset a form
	const resetForm = () => {
		setTitle("");
		setDate("");
		setLocation("");
		// title.current.value = "";
		// date.current.value = "";
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(title, date);
		const event = {
			// title: title.current.value,
			// date: date.current.value,
			title: title,
			date: date,
			location: location,
			id: Math.floor(Math.random() * 10000),
		};

		console.log(event);
		addEvent(event);
		resetForm();
	};
	// value in input is tie to the state  a control input
	return (
		<form className="new-event-form" onSubmit={handleSubmit}>
			<label>
				<span> Event Title:</span>
				<input
					type="text"
					// ref={title}
					onChange={(e) => setTitle(e.target.value)}
					value={title}
				/>
			</label>
			<label>
				<span> Event Date:</span>
				<input
					type="date"
					// ref={date}
					onChange={(e) => setDate(e.target.value)}
					value={date}
				/>
				<label>
					<span> Event location:</span>
					<select onChange={(e) => setLocation(e.target.value)}>
						<option value="manchester">Manchester</option>
						<option value="london">London</option>
						<option value="cardiff">Cardiff</option>
					</select>
				</label>
			</label>
			<button>Submit</button>
			{/* <p>
				Title - {title} Date - {date}
			</p>
			<p onClick={resetForm}> reset the form </p> */}
		</form>
	);
};

export default NewEventForm;
