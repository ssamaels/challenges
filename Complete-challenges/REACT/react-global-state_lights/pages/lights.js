import Link from "../components/Link";
import Lights from "../components/Lights";
import Layout from "../components/Layout";

export default function Rooms({ lights, toggleLight }) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>All Lights</h1>
      <Layout lights={lights}>
        <Lights lights={lights} toggleLight={toggleLight} />
      </Layout>
    </>
  );
}
