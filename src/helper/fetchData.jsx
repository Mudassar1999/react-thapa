const baseUrl = "https://dummyjson.com/products";
const fetchData = async ({ params }) => {
  const { productId } = params;

  const res = await fetch(`${baseUrl}`);
  const data = await res.json();
  if (productId) {
    const product = data?.products.find((product) => product.id == productId);
    return product;
  } else {
    return data;
  }
};

export default fetchData;
