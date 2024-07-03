import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import PersonalPage from './pages/personal/PersonalPage';
import WorkPage from './pages/work/WorkPage';
import SchoolPage from './pages/school/SchoolPage';


function App() {

  return (
    <>
      <Routes>
        <Route path="*" element={<Navigate replace to ="home"/>}/>
        <Route path="/" element={<HomePage />} />
        <Route path="home" element={<HomePage/> } />
        <Route path="school" element={<SchoolPage/> } />
        <Route path="work" element={<WorkPage/> } />
        <Route path="personal" element={<PersonalPage/> } />
      </Routes>
    </>
  )
}

export default App
