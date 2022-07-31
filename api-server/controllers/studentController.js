const students = require("../models/students");

exports.getAllStudents = async (req, res) => {
  try {
    const getStudents = await students.find();
    res.status(200).json({
      status: "success",
      results: getStudents.length,
      data: {
        getStudents,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err,
    });
  }
};

exports.getStudentBYId = async (req, res) => {
  try {
    const findStudentById = await students.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        findStudentById,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err,
    });
  }
};

exports.createAdvanceStudent = async (req, res) => {
  try {
    const createdStudent = await students.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        student: createdStudent,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err,
    });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const updatedStudent = await students.FindByIdAndUpdate(
      req.body,
      req.params.id
    );
    res.status(200).json({
      status: "success",
      data: {
        updatedStudent: "[The Updated Student Here]",
        new: req.body,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err,
    });
  }
};

exports.updateStudent2 = async (req, res) => {
  try {
    const updatedStudent = await students.FindByIdAndUpdate(
      req.body,
      req.params.id
    );
    res.status(200).json({
      status: "success",
      data: {
        updatedStudent: "[The Updated Student Here]",
        new: req.body,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err,
    });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const deletedStudent = await students.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        deletedstudent: "[]",
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err,
    });
  }
};

exports.checkStudentID = (req, res, next, val) => {
  if (req.params.id * 1 > students.length) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }
  next();
};

exports.checkStudentEmail = (req, res, next, val) => {
  if (req.params.id * 1 > students.length) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }
  next();
};

exports.updateStudent2 = (req, res) => {
  //
};

exports.getStudentByIdEx2 = (req, res) => {
  // console.log(req.params);
  const varID = req.params.id * 1;
  const student = students.find((item) => item.id === varID);
  if (student !== undefined) {
    res.status(200).json({
      status: "success",
      data: {
        student,
      },
    });
  } else {
    res.status(404).json({
      status: "fail",
      message: "Record not found. Invalid ID!",
    });
  }
};
