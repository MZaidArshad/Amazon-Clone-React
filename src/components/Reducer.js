export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

export const initialState = {
  basket: [],
  user: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "ADD_TO_BASKET":
      //logic for adding item in basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      //Logic for removing item;
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        //item exists, remove it
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove item with id ${action.id} as it does not exist.`
        );
      }

      return { ...state, basket: newBasket };
    default:
      return state;
  }
}

export default reducer;
