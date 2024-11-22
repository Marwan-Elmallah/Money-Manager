const express = require("express");
const { addAction, getActions } = require("./ActionController");
const authMiddleware = require("./AuthMiddleware");

const router = express.Router();

router.post("/", authMiddleware, addAction);
router.get("/", authMiddleware, getActions);

module.exports = router;