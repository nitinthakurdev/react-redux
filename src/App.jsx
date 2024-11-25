import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import Posts from './components/Posts'
import CreatePosts from './components/CreatePosts'

function App() {
  

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Posts/>} />
      <Route path="/create" element={<CreatePosts/>} />
    </Routes>
    </>
  )
}

export default App
