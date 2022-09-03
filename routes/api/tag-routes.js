const router = require("express").Router();
const { json } = require("sequelize/types");
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  try {
    const tagData = await Tag.findAll();
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// be sure to include its associated Product data;

router.get("/:id", async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id);
    if (!tagData) {
      res.status(404).json({ message: "No tag with this id!" });
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// be sure to include its associated Product data;

router.post("/", (req, res) => {
  // create a new tag
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
