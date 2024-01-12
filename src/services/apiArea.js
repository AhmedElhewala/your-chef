import { BASE_URL } from "../utilities/constants";

async function fetchAreasList() {
  const req = await fetch(`${BASE_URL}list.php?a=list`);
  if (!req.ok) {
    throw new Error(`Error fetching areas: ${req.status}`);
  }
  const data = await req.json();

  return data
}

async function getAreasList() {
  const {meals: areas} = await fetchAreasList();
  return areas;
}

export {getAreasList}