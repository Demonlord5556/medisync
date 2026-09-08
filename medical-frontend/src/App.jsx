import { useState } from 'react';
import Login from './Login';
import PatientDashboard from './PatientDashboard';
import OpdRegistration from './OpdRegistration'; // 1. Import the new component

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // 2. Add a state to handle navigation after login
  const [currentView, setCurrentView] = useState('dashboard'); 

  return (
    <div>
      {!isLoggedIn ? (
        <Login onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <div>
          {/* 3. A simple navigation bar for testing routing */}
          <nav style={{ 
            padding: '16px', 
            background: '#0f766e', 
            color: 'white', 
            display: 'flex', 
            gap: '16px',
            marginBottom: '20px' 
          }}>
            <button 
              onClick={() => setCurrentView('dashboard')}
              style={{ cursor: 'pointer', padding: '8px 16px', borderRadius: '4px', border: 'none', fontWeight: 'bold' }}
            >
              Dashboard
            </button>
            <button 
              onClick={() => setCurrentView('opd')}
              style={{ cursor: 'pointer', padding: '8px 16px', borderRadius: '4px', border: 'none', fontWeight: 'bold' }}
            >
              OPD Booking & Token
            </button>
            <button 
              onClick={() => setIsLoggedIn(false)}
              style={{ cursor: 'pointer', padding: '8px 16px', borderRadius: '4px', border: 'none', marginLeft: 'auto', background: '#ef4444', color: 'white' }}
            >
              Logout
            </button>
          </nav>

          {/* 4. Render the selected view */}
          {currentView === 'dashboard' ? <PatientDashboard /> : <OpdRegistration />}
        </div>
      )}
    </div>
  );
}