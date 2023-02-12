
const { ObjectID } = require("bson");
const client = require("../db/connect");
// const { Milieu } = require("../models/Milieu");

const getAllTemperature = async (req, res) => {
    try {
      let cursor = client
        .db()
        .collection("Milieu")
        .find()
      let result = await cursor.toArray();
      if (result.length > 0) {
        res.status(200).json(result);
      } else {
        res.status(204).json({ msg: "Aucune donnees trouvé" });
      }
    } catch (error) {
      console.log(error);
      res.status(501).json(error);
    }
  };


module.exports = {getAllTemperature}