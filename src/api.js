import { API_MEALS_URL } from "./config";

const getAllCategories = async () => {
  const url = `${API_MEALS_URL}/categories.php`;

  const response = await fetch(url);
  const data = await response.json();

  return data;
};

const getFilteredCategories = async (categoryName) => {
  const url = `${API_MEALS_URL}/filter.php?c=${categoryName}`;

  const response = await fetch(url);
  const data = await response.json();

  return data;
};

const getMealById = async (id) => {
  const url = `${API_MEALS_URL}/lookup.php?i=${id}`;

  const response = await fetch(url);
  const data = await response.json();

  return data;
};

export {
  getAllCategories,
  getFilteredCategories,
  getMealById,
}