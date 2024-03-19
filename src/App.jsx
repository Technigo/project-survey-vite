import React from 'react';
import { createRoot } from 'react-dom'
import { Test } from './components/Testcomponent'

const container = document.getElementById('root')
const root = createRoot(container)


export const App = () => {
  return (
    <div><Test/></div>
    
  )
}; 
root.render(<App/>)