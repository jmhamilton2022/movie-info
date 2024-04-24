import React, { useState } from 'react'
import './movie-preview.css'



export const MoviePreview = (props) => {

    const {movie, setMovie} = props
    const {title, description, posterUrl} = movie


        // const [variableName, setVariableName] = useState(initialValue)
        const [showExtraInfo, setShowExtraInfo] = useState(false)


        return (

            <div className="movie-preview">

              <p>{title}</p>
                {
                    showExtraInfo ? 

                    <p>{description}</p>

                    :

                    null
                }

              


              <img src={posterUrl} width="200px" alt={title}/>


              <button

                onClick={() => setShowExtraInfo(!showExtraInfo)}
              
              >Toggle Info</button>

              <button
              
                onClick={() => setMovie(movie)}
              >

                Select

              </button>

              </div>
        )

}


