import React from 'react'
import { useState } from 'react'


function meetNGreet() {
  const [workers, setWorkers] = useState([
    {
      id:1,
      name: 'Ney Rivari',
      Education: 'Child development'
    },
    {
      id:2,
      name: 'Madeline Kosk',
      Education: 'Child development'
    },
    {
      id:3,
      name: 'Flore Josephine',
      Education: 'Child development'
    },
    {
      id:4,
      name: 'Greg Lyons',
      Education: 'Child development'
    }
  ])
  return (
    <div className='container'>
      <div className='body'>
      <div className='worker'>
      {workers.map((worker) => (<h2 key={worker.id}>{worker.name}":" {worker.Education}</h2>))}
      </div>
      </div>
    </div>
  )
}

export default meetNGreet