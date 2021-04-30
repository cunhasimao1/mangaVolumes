const express = require("express");
const Saga = require("./../../../../models/Saga");
const router = express.Router({ mergeParams: true });

router.post("/", async (req, res) => {
  let saga = await Saga.findByIdAndUpdate(
    req.params.idSaga,
    {
      $push: {
        volumes: req.body,
      },
    },
    {
      useFindAndModify: false,
      new: true,
    }
  );

  res.status(200).json(saga);
});

router.put("/:idVolume", async (req, res) => {
  let saga = await Saga.updateOne(
    { _id: req.params.idSaga },
    {
      $set: { "volumes.$[v].volume": req.body.volume },
      $set: { "volumes.$[v].image": req.body.image },
    },
    {
      arrayFilters: [{ "v._id": req.params.idVolume }],
      useFindAndModify: false,
      new: true,
    }
  );

  res.status(200).json(saga);
});

router.delete("/:idVolume", async (req, res) => {
  let saga = await Saga.updateOne(
    { _id: req.params.idSaga },
    {
      $pull: { volumes: { _id: req.params.idVolume } },
    },
    {
      useFindAndModify: false,
      new: true,
    }
  );

  res.status(200).json(saga);
});

module.exports = router;
