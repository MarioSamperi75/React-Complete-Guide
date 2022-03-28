import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { useEffect, useState } from "react";

// we transform the dummy array in a jsx element array
// we do it in a variable (mealsList)
const AvailableMeals = (props) => {
  const [meals, setMeals] = useState([]);
  // we load the database items when we render the first time
  // we can set it true as default
  const [isLoading, setIsloading] = useState(true);

  // we load data  from firebase as side effect
  // useEffect function can't return a promise, but can contain a function that returns a promise
  // so we have to create a nested function(fetchMeals) and call it.
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-http-7b575-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );
      // we convert to jsobject
      const responseData = await response.json();

      // we convert the object to an array
      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      // we save the array as state
      setMeals(loadedMeals);
      setIsloading(false);
    };
    fetchMeals();
  }, []);

  if (isLoading) {
    return (
      <section className={classes.loadingMealsMsg}>
        <p>Loading...</p>
      </section>
    );
  }
  //we go through the new meals array (the state)
  const mealsList = meals.map((meal) => {
    return (
      <MealItem
        id={meal.id} // this is new!
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
