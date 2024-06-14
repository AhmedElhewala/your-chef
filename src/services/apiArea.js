import { BASE_URL } from "../utilities/constants";

async function fetchAreasList() {
  try {
    const req = await fetch(`${BASE_URL}list.php?a=list`);
    if (!req.ok) {
      throw new Error(`Error fetching areas: ${req.status}`);
    }
    const data = await req.json();

    return data;
  } catch (err) {
    throw new Error(err);
  }
}

async function getAreasList() {
  try {
    const { meals: areas } = await fetchAreasList();
    return areas;
  } catch (err) {
    throw new Error(err);
  }
}

export { getAreasList };
