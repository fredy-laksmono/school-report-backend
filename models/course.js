"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Course.belongsToMany(models.Student, {
        as: "studentCourse",
        through: models.StudentsCoursesGrades,
        foreignKey: "courseId"
      });
      Course.belongsToMany(models.Grade, {
        as: "courseGrades",
        through: models.StudentsCoursesGrades,
        foreignKey: "courseId"
      });
    }
  }
  Course.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "Course",
      tableName: "courses"
    }
  );
  return Course;
};
