const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/data", async (req, res) => {
  const { type, search, page } = req.query;

  try {
    const response = await axios.get(
      `https://swapi.dev/api/${type}/?search=${search}&page=${page}`
    ); // ?format=wookie
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

module.exports = router;
