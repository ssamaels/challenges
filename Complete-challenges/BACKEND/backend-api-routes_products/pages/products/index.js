import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProductsPage() {
  const { data, error } = useSWR("/api/products", fetcher);

  if (error) {
    return <div>Error loading products</div>;
  }

  if (!data) {
    return <div>Loading products...</div>;
  }

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>
              Price: ${product.price} {product.currency}
            </p>
            <h3>Category: {product.category}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}
