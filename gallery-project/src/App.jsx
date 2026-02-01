import axios from 'axios'
import React, {useEffect, useState} from 'react'

const App = () => {
  const [userData, setUserData] = useState([])
  const [page, setPage] = useState(1)

  const fetch = async() => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=12`)
    setUserData(response.data)
    console.log(response.data)
  }

  useEffect(() => {
    fetch()
  },[page])

  let userStatus = 'No User Found'
  if(userData.length > 0){
    userStatus = userData.map((elem, idx) => {

      return <a href={elem.url} target='blank'>
        <div key={idx} className='w-80 h-60 overflow-hidden rounded-2xl'>
          <img src={elem.download_url} alt="" className='h-full w-full object-cover'/>
        </div>
          <h1 className='text-lg font-bold text-purple-300'>{elem.author}</h1>
      </a>
    })
  }

  return (
    <div className='flex flex-col gap-10 overflow-auto h-screen bg-black text-black p-10'>
      {/* <button 
      className='bg-purple-400 w-20 h-6 rounded-2xl'
      onClick={fetch} >
      Get Data
      </button> */}
      <div className=''>
        <h1 className='flex flex-wrap gap-8 justify-around text-white'>{userStatus}</h1>
      </div>
      <div className='flex gap-10 justify-center'>
        <button 
        className='bg-purple-400 w-20 h-6 rounded-2xl'
        onClick={() => {
          console.log("Previous")
          if(page > 1){
            setPage(prev => prev - 1)
            setUserData([])
          }
        }}>Prev</button>
        <h1 className='text-purple-300 font-bold'>Page {page} </h1>
        <button 
        className='bg-purple-400 w-20 h-6 rounded-2xl'
        onClick={() => {
          console.log("Next")
          setPage(prev => prev + 1)
          setUserData([])
        }} >Next</button>
      </div>
    </div>
  )
}

export default App