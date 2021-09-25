import React from "react";

const Modal = ({ children, closeModal, id }) => {
  return (
    <div>
      <input type="checkbox" id={`my-modal-${id}`} class="modal-toggle" />
      <div class="modal">
        <div class="modal-box h-3/5 w-48 flex flex-col">
          {children}
          <label
            className=" btn"
            onClick={() => closeModal()}
            for={`my-modal-${id}`}
          >
            Close
          </label>
        </div>
      </div>
    </div>
  );
};

export default Modal;
