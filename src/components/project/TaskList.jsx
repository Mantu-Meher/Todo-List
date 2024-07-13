// import React from 'react'
import { FaCheckSquare } from 'react-icons/fa'
import { MdDeleteForever } from 'react-icons/md'

const TaskList = ({task, onHandleDelete, handleCheckFun}) => {
  return (
    <section
            
            className="px-4 py-7 border rounded-[20px] mx-3 bg-white mb-4 shadow-xl"
          >
            <div className="flex justify-between items-center">
              <div>
                <h1 className={`text-xl text-black font-medium ${task.checked? "line-through": "no-underline"}`}>{task.content}</h1>
              </div>
              <div className="flex text-3xl gap-8">
                <FaCheckSquare className="text-green-500 cursor-pointer" onClick={()=>handleCheckFun(task)}/>
                <MdDeleteForever className="text-red-500 cursor-pointer" onClick={()=>onHandleDelete(task)} />
              </div>
            </div>
          </section>
  )
}

export default TaskList
