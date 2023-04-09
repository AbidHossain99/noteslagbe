const homework = require("../models/hwModel");

const addHomework = async (request, response) => {
  try {
    const newaddHomework = await homework.create({
      data: request.body.data,
      createdAt: Date.now(),
    });

    await newaddHomework.save();

    return response.status(200).json(newaddHomework);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

const getAllhws = async (request, response) => {
  try {
    const hws = await homework.find({}).sort({ createdAt: -1 });

    return response.status(200).json(hws);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

module.exports = { addHomework, getAllhws };
