import React, { useEffect, useState } from 'react'
import Card from './Card'

const Drama = () => {
    const [data, setData] = useState([])
    

    const getData = async () => {
        await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=2014&api_key=db95773a7fb212ba790d71f6adac0e7e`).then(response => response.json()).then((res) => (
            setData(res.results)
        ))
    }
    useEffect(() => {
        getData()
        
    }, [])
    
    console.log(data)
  return (
    <div>
      
      <div className="container">
      {data.map((res,pos) => {
        return <Card info={res} key={pos}/>
        })}        
      </div>
    </div>
  )
}

export default Drama