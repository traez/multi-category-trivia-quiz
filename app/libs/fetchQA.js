import { endPointsArr } from "./endPoints";

export default async function fetchQA(category, difficulty, categoryIndex) {

  const endpoint = endPointsArr[categoryIndex - 1][category][difficulty];

  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

/*
function
*/
