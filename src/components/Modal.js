import "./Modal.css";
import ReactDOM from "react-dom";

function Modal({ children, isSales }) {
	return ReactDOM.createPortal(
		<div className="modal-backdrop">
			<div
				className="modal"
				style={{
					border: "4px solid",
					borderColor: isSales ? "#ff4500" : "#555",
					textAlign: "center",
				}}
			>
				{children}
			</div>
		</div>,
		document.body
	);
}

export default Modal;
