import medvisionAPI from "../services/medvisionAPI";

export const addHouse = (housedata) => {
  return async (dispatch) => {
    const house = await medvisionAPI.addHouse(housedata);
    dispatch({
      type: "ADD_HOUSE",
      data: {
        house: house.data,
      },
    });
  };
};

export const initializeHouses = () => {
  return async (dispatch) => {
    const houses = await medvisionAPI.getAllHouses();
    dispatch({
      type: "INITIALIZE_HOUSES",
      data: {
        houses: houses.data,
      },
    });
  };
};

const housesReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_HOOUSE":
      const { house: newHouse } = action.data;
      return [...state, newHouse];
    case "INITIALIZE_HOUSES":
      console.log(action.data);
      const { houses: initialHouses } = action.data;
      return [...initialHouses];
    default:
      return state;
  }
};

export default housesReducer;
