const { Model, DataTypes } = require("sequelize");
const capitalize = require("../utils/capitalize");
const sequelize = require("../config/connection.js");

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    hooks: {
      beforeCreate: async (newCategory) => {
        //before creating the category , we capitalized the category name for consistency
        newCategory.category_name = await capitalize(newCategory.category_name);
        return newCategory;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

module.exports = Category;
