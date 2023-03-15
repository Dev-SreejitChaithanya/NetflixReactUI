import React,{useEffect,useState} from 'react'
import axios from '../../axios'
import Youtube from 'react-youtube'
import './RowPost.css'
import { API_KEY, imageUrl } from '../../constants/constants'
function RowPost(props) {
    const[movies,setMovies]=useState([])
    const [urlId,setUrlId]=useState('')
    useEffect(() => {
     axios.get(props.url).then(response=>{ setMovies(response.data.results) ;console.log(response.data)})
    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    const handleMovie=(id)=>{ 
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{console.log(response.data)
        if(response.data.results.length!==0){
            setUrlId(response.data.results[0])
        }

        })
        console.log(id)}
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {movies.map((obj)=>
                    <img onClick={()=>{handleMovie(obj.id)}} className={props.isSmall ? 'smallPoster':'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`} />

                )}
            </div>
           { urlId && <Youtube videoId={urlId.key} opts={opts}/>}
        </div>
    )
}

export default RowPost