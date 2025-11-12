// routes/userRoutes.js
const express = require('express');
const router = express.Router();
let User = require('../models/User');
User = User && User.default ? User.default : User;

router.post('/register', async (req, res, next) => {
  try {
    console.log('\n--- /api/users/register called ---');
    console.log('Raw req.body:', JSON.stringify(req.body));

    const { firstName, lastName, gender } = req.body;
    const gmail = req.body.gmail || req.body.email;
    let language = req.body.language ?? [];

    if (!Array.isArray(language)) language = [language];

    if (!firstName || !lastName || !gmail) {
      console.log('Validation failed: missing field(s).');
      return res.status(400).json({ message: 'firstName, lastName and gmail are required' });
    }

    const payload = { firstName, lastName, gmail, gender, language };
    console.log('Normalized payload ->', payload);

    // Check DB connection state
    if (!User.db || User.db.readyState !== 1) {
      console.log('Mongoose connection state:', User.db ? User.db.readyState : 'no db on model');
    }

    const exists = await User.findOne({ gmail }).lean().exec();
    console.log('Existing user check ->', exists ? 'FOUND' : 'NOT FOUND');

    const user = new User(payload);

    try {
      const saved = await user.save();
      console.log('User saved ->', saved._id);
      return res.status(201).json({ message: 'User created', userId: saved._id });
    } catch (saveErr) {
      console.error('Save error ->', saveErr && saveErr.stack ? saveErr.stack : saveErr);
      if (saveErr.code === 11000) return res.status(400).json({ message: 'Email already exists (duplicate key)' });
      if (saveErr.name === 'ValidationError') return res.status(400).json({ message: saveErr.message });
      return next(saveErr);
    }
  } catch (err) {
    console.error('Register route top-level error ->', err && err.stack ? err.stack : err);
    next(err);
  }
});

module.exports = router;
