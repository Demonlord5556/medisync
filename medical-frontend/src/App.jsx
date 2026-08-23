import { useState } from 'react';
import Login from './Login';
import PatientDashboard from './PatientDashboard';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {!isLoggedIn ? (
        <Login onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <PatientDashboard />
      )}
    </div>
  );
}