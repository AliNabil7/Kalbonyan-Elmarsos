import React, { useReducer, useEffect, useCallback, useMemo } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import ErrorModal from "../UI/ErrorModal";
import Search from "./Search";
import useHttp from "../../hooks/http";

const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case "SET":
      return action.ingredients;
    case "ADD":
      return [...currentIngredients, action.ingredient];
    case "DELETE":
      return currentIngredients.filter((ing) => ing.id !== action.id);
    default:
      throw new Error("Should not get there!");
  }
};

function Ingredients() {
  const [userIngredients, dispatch] = useReducer(ingredientReducer, []);
  const {
    isLoading,
    error,
    data,
    sendRequest,
    reqExtra,
    reqIdentifier,
    clear,
  } = useHttp();

  // const [userIngredients, setUserIngredients] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();

  useEffect(() => {
    if (!isLoading && !error && reqIdentifier === "REMOVE_INGREDIENT") {
      dispatch({ type: "DELETE", id: reqExtra });
    } else if (!isLoading && !error && reqIdentifier === "ADD_INGREDIENT") {
      dispatch({
        type: "ADD",
        ingredient: { id: data.name, ...reqExtra },
      });
    }
  }, [data, reqExtra, reqIdentifier, isLoading, error]);

  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    // setUserIngredients(filteredIngredients);
    dispatch({ type: "SET", ingredients: filteredIngredients });
  }, []);

  const addIngredientHandler = useCallback(
    (ingredient) => {
      sendRequest(
        "https://react-hooks-update-ca8d9-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json",
        "POST",
        JSON.stringify(ingredient),
        ingredient,
        "ADD_INGREDIENT"
      );

      // dispatchHttp({ type: "SEND" });
      // fetch(
      //   "https://react-hooks-update-ca8d9-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json",
      //   {
      //     method: "POST",
      //     body: JSON.stringify(ingredient),
      //     headers: { "Content-Type": "application/json" },
      //   }
      // )
      //   .then((response) => {
      //     dispatchHttp({ type: "RESPONSE" });
      //     return response.json();
      //   })
      //   .then((responseData) => {
      //     // setUserIngredients((prevIngredients) => [
      //     //   ...prevIngredients,
      //     //   { id: responseData.name, ...ingredient },
      //     // ]);
      //     dispatch({
      //       type: "ADD",
      //       ingredient: { id: responseData.name, ...ingredient },
      //     });
      //   });
    },
    [sendRequest]
  );

  const removeIngredientHandler = useCallback(
    (ingredientID) => {
      sendRequest(
        `https://react-hooks-update-ca8d9-default-rtdb.europe-west1.firebasedatabase.app/ingredients/${ingredientID}.json`,
        "DELETE",
        null,
        ingredientID,
        "REMOVE_INGREDIENT"
      );
    },
    [sendRequest]
  );

  const ingredientList = useMemo(() => {
    return (
      <IngredientList
        ingredients={userIngredients}
        onRemoveItem={removeIngredientHandler}
      />
    );
  }, [userIngredients, removeIngredientHandler]);

  return (
    <div className="App">
      {error && <ErrorModal onClose={clear()}>{error}</ErrorModal>}

      <IngredientForm
        onAddIngredient={addIngredientHandler}
        loading={isLoading}
      />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        {ingredientList}
      </section>
    </div>
  );
}

export default Ingredients;
