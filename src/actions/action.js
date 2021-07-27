export const orderPlaced = (id, name, orderCount, amount, imagePath) => {
  return {
    type: "orderPlace",
    id,
    name,
    orderCount,
    amount,
    imagePath,
  };
};

export const addQuantity = (id, name, orderCount, amount, imagePath) => {
  return {
    type: "addQuantity",
    id,
    name,
    orderCount,
    amount,
    imagePath,
  };
};

export const reduceQuantity = (id, name, orderCount, amount, imagePath) => {
  return {
    type: "reduceQuantity",
    id,
    name,
    orderCount,
    amount,
    imagePath,
  };
};
