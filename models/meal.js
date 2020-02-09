class Meal {
  constructor(
    id,
    categoryIds,
    title,
    imageUrl,
    duration,
    ingredients,
    steps,
    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactoseFree,
    rating,
    // Affordability
    isAffordable,
    isPricey,
    isLuxurious,
    // Complexity
    isSimple,
    isChallenging,
    isHard
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients;
    this.steps = steps;
    this.duration = duration;
    this.isGlutenFree = isGlutenFree;
    this.isVegan = isVegan;
    this.isVegetarian = isVegetarian;
    this.isLactoseFree = isLactoseFree;
    this.rating = rating;
    // Affordability
    this.isAffordable = isAffordable;
    this.isPricey = isPricey;
    this.isLuxurious = isLuxurious;
    // Complexity
    this.isSimple = isSimple;
    this.isChallenging = isChallenging;
    this.isHard = isHard;
  }
}

export default Meal;
