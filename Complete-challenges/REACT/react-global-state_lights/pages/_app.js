import GlobalStyle from "../styles";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout {...pageProps}>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  );
}
