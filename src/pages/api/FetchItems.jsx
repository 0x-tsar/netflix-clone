import React from "react";
import axios from "axios";

export const FetchItems = async (req, res) => {
  const resAction = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=bc1d5403cf190e03d43efeb49dd961a4&with_genres=28`
  );

  const resAdventure = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=bc1d5403cf190e03d43efeb49dd961a4&with_genres=12`
  );

  const resAnimation = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=bc1d5403cf190e03d43efeb49dd961a4&with_genres=16`
  );

  const resComedy = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=bc1d5403cf190e03d43efeb49dd961a4&with_genres=35`
  );

  const resCrime = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=bc1d5403cf190e03d43efeb49dd961a4&with_genres=80`
  );

  const resDocumentary = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=bc1d5403cf190e03d43efeb49dd961a4&with_genres=99`
  );

  const resDrama = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=bc1d5403cf190e03d43efeb49dd961a4&with_genres=18`
  );

  const action = resAction.data.results;
  const adventure = resAdventure.data.results;
  const animation = resAnimation.data.results;
  const comedy = resComedy.data.results;
  const crime = resCrime.data.results;
  const documentary = resDocumentary.data.results;
  const drama = resDrama.data.results;

  let data = {
    action: action,
    adventure: adventure,
    animation: animation,
    comedy: comedy,
    crime: crime,
    documentary: documentary,
    drama: drama,
  };

  return data;
};

export default FetchItems;
