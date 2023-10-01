const { addNewProp } = require("../models/addPropModel");

const addNewPropController = async (req, res) => {
  const newPropData = req.body;
  try {
    const NewProp = new addNewProp(newPropData);
    await NewProp.save();
    res.status(200).json({ message: "property added successfully" });
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
};
module.exports = { addNewPropController };
