import { BASE_URL } from "../utilities/constants";

async function fetchCategoriesList() {
  try {
    const req = await fetch(`${BASE_URL}categories.php`);
    if (!req.ok) {
      throw new Error(`Error fetching categories: ${req.status}`);
    }
    const data = await req.json();

    return data;
  } catch (err) {
    throw new Error(err);
  }
}

async function getCategoriesList() {
  try {
    const { categories } = await fetchCategoriesList();
    return categories;
  } catch (err) {
    throw new Error(err);
  }
}

export { getCategoriesList };
