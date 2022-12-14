const Router = require("express").Router();
const controller = require("../controllers/StudentsCoursesGradesController");

Router.get("/", controller.GetAllRelations);
Router.get("/:student_id", controller.GetStudentRelations);
Router.post("/", controller.CreateRelations);

module.exports = Router;
