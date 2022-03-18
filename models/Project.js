const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Project extends Model {}

Project.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    project_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    project_description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    technologies_used: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    screenshot_filename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    project_focus: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    github_repo: {
      type: DataTypes.STRING,
    },
    deployed_link: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "project",
    timestamps: false,
  }
);

module.exports = Project;
