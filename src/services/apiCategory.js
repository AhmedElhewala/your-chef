import { BASE_URL } from "../utilities/constants";

async function fetchCategoriesList() {
  const req = await fetch(`${BASE_URL}categories.php`);
  if (!req.ok) {
    throw new Error(`Error fetching categories: ${req.status}`);
  }
  const data = await req.json();

  return data
}

async function getCategoriesList() {
  const {categories} = await fetchCategoriesList();
  return categories;
}

export {getCategoriesList}