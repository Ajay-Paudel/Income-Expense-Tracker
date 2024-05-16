const express = require('express');
const router = express.Router();
const authenticateToken = require('../../middleware/authorization');

router.get('/checkauth', authenticateToken, (req, res, next) => {
    return res.status(200).json({
        status: true,
        message: "Authorized"
    });
});

module.exports = router;
