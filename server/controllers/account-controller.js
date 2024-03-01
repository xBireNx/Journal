const express = require("express");
const bcrypt = require("bcrypt");
const Account = require("../models/account-model");

exports.dashboard = async (req, res, next) => {
  try {
    const { accountNumber, broker, initialBalance, phase } = req.body;

    const existingAccount = await Account.findOne({ accountNumber });

    if (existingAccount) {
      return res.status(400).json({ message: "Account already exists" });
    }

    let maxLossPer
    const maxLoss = () => {
        if(broker == "FundedNext"){
            maxLossPer = 8 ;
            return maxLossPer;
        }
    }

    const newAccount = new Account({
      accountNumber,
      broker,
      initialBalance,
      phase,
      maxLoss: maxLossPer,
    });

    await newAccount.save();

    res.status(201).json({ message: "Account created successfully" });
  } catch (error) {
    console.error("Error in signup:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

