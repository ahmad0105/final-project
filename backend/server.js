        const express = require('express');
        const mongoose = require('mongoose');
        const config = require('./config');
        const authRoutes = require('./routes/auth');

        const app = express();

        // MongoDB Connection
        mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('MongoDB Connected'))
        .catch(err => console.log(err));

        // Middleware
        app.use(express.json());



        // Routes
        app.use('/auth', authRoutes);

        const PORT = 3000;
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
