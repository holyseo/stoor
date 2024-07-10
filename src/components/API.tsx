export const FetchAllProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching all products data:", error);
    throw error;
  }
};

export const FetchProductsByCategory = async (category: string) => {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products by category data:", error);
    throw error;
  }
};

export const FetchProductDetails = async (id: string) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching product details data: ", error);
  }
};

export const FetchCateogires = async () => {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching categories data: ", error);
  }
};
