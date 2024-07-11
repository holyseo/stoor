// Base URL of the API
export const BaseURL = "https://fakestoreapi.com";

// Fetches all products from the API
export const FetchAllProducts = async () => {
  try {
    const response = await fetch(`${BaseURL}/products`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching all products data:", error);
    throw error;
  }
};
//Fetches products by category from the API
export const FetchProductsByCategory = async (category: string) => {
  try {
    const response = await fetch(`${BaseURL}/products/category/${category}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products by category data:", error);
    throw error;
  }
};
// Fetches product details by prduct ID from the API
export const FetchProductDetails = async (id: string) => {
  try {
    const response = await fetch(`${BaseURL}/products/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching product details data by ID: ", error);
  }
};
//Fetches all product categories from the API
export const FetchCateogires = async () => {
  try {
    const response = await fetch(`${BaseURL}/products/categories`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching categories data: ", error);
  }
};
