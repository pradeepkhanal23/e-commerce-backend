const router = require("express").Router();
const { Category, Product } = require("../../models");
const capitalize = require("../../utils/capitalize");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  try {
    // finding all categories
    const allCategories = await Category.findAll({
      // including its associated Products
      include: [{ model: Product }],
    });

    res.status(200).json(allCategories);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    // finding one category by its `id` value
    const category = await Category.findByPk(req.params.id, {
      //including associated products
      include: [{ model: Product }],
    });
    res.status(200).json(category);
  } catch (error) {
    res.status(404).json(error);
  }
});

router.post("/", async (req, res) => {
  // create a new category
  try {
    const [newCategory, created] = await Category.findOrCreate({
      where: {
        category_name: capitalize(req.body.category_name),
      },
    });
    // if created is true means, it was not found so it created a new one for us and send us the data back
    if (created) {
      res.status(200).json(newCategory);
    } else {
      //if created value is falsy means, it found the record in the existing records
      res.json({
        message: `category ${req.body.category_name} already exists`,
      });
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  try {
    const updatedCategory = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
      individualHooks: true,
    });
    if (!updatedCategory[0]) {
      res.status(404).json({ message: "No category with this id is found!" });
      return;
    }
    res.status(200).json({
      message: "category name successfully updated",
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    const isDeleted = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (isDeleted) {
      res.status(200).json({
        message: "Category successfully deleted",
      });
    } else {
      res.status(404).json({
        message: "Category not found",
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
