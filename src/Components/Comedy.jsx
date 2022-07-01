import React, { useEffect, useState } from 'react'
import Card from './Card'

const Comedy = () => {
    const [data, setData] = useState([])
    

    const getData = async () => {
        await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc&api_key=db95773a7fb212ba790d71f6adac0e7e`).then(response => response.json()).then((res) => (
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

export default Comedy