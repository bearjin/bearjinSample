import React from 'react'
import FilterButton from './components/FilterButton'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <FilterButton />
  </div>
)

export default App
