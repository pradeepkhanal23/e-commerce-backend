const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  try {
    // finding all tags
    const allTags = await Tag.findAll({
      // including its associated Products
      include: [{ model: Product }],
    });

    res.status(200).json(allTags);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    // finding one category by its `id` value
    const tag = await Tag.findByPk(req.params.id, {
      //including associated products
      include: [{ model: Product }],
    });
    res.status(200).json(tag);
  } catch (error) {
    res.status(404).json(error);
  }
});

router.post("/", async (req, res) => {
  // create a new tag
  try {
    const [newTag, created] = await Tag.findOrCreate({
      where: {
        tag_name: req.body.tag_name,
      },
    });
    // if created is true means, it was not found so it created a new one for us and send us the data back
    if (created) {
      res.status(200).json(newTag);
    } else {
      //if created value is falsy means, it found the record in the existing records
      res.json({
        message: `tag ${req.body.tag_name} already exists`,
      });
    }
  } catch (error) {
    res.status(400).json();
  }
});

router.put("/:id", async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updatedTag = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
      individualHooks: true,
    });
    if (!updatedTag[0]) {
      res.status(404).json({ message: "No Tag with this id is found!" });
      return;
    }
    res.status(200).json({
      message: "Tag name successfully updated",
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value
  try {
    const isDeleted = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (isDeleted) {
      res.status(200).json({
        message: "Tag successfully deleted",
      });
    } else {
      res.status(404).json({
        message: "Tag not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      details: error.message,
    });
  }
});

module.exports = router;
