'use client';
import React, { useState, createContext } from 'react';

export const PageContext = createContext<any>([{  Title:'' ,Year: '', Poster: '' }]);
type details = {
    Title: string; 
    Year: string; 
    Poster: string;
  };
 const PageProvider = ({ children }:{children:any}) => {
  const [state, setState] = useState<details[]>([]);
  const updateMovieDetails = (movieDetails:details)=>{
setState([...state, ...[{Title: movieDetails.Title, Year:movieDetails.Year,Poster:movieDetails.Poster}]])
}
  return (
    <PageContext.Provider value={{state, updateMovieDetails}}>
      {children}
    </PageContext.Provider>
  );
};

export default PageProvider;
