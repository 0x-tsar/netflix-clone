import "../../styles/globals.css";
import styled from "styled-components";
import Layout from "../components/Layout";
import FetchItems from "./api/FetchItems";
import { useEffect, useState } from "react";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50vh min-content;
  grid-template-areas:
    "banner"
    "main";
`;

function MyApp({ Component, pageProps }) {
  const [currentBackdrop, setCurrentBackdrop] = useState("");

  useEffect(() => {
    const done = async () => {
      const data = await FetchItems();
      const randomGenreNum = Math.floor(
        Math.random() * Object.keys(data).length
      );
      const randomGenre = Object.keys(data)[randomGenreNum];
      const values = Object.values(data)[randomGenreNum];
      const chosenMovie = values[Math.floor(Math.random() * values.length)];
      const movieBanner = chosenMovie.backdrop_path;
      setCurrentBackdrop(`https://image.tmdb.org/t/p/original/${movieBanner}`);
    };

    done();
  }, []);

  return (
    <Container>
      <Layout currentBackdrop={currentBackdrop}></Layout>
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;
