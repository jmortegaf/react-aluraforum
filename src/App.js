import './App.css';
import LoginCard from './components/LoginCard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './components/Home';
import RegisterCard from './components/RegisterCard';

function App() {
 
  const handleRegister = (registerData)=>{
    console.log(registerData);
  }

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginCard/>}/>
        <Route path='/register' element={<RegisterCard onRegister={handleRegister}/>}/>
        <Route
          path='/home' 
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
