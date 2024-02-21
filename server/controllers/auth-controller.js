const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user-model');

exports.signup=async(req,res,next)=>{
    try {
        const { firstName, lastName, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,    
    });
        await newUser.save();

        res.status(201).json({ message: 'Account created successfully' });

    } catch (error) {
        console.error('Error in signup:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}