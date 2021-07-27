import React from "react";
import { connect } from "react-redux";
import { orderPlaced, addQuantity, reduceQuantity } from "../actions/action";

const mapStateToProps = (state) => {
  return {
    fruitItems: state.fruitItems,
    totalAmount: state.totalAmount,
    selectedItems: state.selectedItems,
  };
};

const mapDispatchToProps = (dispatchEvent) => {
  return {
    orderPlaced: (id, name, orderCount, amount, imagePath) => {
      dispatchEvent(orderPlaced(id, name, orderCount, amount, imagePath));
    },
    addQuantity: (id, name, orderCount, amount, imagePath) => {
      dispatchEvent(addQuantity(id, name, orderCount, amount, imagePath));
    },
    reduceQuantity: (id, name, orderCount, amount, imagePath) => {
      dispatchEvent(reduceQuantity(id, name, orderCount, amount, imagePath));
    },
  };
};

class Home extends React.Component {
  render() {
    const {
      fruitItems,
      orderPlaced,
      totalAmount,
      selectedItems,
      addQuantity,
      reduceQuantity,
    } = this.props;
    return (
      <>
        <div className="flexRow">
          <div className="cardRow">
            <div className="rowContainer" id="itemList">
              {fruitItems.map((value, index) => {
                return (
                  <div
                    key={value.id}
                    className="cardIteration"
                    id={`item${index + 1}`}
                  >
                    <div>
                      <img
                        src={value.imagePath}
                        alt={value.name}
                        id={`img${index + 1}`}
                        className="IterationImage"
                      />
                      <p className="paraName" id={`name${index + 1}`}>
                        {value.name}
                      </p>
                      <div className="flexRowNormal">
                        <p
                          className="amountStricke"
                          id={`strikeAmount${index + 1}`}
                        >
                          <del>&#8377; {value.strikeRate}/pack</del>
                        </p>
                        <p
                          className="amountOriginal"
                          id={`originalAmount${index + 1}`}
                        >
                          &#8377; {value.amount}/pack
                        </p>
                      </div>
                      <p className="countryName" id={`countryName${index + 1}`}>
                        Country of Origin : {value.country}
                      </p>
                      {value.orderCount === 0 ? (
                        <button
                          className="addButton"
                          id={`button${index + 1}`}
                          onClick={() =>
                            orderPlaced(
                              value.id,
                              value.name,
                              value.orderCount,
                              value.amount,
                              value.imagePath
                            )
                          }
                        >
                          Add
                        </button>
                      ) : (
                        <button className="addButton">
                          <span
                            id={`addQuantity${index + 1}`}
                            onClick={() =>
                              addQuantity(
                                value.id,
                                value.name,
                                value.orderCount,
                                value.amount
                              )
                            }
                          >
                            +
                          </span>
                          {value.orderCount}
                          <span
                            id={`reduceQuantity${index + 1}`}
                            onClick={() =>
                              reduceQuantity(
                                value.id,
                                value.name,
                                value.orderCount,
                                value.amount
                              )
                            }
                          >
                            -
                          </span>
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="cardRow1">
            <div className="wallet" id="orderHeader">
              Your Order
            </div>
            {selectedItems.map((value, index) => {
              return (
                <div className="cardSelected" key={value.id}>
                  <div className="flexNormal">
                    <img
                      src={value.imagePath}
                      alt={value.name}
                      className="selectedImage"
                    />
                    <p className="selectedPara">{value.name}</p>
                  </div>
                  <div>
                    <span
                      id={`selectedAddQuantity${index + 1}`}
                      onClick={() =>
                        addQuantity(
                          value.id,
                          value.name,
                          value.orderCount,
                          value.amount
                        )
                      }
                    >
                      +
                    </span>
                    {value.orderCount}
                    <span
                      id={`selectedReduceQuantity${index + 1}`}
                      onClick={() =>
                        reduceQuantity(
                          value.id,
                          value.name,
                          value.orderCount,
                          value.amount
                        )
                      }
                    >
                      -
                    </span>
                  </div>
                </div>
              );
            })}
            {selectedItems.length ? (
              <button className="orderPlaceButton">
                Order Place (&#8377;{totalAmount})
              </button>
            ) : null}
          </div>
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
