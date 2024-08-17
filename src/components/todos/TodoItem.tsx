import { Todo } from '@prisma/client'
import React from 'react'
import styles from './TodoItem.module.css'
import { IoCheckbox, IoSquare } from 'react-icons/io5'

export interface TodoItemInterface {
  todo: Todo
}

export const TodoItemComponent = ({todo}:TodoItemInterface) => {

  return (
    <>
      <div className={ todo.complete ? styles.todoDone : styles.todoPending } >

        <div className='flex gap-4 items-center'>
            <div>
                {
                    todo.complete
                        ? <IoCheckbox size={30}/>
                        : <IoSquare size={30} />
                }
            
            </div>
            <div>

            {todo.description}
            </div>
        </div>

      </div>
    </>
  )
}