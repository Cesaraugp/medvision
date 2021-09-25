import React from "react";
const Person = ({ person, openModal, seeHouses }) => {
  return (
    <>
      <div class="card text-center shadow-2xl">
        <figure class="px-10 pt-10">
          <img src="https://picsum.photos/id/1005/400/250" class="rounded-xl" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            {person.fisrstName} {person.lastName}
          </h2>
          <div class="justify-center card-actions">
            <label
              onClick={() => openModal(person)}
              for="my-modal-2"
              class="btn btn-primary modal-button"
            >
              Details
            </label>
            <button
              onClick={() => seeHouses(person.personID)}
              class="btn btn-primary btn-active"
              aria-pressed="true"
            >
              Houses
            </button>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Person;
