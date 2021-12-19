import "./App.css";
import { useState } from "react";
import Title from "./components/Title";
import React from "react";
import Modal from "./components/Modal";
import EventList from "./components/EventList";

function App() {
	const [showModal, setShowModal] = useState(false);
	const [showEvents, setShowEvents] = useState(true);
	const [events, setEvents] = useState([
		{ title: "mario's birthday bash", id: 1 },
		{ title: "bower's live stream", id: 2 },
		{ title: "mrace on moo moo farm", id: 3 },
	]);
	const handleClick = (id) => {
		setEvents((prevEvents) => {
			return prevEvents.filter((event) => {
				return id !== event.id;
			});
		});
		console.log(id);
	};

	const handleClose = () => {
		setShowModal(false);
	};

	const subtitle = "All the latest events in Marioland";

	return (
		<div className="App">
			<Title title="Events in your Area" subtitle={subtitle} />
			{showEvents && (
				<div>
					<button onClick={() => setShowEvents(false)}>
						Hide events
					</button>
				</div>
			)}
			{!showEvents && (
				<div>
					<button onClick={() => setShowEvents(true)}>
						Show events
					</button>
				</div>
			)}
			{showEvents && (
				<EventList events={events} handleClick={handleClick} />
			)}

			{showModal && (
				<Modal handleClose={handleClose} isSales={true}>
					<h2>10% Off Coupom Cdode!!</h2>
					<p> Use the code NINJA10 at the checkout.</p>
				</Modal>
			)}
			{!showModal && (
				<div>
					<button onClick={() => setShowModal(true)}>
						Show modal
					</button>
				</div>
			)}
		</div>
	);
}

export default App;
