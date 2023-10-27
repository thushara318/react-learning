
'use client'
import { TextField } from '@mui/material'
import styles2 from './page.module.css'
import Moviecards from '../../component/Moviecards'
import movieList from '../../helper/movie-list.json'
import { Key, useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(movieList);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://www.omdbapi.com/?apikey=86a74a68&page=10&i=tt3896198&s=all");
      const data = await response.json();
      console.log(data);
      setData(data);
    };

    fetchData();
  }, []);


  return (
    <main>
      <div className={styles2.FlexContainer}>
        <span className={styles2.Title}>Movie Search</span>
        <TextField id="standard-basic" label="Search here" variant="standard" />
      </div>
      <div className={styles2.CardContainer}>
        {data.Search.map((eachMovie: { Title: string; Year: string; Poster: string }, index: Key | null | undefined) => (
          <Moviecards key={index} name={eachMovie.Title} description={eachMovie.Year} img={eachMovie.Poster} />
        ))}
      </div>
    </main>
  )
}
// export async function getStaticProps() {
//   const response = await fetch("https://www.omdbapi.com/?apikey=86a74a68&page=15&i=tt3896198&s=all");
//   const data = await response.json();

//   return {
//     props: {
//       data,
//     },
//   };
// }
