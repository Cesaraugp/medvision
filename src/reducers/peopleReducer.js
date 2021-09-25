import medvisionAPI from "../services/medvisionAPI";

export const addPerson = (person) => {
  return async (dispatch) => {
    const people = await medvisionAPI.addPerson(person);
    dispatch({
      type: "ADD_PERSON",
      data: {
        person: people.data,
      },
    });
  };
};

export const initializePeople = () => {
  return async (dispatch) => {
    const people = await medvisionAPI.getAllPeople();
    dispatch({
      type: "INITIALIZE_PEOPLE",
      data: {
        people: people.data,
      },
    });
  };
};

const peopleReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_PERSON":
      const { person: newPerson } = action.data;
      return [...state, newPerson];
    case "INITIALIZE_PEOPLE":
      const { people: initialPeople } = action.data;
      return [...initialPeople];
    default:
      return state;
  }
};

export default peopleReducer;
