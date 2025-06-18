const CartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existing = state.find(i => i.id === action.payload.id);
      if (existing) {
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }

    case 'UPDATE_QUANTITY':
      return state.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );

    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.payload.id);

    default:
      return state;
  }
};

export default CartReducer;
