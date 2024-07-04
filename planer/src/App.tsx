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
        <Route path="/planer/" element={<HomePage />} />
        <Route path="/planer/home" element={<HomePage />} />
        <Route path="/planer/school" element={<SchoolPage />} />
        <Route path="/planer/work" element={<WorkPage />} />
        <Route path="/planer/personal" element={<PersonalPage />} />
        <Route path="*" element={<Navigate replace to="/planer/home" />} />
      </Routes>
    </>
  )
}

export default App
