const express = require("express");
const axios = require("axios");
const { fetchGeoCodes } = require("../apiHelper");

const getGeoCode = async (input) => {
  try {
    return await axios(`${fetchGeoCodes}&place_id=${input}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = async (req, res) => {
  try {
    const input = req?.query?.input;
    const response = await getGeoCode(input);
    res.send(response?.data);
  } catch (error) {
    console.log(error);
  }
};
