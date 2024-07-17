import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import PersonalPage from './pages/personal/PersonalPage';
import WorkPage from './pages/work/WorkPage';
import SchoolPage from './pages/school/SchoolPage';
import Loginpage from './pages/login/Login';
import ContactPage from './pages/contact/ContactPage';
import useAuthCheck from './pages/useAutoCheck';
import NewObject from './pages/new-objects/NewObject';
import NewEvent from './pages/new-objects/NewEvent';
import NewTest from './pages/new-objects/NewTest';
import NewAssighnement from './pages/new-objects/NewAssighnement';
import NewProject from './pages/new-objects/NewProject';
import NewToDo from './pages/new-objects/NewToDo';


const App: React.FC = () => {
  useAuthCheck();
  
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/home" />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/school" element={<SchoolPage />} />
      <Route path="/work" element={<WorkPage />} />
      <Route path="/personal" element={<PersonalPage />} />
      <Route path="/contact" element={<ContactPage/>} />
      <Route path="/newObject" element={<NewObject/>} />
      <Route path="/newObject/NewTest" element={<NewTest/>} />
      <Route path="/newObject/NewEvent" element={<NewEvent/>} />
      <Route path="/newObject/NewToDo" element={<NewToDo/>} />
      <Route path="/newObject/NewAssighnement" element={<NewAssighnement/>} />
      <Route path="/newObject/NewProject" element={<NewProject/>} />
      <Route path="*" element={<Navigate replace to="/login" />} />
    </Routes>
  );
}

export default App;
