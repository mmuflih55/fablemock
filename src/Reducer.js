import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "SetSearch": {
      return { ...state, search: action.val };
    }
    case "SetFurnitureStyles": {
      return { ...state, furnitureStyles: action.val };
    }
    case "SetDeliveryDays": {
      return { ...state, deliveryDays: action.val };
    }
    default:
      return state;
  }
};

const initState = {
  search: "",
  furnitureStyles: [],
  deliveryDays: 0
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  return { state, dispatch };
};

export default Reducer;
