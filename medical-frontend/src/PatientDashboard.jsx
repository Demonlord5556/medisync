export default function PatientDashboard() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', width: '100vw', backgroundColor: '#f8fafc', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', margin: 0, padding: 0 }}>
      
      {/* Sidebar Navigation */}
      <div style={{ width: '260px', backgroundColor: '#ffffff', borderRight: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
        
        {/* Sidebar Header / Logo with Stethoscope Icon */}
        <div style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid #e2e8f0' }}>
          <div style={{ backgroundColor: '#0f766e', color: 'white', padding: '6px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3A3.2 3.2 0 0 1 12 5v4.5a5.5 5.5 0 0 1-11 0V5a3.2 3.2 0 0 1 3.8-2.7Z" />
              <path d="M8 15v3a6 6 0 0 0 12 0v-3" />
              <circle cx="20" cy="10" r="2" />
              <path d="M8 5v4M6 7h4" strokeWidth="2.5" />
            </svg>
          </div>
          <h2 style={{ fontSize: '18px', fontWeight: '700', margin: 0, color: '#0f172a' }}>MediSync</h2>
        </div>

        {/* Navigation Links */}
        <nav style={{ padding: '24px 16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <a href="#" style={{ textDecoration: 'none', color: '#0f766e', backgroundColor: '#f0fdfa', padding: '12px 16px', borderRadius: '8px', fontWeight: '600', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/></svg>
            Overview
          </a>
          <a href="#" style={{ textDecoration: 'none', color: '#64748b', padding: '12px 16px', borderRadius: '8px', fontWeight: '500', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            Appointments
          </a>
          <a href="#" style={{ textDecoration: 'none', color: '#64748b', padding: '12px 16px', borderRadius: '8px', fontWeight: '500', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            Records
          </a>
        </nav>

        {/* User Profile Area (Generic Mockup) */}
        <div style={{ marginTop: 'auto', padding: '24px', borderTop: '1px solid #e2e8f0' }}>
           <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
             <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#0f766e', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '14px' }}>
               JD
             </div>
             <div>
               <p style={{ margin: 0, fontSize: '14px', fontWeight: '600', color: '#0f172a' }}>John Doe</p>
               <p style={{ margin: 0, fontSize: '12px', color: '#64748b' }}>Patient Profile</p>
             </div>
           </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, padding: '40px', overflowY: 'auto' }}>
        
        {/* Top Header */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <div>
            <h1 style={{ fontSize: '28px', fontWeight: '700', color: '#0f172a', margin: '0 0 8px 0' }}>Patient Overview</h1>
            <p style={{ color: '#64748b', margin: 0, fontSize: '15px' }}>Here is your latest health summary and upcoming schedule.</p>
          </div>
          <button style={{ backgroundColor: '#0f766e', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '8px', fontWeight: '600', fontSize: '14px', cursor: 'pointer', boxShadow: '0 4px 6px -1px rgba(15, 118, 110, 0.2)', transition: 'background-color 0.2s' }}>
            + Book Appointment
          </button>
        </header>

        {/* Quick Stats Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '40px' }}>
          <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '14px', color: '#64748b', margin: '0 0 12px 0', fontWeight: '600' }}>Next Appointment</h3>
            <p style={{ fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '0 0 4px 0' }}>Dr. Sarah Jenkins</p>
            <p style={{ fontSize: '14px', color: '#0f766e', margin: 0, fontWeight: '500' }}>Tomorrow, 10:00 AM</p>
          </div>
          
          <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '14px', color: '#64748b', margin: '0 0 12px 0', fontWeight: '600' }}>Recent Test Results</h3>
            <p style={{ fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '0 0 4px 0' }}>Complete Blood Count</p>
            <p style={{ fontSize: '14px', color: '#059669', margin: 0, fontWeight: '500' }}>● All levels normal</p>
          </div>
          
          <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '14px', color: '#64748b', margin: '0 0 12px 0', fontWeight: '600' }}>Active Prescriptions</h3>
            <p style={{ fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '0 0 4px 0' }}>Amoxicillin 500mg</p>
            <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>2 refills remaining</p>
          </div>
        </div>

        {/* Main Data Table Area */}
        <div style={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
          <div style={{ padding: '20px 24px', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ fontSize: '16px', fontWeight: '700', margin: 0, color: '#0f172a' }}>Upcoming Schedule</h2>
            <a href="#" style={{ fontSize: '14px', color: '#0f766e', textDecoration: 'none', fontWeight: '600' }}>View All</a>
          </div>
          <div style={{ padding: '40px 24px', textAlign: 'center', color: '#64748b', fontSize: '14px' }}>
            <p>No other appointments scheduled for this month.</p>
          </div>
        </div>

      </div>
    </div>
  );
}