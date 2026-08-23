import { useState } from 'react';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMethod, setLoginMethod] = useState('email'); 
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password });
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', width: '100vw', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', margin: 0, padding: 0 }}>
      
      {/* Left Panel - Dark Teal Theme */}
      <div style={{ flex: 1, backgroundColor: '#0f766e', padding: '8% 10%', display: 'flex', flexDirection: 'column', borderRight: '1px solid #0d9488', color: '#ffffff' }}>
        
        {/* Logo Section */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px' }}>
          <div style={{ backgroundColor: '#ffffff', color: '#0f766e', padding: '8px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3A3.2 3.2 0 0 1 12 5v4.5a5.5 5.5 0 0 1-11 0V5a3.2 3.2 0 0 1 3.8-2.7Z" />
              <path d="M8 15v3a6 6 0 0 0 12 0v-3" />
              <circle cx="20" cy="10" r="2" />
              <path d="M8 5v4M6 7h4" strokeWidth="2.5" />
            </svg>
          </div>
          <h1 style={{ fontSize: '24px', fontWeight: '700', margin: 0, color: '#ffffff' }}>MediSync</h1>
        </div>
        
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 style={{ fontSize: '40px', fontWeight: '700', color: '#ffffff', lineHeight: '1.2', marginBottom: '20px', letterSpacing: '-0.02em', textAlign: 'left' }}>
            Modernizing <br/>patient care.
          </h2>
          
          <p style={{ fontSize: '16px', color: '#ccfbf1', marginBottom: '40px', maxWidth: '420px', lineHeight: '1.6', textAlign: 'left' }}>
            Securely access your medical history, book appointments, and connect with your doctors in one unified portal.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
             <div style={{ display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '16px 20px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.2)', maxWidth: '380px' }}>
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5eead4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
               <span style={{ fontWeight: '500', color: '#ffffff', fontSize: '15px' }}>End-to-End Encryption</span>
             </div>
             <div style={{ display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '16px 20px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.2)', maxWidth: '380px' }}>
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5eead4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
               <span style={{ fontWeight: '500', color: '#ffffff', fontSize: '15px' }}>Smart Scheduling</span>
             </div>
          </div>
        </div>

        {/* Standard Footer */}
        <div style={{ marginTop: 'auto', paddingTop: '20px', fontSize: '12px', color: '#99f6e4', opacity: 0.8, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          © 2026 MediSync Portal
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div style={{ flex: 1, backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '40px' }}>
        <div style={{ width: '100%', maxWidth: '360px', textAlign: 'left' }}>
          
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#0f172a', textAlign: 'left', marginBottom: '8px' }}>Patient Login</h2>
          <p style={{ color: '#64748b', textAlign: 'left', marginBottom: '32px', fontSize: '15px' }}>Access your personalized dashboard.</p>

          <div style={{ display: 'flex', backgroundColor: '#f1f5f9', borderRadius: '8px', padding: '4px', marginBottom: '28px', gap: '4px' }}>
            <button 
              type="button"
              onClick={() => setLoginMethod('patientId')}
              style={{ flex: 1, padding: '8px', border: 'none', borderRadius: '6px', backgroundColor: loginMethod === 'patientId' ? '#ffffff' : 'transparent', color: loginMethod === 'patientId' ? '#0f766e' : '#64748b', boxShadow: loginMethod === 'patientId' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none', cursor: 'pointer', fontWeight: '600', fontSize: '14px', transition: 'all 0.2s' }}>
              Patient ID
            </button>
            <button 
              type="button"
              onClick={() => setLoginMethod('email')}
              style={{ flex: 1, padding: '8px', border: 'none', borderRadius: '6px', backgroundColor: loginMethod === 'email' ? '#ffffff' : 'transparent', color: loginMethod === 'email' ? '#0f766e' : '#64748b', boxShadow: loginMethod === 'email' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none', cursor: 'pointer', fontWeight: '600', fontSize: '14px', transition: 'all 0.2s' }}>
              Email
            </button>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>
                {loginMethod === 'email' ? 'Email Address' : 'Patient ID'}
              </label>
              <input 
                type={loginMethod === 'email' ? 'email' : 'text'} 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder={loginMethod === 'email' ? 'name@example.com' : 'Enter your ID'}
                required 
                style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none', boxSizing: 'border-box', color: '#0f172a' }}
              />
            </div>
            
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#334155', marginBottom: '6px' }}>
                Password
              </label>
              <div style={{ position: 'relative' }}>
                <input 
                  type={showPassword ? "text" : "password"} 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  placeholder="••••••••"
                  required 
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none', boxSizing: 'border-box', color: '#0f172a' }}
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: '#0f766e', cursor: 'pointer', fontSize: '13px', fontWeight: '600' }}>
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            <button type="submit" style={{ width: '100%', padding: '12px', backgroundColor: '#0f766e', color: 'white', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', marginTop: '12px', transition: 'background-color 0.2s', boxShadow: '0 4px 6px -1px rgba(15, 118, 110, 0.2)' }}>
              Sign In to Dashboard
            </button>
          </form>
          
          <div style={{ marginTop: '24px', textAlign: 'center' }}>
            <a href="#staff-login" style={{ fontSize: '13px', color: '#64748b', textDecoration: 'none', fontWeight: '500' }}>
              Hospital Staff & Provider Access &rarr;
            </a>
          </div>

        </div>
      </div>

    </div>
  );
}