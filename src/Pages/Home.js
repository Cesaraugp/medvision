import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addHouse, initializeHouses } from "../reducers/housesReducer";
import { addPerson, initializePeople } from "../reducers/peopleReducer";
import Person from "../components/Person";
import Modal from "../components/Modal";
import PersonDetails from "../components/PersonDetails";
import OwnedHouses from "../components/ownedHouses";
const Home = () => {
  const dispatch = useDispatch();
  const people = useSelector((state) => state.people);
  const [person, setperson] = useState({});
  const [owner, setOwner] = useState(0);
  const toggleOwner = (id) => setOwner(id);

  useEffect(() => {
    dispatch(initializeHouses());
    dispatch(initializePeople());
    return () => {};
  }, [dispatch]);
  return (
    <div>
      <div className="flex flex-col  md:flex-row">
        <button
          for="my-modal-3"
          onClick={() =>
            dispatch(
              addPerson({
                document: "aaaa",
                fisrstName: "Juan",
                lastName: "Perez",
                birthDate: "2021-09-25T20:15:48.147Z",
                isMarried: false,
                height: 165,
                houses: [
                  {
                    description: "New House",
                    address: "Houston, TX",
                    ownerID: 7,
                  },
                ],
              })
            )
          }
          className="btn btn-primary btn-active"
          aria-pressed="true"
        >
          Add People
        </button>
        <button
          for="my-modal-3"
          onClick={() =>
            dispatch(
              addHouse({
                description: "House Desc",
                address: "46466",
                ownerID: 7,
                owner: {
                  document: "aaaaa",
                  fisrstName: "Juan",
                  lastName: "Perez",
                  birthDate: "2021-09-25T20:18:19.268Z",
                  isMarried: false,
                  height: 165,
                },
              })
            )
          }
          className="btn btn-primary btn-active"
          aria-pressed="true"
        >
          Add House
        </button>
      </div>
      <h1 className="text-center text-xl">People</h1>
      <div className="flex flex-col  md:flex-row">
        {people &&
          people.map((person) => {
            return (
              <Person
                person={person}
                key={person.personID}
                openModal={setperson}
                seeHouses={toggleOwner}
              ></Person>
            );
          })}
      </div>
      <h1 className="text-center text-xl">Houses</h1>
      <div className="flex flex-col  md:flex-row">
        {owner && <OwnedHouses personID={owner} />}
      </div>
      {person.personID && (
        <Modal closeModal={() => setperson({})} id="2">
          <PersonDetails person={person} />
        </Modal>
      )}
    </div>
  );
};

export default Home;
