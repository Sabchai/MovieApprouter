import React, { useState } from 'react'
import AddMovie from './Components/Addmovie/AddMovie'
import MovieList from './Components/MovieList/MovieList'
import Search from './Components/SearchMovie/Search'
import {movies} from './data/MovieData'
import Home from './Components/Home';
import { Routes, Route } from 'react-router-dom';




const App = () => {
  
  const [ListMovie,setListMovie]=useState(movies)
        
const handelAddMovie=(newMovie)=>{
setListMovie(
  [...ListMovie,newMovie]
)
}



const [nameSearch,setNAmeSearch]=useState('')

  return (
    <div>
     
      <Search  setNAmeSearch={setNAmeSearch} />


      <MovieList ListMovie={ListMovie}  nameSearch={nameSearch}/>

      <hr/>
      
      <AddMovie  handelAddMovie={handelAddMovie}/>

      <Home></Home>
      
      <Routes>
        <Route path="/movies" element={<MovieList movieList={ MovieList} handelAddMovie={handelAddMovie}></MovieList>} />
       
  
      </Routes>
    
    </div>
    
  )
}

export default App