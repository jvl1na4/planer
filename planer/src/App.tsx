import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';


function App() {

  return (
    <>
      <Routes>
        <Route path="*" element={<Navigate replace to ="home"/>}/>
        <Route path="home" element={<HomePage/> } />
      </Routes>
    </>
  )
}

export default App
