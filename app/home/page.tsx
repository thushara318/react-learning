
'use client'
import { TextField } from '@mui/material'
import styles2 from './page.module.css'
import Moviecards from '../../component/Moviecards'
import movieList from '../../helper/movie-list.json'
import { Key, useEffect, useState } from "react";

export default function Home() {

  const [data, setData] = useState({ Search: [] });
  const [searchQuery, setSearchQuery] = useState(''); 
  useEffect(() => {
    const fetchData = async () => {
      if (searchQuery) {
        const response = await fetch(`https://www.omdbapi.com/?apikey=86a74a68&s=${searchQuery}`);
        const result = await response.json();
        if (result.Search) {
          setData(result);
        } else {
          setData({ Search: [] });
        }
      }
    };

    fetchData();
  }, [searchQuery]);

  return (
    <main>
      <div className={styles2.FlexContainer}>
        <span className={styles2.Title}>Movie Search</span>
        <span><TextField id="standard-basic" label="Search here" variant="standard" value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}/></span>
      </div>
      
      
<div className={styles2.CardContainer}>
        {searchQuery
          ? data.Search.map((eachMovie: { Title: string; Year: string; Poster: string }, index: Key | null | undefined) => (
              <Moviecards
                key={index}
                name={eachMovie.Title}
                description={eachMovie.Year}
                img={eachMovie.Poster}
              />
            ))
          : movieList.Search.map((eachMovie, index) => (
              <Moviecards
                key={index}
                name={eachMovie.Title}
                description={eachMovie.Year}
                img={eachMovie.Poster}
              />
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
