import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;

  const { data: product, error } = useSWR(`/api/products/${id}`, fetcher);

  if (error) {
    return <div>Error loading product</div>;
  }

  if (!product) {
    return <div>Loading product...</div>;
  }

  return (
    <>
      <div>
        <h2>Name: {product.name}</h2>
        <p>
          <h3>Description: </h3>
          {product.description}
        </p>
        <p>
          Price: {product.price} {product.currency}
        </p>
        <h3>Category: {product.category}</h3>
      </div>
      <button type="button" onClick={() => router.push("/products")}>
        Back
      </button>
    </>
  );
}
