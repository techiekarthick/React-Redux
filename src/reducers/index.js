const initstate = {
  fruitItems: [
    {
      id: 1,
      name: "Orange",
      orderCount: 0,
      amount: 200,
      imagePath: require("../images/orange.jpg"),
      country: "France",
      strikeRate: 300,
    },
    {
      id: 2,
      name: "Apple",
      orderCount: 0,
      amount: 400,
      imagePath: require("../images/apple.png"),
      country: "France",
      strikeRate: 650,
    },
    {
      id: 3,
      name: "Mango",
      orderCount: 0,
      amount: 50,
      imagePath: require("../images/mango.jpg"),
      country: "France",
      strikeRate: 100,
    },
    {
      id: 4,
      name: "Strawberry",
      orderCount: 0,
      amount: 150,
      imagePath: require("../images/strawBerry.jpg"),
      country: "France",
      strikeRate: 200,
    },
    {
      id: 5,
      name: "Pineapple",
      orderCount: 0,
      amount: 280,
      imagePath: require("../images/pineapple.jpg"),
      country: "France",
      strikeRate: 320,
    },
    {
      id: 6,
      name: "Avocado",
      orderCount: 0,
      amount: 350,
      imagePath: require("../images/Avocado.jpg"),
      country: "France",
      strikeRate: 480,
    },
    {
      id: 7,
      name: "Banana",
      orderCount: 0,
      amount: 200,
      imagePath: require("../images/banana.jpg"),
      country: "France",
      strikeRate: 280,
    },
    {
      id: 8,
      name: "Blackcurrant",
      orderCount: 0,
      amount: 200,
      imagePath: require("../images/Blackcurrant.jpg"),
      country: "France",
      strikeRate: 230,
    },
  ],
  selectedItems: [],
  totalAmount: 0,
};

const index = (state = initstate, action) => {
  switch (action.type) {
    case "orderPlace":
      const stateValue = state;
      stateValue.fruitItems.forEach((data) => {
        if (data.id === action.id) {
          let obj = {
            id: action.id,
            name: action.name,
            orderCount: 1,
            amount: action.amount,
            imagePath: action.imagePath,
          };
          stateValue.selectedItems.push(obj);
          stateValue.totalAmount += action.amount;
          const index = stateValue.fruitItems
            .map((x) => x.id)
            .indexOf(action.id);
          stateValue.fruitItems[index].orderCount = 1;
        }
      });
      return { ...state };
    case "addQuantity":
      state.fruitItems.forEach((data) => {
        if (data.id === action.id) {
          const index = state.fruitItems.map((x) => x.id).indexOf(action.id);
          state.fruitItems[index].orderCount += 1;
        }
      });
      state.totalAmount += action.amount;
      state.selectedItems.forEach((data) => {
        if (data.id === action.id) {
          const index = state.selectedItems.map((x) => x.id).indexOf(action.id);
          state.selectedItems[index].orderCount += 1;
        }
      });
      return { ...state };
    case "reduceQuantity":
      if (action.orderCount === 1) {
        state.fruitItems.forEach((data) => {
          if (data.id === action.id) {
            const index = state.fruitItems.map((x) => x.id).indexOf(action.id);
            state.fruitItems[index].orderCount -= 1;
          }
        });
        state.totalAmount -= action.amount;
        const index = state.selectedItems.map((x) => x.id).indexOf(action.id);
        state.selectedItems.splice(index, 1);
      } else {
        state.fruitItems.forEach((data) => {
          if (data.id === action.id) {
            const index = state.fruitItems.map((x) => x.id).indexOf(action.id);
            state.fruitItems[index].orderCount -= 1;
          }
        });
        state.totalAmount -= action.amount;
        state.selectedItems.forEach((data) => {
          if (data.id === action.id) {
            const index = state.selectedItems
              .map((x) => x.id)
              .indexOf(action.id);
            state.selectedItems[index].orderCount -= 1;
          }
        });
      }
      return { ...state };
    default:
      return state;
  }
};

export default index;
