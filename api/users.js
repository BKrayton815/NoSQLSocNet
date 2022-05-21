const express = require('express');
const router = express.Router();
const users = [];
('/', (_, res) => {
    const usernames = users.map((user) => {
        return user.name;
    })
    res.status(200).json({userNames: usernames});
});