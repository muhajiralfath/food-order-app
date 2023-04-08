import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Nasi Pecel",
    description: "Pecel sayur hijau",
    price: 15000,
  },
  {
    id: "m2",
    name: "Ayam Bakar",
    description: "Ayam kampung khas Purwodadi",
    price: 20000,
  },
  {
    id: "m3",
    name: "Gudeg",
    description: "Gudeg asli khas jogja",
    price: 10000,
  },
  {
    id: "m4",
    name: "Lontong sayur",
    description: "Lontong asli khas purwodadi",
    price: 15000,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
