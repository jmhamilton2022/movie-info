import { MoviePreview } from './MoviePreview'
import { movies } from './movies'
import React, {useState} from 'react'




function App() {
  const [currentMovieSelection, setCurrentMovieSelection] = useState(null)   
    
  console.log(currentMovieSelection)

  return (
    <div>
      {

        currentMovieSelection ?

          <div>

          <p>{currentMovieSelection.title}</p>
          <p>{currentMovieSelection.description}</p>
          <p>{currentMovieSelection.director}</p>
          <p>{currentMovieSelection.categories}</p>
          <p>{currentMovieSelection.rating}</p>
          <img src={currentMovieSelection.posterUrl} width={'500px'}/>

        </div>


             :

             <p>Select a Movie</p>
      }



      {
          movies.map((movie, index) => {
            
            

            return (
              <MoviePreview
              
                movie={movie}
                setMovie={setCurrentMovieSelection}
                key={index}

                >

                </MoviePreview>
            )
        
        })
      }
    </div>
  );
}

export default App;
