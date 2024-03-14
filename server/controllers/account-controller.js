const express = require("express");
const bcrypt = require("bcrypt");
const Account = require("../models/account-model");

exports.dashboard = async (req, res, next) => {
  try {
    const { accountNumber, broker, initialBalance, phase } = req.body;

    // Assuming req.user contains the logged-in user's information
    const userId = req.user._id;

    const existingAccount = await Account.findOne({ accountNumber });

    if (existingAccount) {
      return res.status(400).json({ message: "Account already exists" });
    }
    // Function to calculate maxLoss based on broker
    const calculateMaxLoss = (broker) => {
      if (broker === "FundedNext") {
        // Perform your calculation here
        return 8; // Example calculation result
      }
      // Handle other cases if needed
    };

    // Calculate maxLoss based on broker
    const maxLoss = calculateMaxLoss(broker);

    // Function to calculate maxLoss based on broker
    const calculateDailyMaxLoss = (broker) => {
      if (broker === "FundedNext") {
        // Perform your calculation here
        return 5; // Example calculation result
      }
      // Handle other cases if needed
    };

    // Calculate maxLoss based on broker
    const dailyLoss = calculateDailyMaxLoss(broker);

    const newAccount = new Account({
      accountNumber,
      broker,
      initialBalance,
      phase,
      maxLoss,
      dailyLoss,
      userId: userId, // Associate the account with the logged-in user
    });

    await newAccount.save();

    res.status(201).json({ message: "Account created successfully" });
  } catch (error) {
    console.error("Error in signup:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
