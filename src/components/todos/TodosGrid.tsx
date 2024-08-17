'use client'

import { Todo } from '@prisma/client'
import React from 'react'
import { TodoItemComponent } from './TodoItem'

export interface TodosGridInterface {
  todos?: Todo[]
}

export const TodosGridComponent = ({todos=[]}:TodosGridInterface) => {

  return (
    <>
      <div className='flex flex-wrap gap-4'>

        {
            todos.map( todo => (
                <TodoItemComponent todo={todo}/>
            ) )
        }

      </div>
    </>
  )
}