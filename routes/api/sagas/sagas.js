const express = require("express");
const Saga = require("../../../models/Saga");
const router = express.Router();

router.get("/", async (req, res) => {
  let sagas = await Saga.aggregate([
    { $unwind: "$volumes" },
    { $sort: { "volumes.volume": 1 } },
    {
      $group: {
        _id: "$_id",
        name: { $first: "$name" },
        volumes: { $push: "$volumes" },
      },
    },
  ]).sort({ name: "asc" });
  res.status(200).json(sagas);
});

router.post("/", async (req, res) => {
  const newSaga = new Saga(req.body);
  const saga = await newSaga.save();
  res.status(200).json(saga);
});

router.put("/:idSaga", async (req, res) => {
  let saga = await Saga.findByIdAndUpdate(req.params.idSaga, req.body, {
    useFindAndModify: false,
    new: true,
  });
  res.status(200).json(saga);
});

router.delete("/:idSaga", async (req, res) => {
  let saga = await Saga.findByIdAndDelete(req.params.idSaga);
  res.status(200).json(saga);
});

module.exports = router;
