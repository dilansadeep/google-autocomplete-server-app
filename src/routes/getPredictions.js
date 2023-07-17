const express = require("express");
const axios = require("axios");
const { fetchPlaces } = require("../apiHelper");

const getPredicts = async (input) => {
  try {
    return await axios(`${fetchPlaces}&input=${input}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = async (req, res) => {
  try {
    const input = req?.query?.input;
    const response = await getPredicts(input);
    res.send(response?.data?.predictions);
  } catch (error) {
    console.log(error);
  }
};
