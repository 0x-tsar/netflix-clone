import "../../styles/globals.css";
import styled from "styled-components";
import Layout from "../components/Layout";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 40vh 100%;
  grid-template-areas:
    "banner"
    "main";
`;

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Layout></Layout>
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;
