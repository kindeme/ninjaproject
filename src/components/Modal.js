import "./Modal.css";
import ReactDOM from "react-dom";

function Modal({ children, handleClose, isSales }) {
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
				<button
					onClick={handleClose}
					className={isSales ? "sales-btn" : ""}
				>
					Close
				</button>
			</div>
		</div>,
		document.body
	);
}

export default Modal;
