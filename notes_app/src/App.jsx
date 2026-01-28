import react, { useState } from 'react';
import './index.css'

const App = () => {

  const[title, setTitle] = useState("")
  const[details, setDetails] = useState("")

  const[task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task]
    copyTask.push({title, details})
    setTask(copyTask)

    setTitle("")
    setDetails("")

  }

  const deleteTask = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx, 1)
    setTask(copyTask)
    console.log(idx)
  }


  return (
    <div className="screen w-full h-screen lg:flex ">
      <div className='w-2/5 p-10 flex items-center'>
        <div>
          <form action="" onSubmit={(e) => {submitHandler(e)}} className="form flex flex-col gap-10">
            <h1 className='text-4xl text-purple-500 '>Think. Write. Remember.</h1>
            <div>
              <input
                type="text"
                placeholder='Write it down, get it done'
                className='title bg-neutral-100 text-neutral-950 w-full h-9 rounded-lg p-3'
                value={title}
                onChange={(e) => {setTitle(e.target.value)}} />
            </div>
            <textarea
              name=""
              id=""
              placeholder='Scribble smarter'
              className='desc bg-neutral-100 text-neutral-950  h-30 rounded-lg p-3'
              value={details}
              onChange={(e) => {setDetails(e.target.value)}} ></textarea>
            <div className="submit flex justify-around ">
              <button className='submit bg-purple-500 w-20 h-9 rounded-lg text-neutral-950'>Create</button>
            </div>
          </form>
        </div>
      </div>
      <div className="data w-3/5 p-10 flex flex-col gap-15">
        <div className='text-center'>
          <h1 className='text-4xl text-purple-500'>Recent Notes</h1>
        </div>
        <div className='flex flex-wrap gap-10'> 
          {task.map(function(elem, idx){

            return <div key={idx} className='w-55 h-55 rounded-2xl bg-purple-900 p-5 flex flex-col items-center gap-5'>
            <div className='h-1/10 text-lg font-bold'>
              <h1>{elem.title}</h1>
            </div>
            <div className='flex-1'>
            <p> {elem.details} </p>
            </div>
            <button className='bg-red-500 rounded-xl w-20 h-8' onClick={() => {deleteTask(idx)}}>Delete</button>
          </div>
          })}
          
        </div>
      </div>
    </div>
  )
}

export default App