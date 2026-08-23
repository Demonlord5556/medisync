require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Secret key for signing tokens 
const JWT_SECRET = process.env.JWT_SECRET || 'super_secret_medical_key';

// MOCK DATABASE: We will replace this with PostgreSQL later
const mockUsers = [
    { id: '1', email: 'patient@test.com', password: 'password123', role: 'PATIENT', hospitalId: null },
    { id: '2', email: 'doctor@test.com', password: 'password123', role: 'DOCTOR', hospitalId: 'hosp-101' },
    { id: '3', email: 'admin@test.com', password: 'password123', role: 'HOSPITAL_ADMIN', hospitalId: 'hosp-101' }
];

// --- AUTHENTICATION ROUTE ---
app.post('/api/auth/login', (req, res) => {
    const { email, password } = req.body;

    const user = mockUsers.find(u => u.email === email && u.password === password);

    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    const tokenPayload = {
        userId: user.id,
        role: user.role,
        hospitalId: user.hospitalId 
    };

    const token = jwt.sign(tokenPayload, JWT_SECRET, { expiresIn: '2h' });

    res.json({
        message: 'Login successful',
        token: token,
        role: user.role
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`API Gateway running on port ${PORT}`);
});