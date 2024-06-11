const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Register route
router.post('/register', async (req, res) => {
  console.log(req.params);
  try {
    const { username, password } = req.body;
    // Create a new user instance
    const newUser = new User({ username, password });
    // Save the user to the database
    await newUser.save();
    // Send success response
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    // Handle registration error
    res.status(500).json({ message: 'Registration failed', error: error.message });
  }
});

// Login route
router.post('/login', async (req, res) => {
  console.log(req);
  try {
    const { username, password } = req.body;
    // Check if the user with the provided username exists
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: 'Username or password is incorrect' });
    }
    // Check if the provided password matches the user's password
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Username or password is incorrect' });
    }
    // If username and password match, send login success message
    res.status(200).json({
      message: 'Login successful',
      user: {
        _id: user._id,
        username: user.username,
        // Include any other user information you want to send to the frontend
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
