import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";
import { useRouter } from "next/router";

export default function Character() {
  const router = useRouter();
  const { id } = router.query;

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(`https://swapi.dev/api/people/${id}`, fetcher);

  if (error) {
    return <div>Error loading data</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const { name, height, eye_color, birth_year } = data;

  return (
    <Layout>
      <Card
        id={id}
        name={name}
        height={height}
        eyeColor={eye_color}
        birthYear={birth_year}
      />
    </Layout>
  );
}
