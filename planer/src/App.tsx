import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import PersonalPage from './pages/personal/PersonalPage';
import WorkPage from './pages/work/WorkPage';
import SchoolPage from './pages/school/SchoolPage';
import Loginpage from './pages/login/Login';
import ContactPage from './pages/contact/ContactPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/home" />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/school" element={<SchoolPage />} />
      <Route path="/work" element={<WorkPage />} />
      <Route path="/personal" element={<PersonalPage />} />
      <Route path="/contact" element={<ContactPage/>} />
      <Route path="*" element={<Navigate replace to="/login" />} />
    </Routes>
  );
}

export default App;
