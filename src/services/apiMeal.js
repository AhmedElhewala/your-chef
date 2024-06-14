import { BASE_URL } from "../utilities/constants";

async function fetchCertainCategory(category) {
  try {
    const req = await fetch(`${BASE_URL}filter.php?c=${category}`);
    if (!req.ok) {
      throw new Error(`Error fetching category: ${req.status}`);
    }
    const data = await req.json();

    return data;
  } catch (err) {
    throw new Error(err);
  }
}

async function fetchCertainArea(area) {
  try {
    const req = await fetch(`${BASE_URL}filter.php?a=${area}`);
    if (!req.ok) {
      throw new Error(`Error fetching Area: ${req.status}`);
    }
    const data = await req.json();

    return data;
  } catch (err) {
    throw new Error(err);
  }
}

async function fetchCertainMeal(id) {
  try {
    const req = await fetch(`${BASE_URL}lookup.php?i=${id}`);
    if (!req.ok) {
      throw new Error(`Error fetching meal: ${req.status}`);
    }
    const data = await req.json();

    return data;
  } catch (err) {
    throw new Error(err);
  }
}

async function fetchSearchMeal(query) {
  try {
    const req = await fetch(`${BASE_URL}search.php?s=${query}`);
    if (!req.ok) {
      throw new Error(`Error fetching meal: ${req.status}`);
    }
    const data = await req.json();

    return data;
  } catch (err) {
    throw new Error(err);
  }
}

async function fetchRandomMeal() {
  try {
    const req = await fetch(`${BASE_URL}random.php`);
    if (!req.ok) {
      throw new Error(`Error fetching meal: ${req.status}`);
    }
    const data = await req.json();

    return data;
  } catch (err) {
    throw new Error(err);
  }
}

async function getCategoryMeals(category) {
  try {
    const { meals } = await fetchCertainCategory(category);
    return meals;
  } catch (err) {
    throw new Error(err);
  }
}

async function getAreaMeals(area) {
  try {
    const { meals } = await fetchCertainArea(area);
    return meals;
  } catch (err) {
    throw new Error(err);
  }
}

async function getCertainMeal(id) {
  try {
    const { meals } = await fetchCertainMeal(id);
    return meals;
  } catch (err) {
    throw new Error(err);
  }
}

async function getRandomMeal() {
  try {
    const { meals } = await fetchRandomMeal();
    return meals;
  } catch (err) {
    throw new Error(err);
  }
}

async function getSearchedMeals(query) {
  try {
    const { meals } = await fetchSearchMeal(query);
    return meals;
  } catch (err) {
    throw new Error(err);
  }
}

async function getBookmarkedMeals() {
  try {
    const bookmarkMealsIds = JSON.parse(localStorage.getItem("bookmarks"));
    let bookmarkedMealsList = [];

    if (bookmarkMealsIds.length) {
      bookmarkedMealsList = await Promise.all(
        bookmarkMealsIds?.map(async (bookmark) => {
          return await getCertainMeal(bookmark);
        })
      );
    }

    return bookmarkedMealsList;
  } catch (err) {
    throw new Error(err);
  }
}

export {
  getCategoryMeals,
  getCertainMeal,
  getBookmarkedMeals,
  getSearchedMeals,
  getRandomMeal,
  getAreaMeals,
};
