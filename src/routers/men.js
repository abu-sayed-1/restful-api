const express = require("express");
const router = express.Router();
const MenRanking = require("../models/mens");

router.post("/mens", async (req, res) => {
  try {
    const mensCreate = new MenRanking(req.body);
    const saveMens = await mensCreate.save();
    res.status(200).send(saveMens);
  } catch (err) {
    res.status(400).send(err);
  }
});

// we will handle get req
router.get("/mens", async (req, res) => {
  try {
    const getMens = await MenRanking.find({}).sort({ ranking: 1 });
    res.status(200).send(getMens);
  } catch (err) {
    res.status(400).send(err);
  }
});

// get specific men document
router.get("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMen = await MenRanking.findById(_id);
    res.status(200).send(getMen);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.patch("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateMan = await MenRanking.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(200).send(updateMan);
  } catch (err) {
    res.status(500).send(err);
  }
});

// find by id and delete
router.delete("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteMan = await MenRanking.findByIdAndDelete(_id);
    res.status(200).send(deleteMan);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
