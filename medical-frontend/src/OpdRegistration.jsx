import React, { useState } from 'react';

export default function OpdRegistration() {
  const [formData, setFormData] = useState({
    full_name: '',
    contact_phone: '',
    gender: 'Male',
    department: 'General'
  });

  const [tokenResult, setTokenResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // 1. Register or lookup the patient
      const patientRes = await fetch('http://localhost:5000/api/patients/check-or-create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: formData.full_name,
          contact_phone: formData.contact_phone,
          gender: formData.gender
        })
      });
      
      const patientData = await patientRes.json();
      
      if (!patientData.success) {
        throw new Error(patientData.message || 'Failed to register patient');
      }

      // 2. Generate the OPD Token
      const tokenRes = await fetch('http://localhost:5000/api/tokens/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          patient_id: patientData.patient.id,
          department: formData.department,
          track_type: 'opd'
        })
      });
      
      const tokenData = await tokenRes.json();

      if (!tokenData.success) {
        throw new Error('Failed to generate token');
      }

      // 3. Display the result
      setTokenResult({
        uhid: patientData.patient.uhid,
        name: patientData.patient.full_name,
        token: tokenData.token.token_number,
        room: tokenData.token.assigned_room,
        department: tokenData.token.department
      });

    } catch (err) {
      console.error('Error in intake flow:', err);
      setError('Connection failed. Ensure your backend is running on port 5000 and the port is set to "Public" in Codespaces.');
    } finally {
      setLoading(false);
    }
  };

  // UI Styles (Clean, white background, professional consulting aesthetic)
  const styles = {
    container: { maxWidth: '500px', margin: '40px auto', fontFamily: 'system-ui, sans-serif' },
    card: { background: '#ffffff', padding: '30px', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' },
    title: { color: '#0f766e', marginTop: 0, borderBottom: '2px solid #f1f5f9', paddingBottom: '10px' },
    label: { display: 'block', marginBottom: '6px', fontWeight: '600', color: '#334155', fontSize: '14px' },
    input: { width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #cbd5e1', marginBottom: '16px', boxSizing: 'border-box' },
    button: { width: '100%', padding: '12px', backgroundColor: '#0f766e', color: 'white', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px' },
    error: { color: '#ef4444', backgroundColor: '#fee2e2', padding: '10px', borderRadius: '4px', marginBottom: '16px', fontSize: '14px' },
    tokenBox: { border: '2px dashed #0f766e', padding: '24px', textAlign: 'center', backgroundColor: '#f0fdfa', borderRadius: '8px' },
    tokenNumber: { fontSize: '48px', fontWeight: 'bold', color: '#0f766e', margin: '10px 0' }
  };

  return (
    <div style={styles.container}>
      {!tokenResult ? (
        <div style={styles.card}>
          <h2 style={styles.title}>OPD Patient Intake</h2>
          
          {error && <div style={styles.error}>{error}</div>}

          <form onSubmit={handleSubmit}>
            <label style={styles.label}>Full Name</label>
            <input
              type="text"
              name="full_name"
              required
              value={formData.full_name}
              onChange={handleChange}
              style={styles.input}
              placeholder="e.g. John Doe"
            />

            <label style={styles.label}>Contact Phone</label>
            <input
              type="tel"
              name="contact_phone"
              required
              value={formData.contact_phone}
              onChange={handleChange}
              style={styles.input}
              placeholder="10-digit mobile number"
            />

            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ flex: 1 }}>
                <label style={styles.label}>Gender</label>
                <select name="gender" value={formData.gender} onChange={handleChange} style={styles.input}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div style={{ flex: 1 }}>
                <label style={styles.label}>Department</label>
                <select name="department" value={formData.department} onChange={handleChange} style={styles.input}>
                  <option value="General">General Medicine</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Orthopedics">Orthopedics</option>
                </select>
              </div>
            </div>

            <button type="submit" disabled={loading} style={styles.button}>
              {loading ? 'Processing...' : 'Register & Generate Token'}
            </button>
          </form>
        </div>
      ) : (
        <div style={styles.card}>
          <h2 style={styles.title}>Token Issued</h2>
          <div style={styles.tokenBox}>
            <p style={{ margin: 0, color: '#64748b' }}>UHID: {tokenResult.uhid}</p>
            <div style={styles.tokenNumber}>{tokenResult.token}</div>
            <p style={{ margin: '4px 0', fontSize: '18px', fontWeight: 'bold' }}>{tokenResult.room}</p>
          </div>
          
          <div style={{ marginTop: '20px', lineHeight: '1.6' }}>
            <p><strong>Patient:</strong> {tokenResult.name}</p>
            <p><strong>Department:</strong> {tokenResult.department}</p>
          </div>
          
          <button onClick={() => setTokenResult(null)} style={{...styles.button, backgroundColor: '#64748b', marginTop: '20px'}}>
            Next Patient
          </button>
        </div>
      )}
    </div>
  );
}