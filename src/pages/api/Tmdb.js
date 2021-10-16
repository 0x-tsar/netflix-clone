import axios from "axios";

const GENRES = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

const Tmbd = async (whatGenre) => {
  const genre = await axios.get(
    "api.themoviedb.org/3/discover/movie?api_key=bc1d5403cf190e03d43efeb49dd961a4&with_genres=28"
  );

  console.log(genre);
};

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

//api.themoviedb.org/3/discover/movie?api_key=bc1d5403cf190e03d43efeb49dd961a4&with_genres=16

export default Tmbd;
