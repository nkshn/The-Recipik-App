class Meal {
  constructor(
    id,
    categoryIds,
    title,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactoseFree,
    rating,

    isAffordable,
    isPricey,
    isLuxurious
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients;
    this.steps = steps;
    this.duration = duration;
    this.complexity = complexity;
    this.isGlutenFree = isGlutenFree;
    this.isVegan = isVegan;
    this.isVegetarian = isVegetarian;
    this.isLactoseFree = isLactoseFree;
    this.rating = rating;

    this.isAffordable = isAffordable;
    this.isPricey = isPricey;
    this.isLuxurious = isLuxurious;
  }
}

export default Meal;
