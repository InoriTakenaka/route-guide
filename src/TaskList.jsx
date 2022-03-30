import React from 'react'

export default function TaskList(prop) {
  return (
    <div>
        <h3>Task List</h3>
        <ul>
            {
                prop.dataSource.map((t)=>(
                    <li key={t.id}>
                    <a href='#'>{t.task}</a>
                    </li>
                ))               
            }
        </ul>
    </div>
  )
}
