import { BASE_URL } from "../utilities/constants";

async function fetchCertainCategory(category) {
  const req = await fetch(`${BASE_URL}filter.php?c=${category}`);
  if (!req.ok) {
    throw new Error(`Error fetching category: ${req.status}`);
  }
  const data = await req.json();

  return data
}

async function fetchCertainArea(area) {
  const req = await fetch(`${BASE_URL}filter.php?a=${area}`);
  if (!req.ok) {
    throw new Error(`Error fetching Area: ${req.status}`);
  }
  const data = await req.json();

  return data
}

async function fetchCertainMeal(id) {
  const req = await fetch(`${BASE_URL}lookup.php?i=${id}`);
  if (!req.ok) {
    throw new Error(`Error fetching meal: ${req.status}`);
  }
  const data = await req.json();

  return data
}

async function fetchSearchMeal(query) {
  const req = await fetch(`${BASE_URL}search.php?s=${query}`);
  if (!req.ok) {
    throw new Error(`Error fetching meal: ${req.status}`);
  }
  const data = await req.json();

  return data
}

async function fetchRandomMeal() {
  const req = await fetch(`${BASE_URL}random.php`);
  if (!req.ok) {
    throw new Error(`Error fetching meal: ${req.status}`);
  }
  const data = await req.json();

  return data
}

async function getCategoryMeals(category) {
  const {meals} = await fetchCertainCategory(category);
  return meals;
}

async function getAreaMeals(area) {
  const {meals} = await fetchCertainArea(area);
  return meals;
}

async function getCertainMeal(id) {
  const {meals} = await fetchCertainMeal(id);
  return meals;
}

async function getRandomMeal() {
  const {meals} = await fetchRandomMeal();
  return meals;
}

async function getSearchedMeals(query) {
  const {meals} = await fetchSearchMeal(query);
  return meals;
}

async function getBookmarkedMeals() {
  const bookmarkMealsIds = JSON.parse(localStorage.getItem("bookmarks"));
  let bookmarkedMealsList = [];

  if (bookmarkMealsIds.length) {
    bookmarkedMealsList = await Promise.all(bookmarkMealsIds?.map(async (bookmark) => {
      return await getCertainMeal(bookmark);
    }));
  }

  return bookmarkedMealsList;
}

export {getCategoryMeals, getCertainMeal, getBookmarkedMeals, getSearchedMeals, getRandomMeal, getAreaMeals}