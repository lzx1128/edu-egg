// app/model/students.js
'use strict';
module.exports = app => {
  const { INTEGER, STRING, TEXT, DATE } = app.Sequelize;

  const Students = app.model.define('students', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    userId: INTEGER,
    tsGrade: STRING,
    tsSubject: STRING,
    exLocation: STRING,
    phoneNumber: STRING,
    description: TEXT,
    course: STRING,
    tsMethod: STRING,
    status: STRING,
    Location: STRING,
    createdAt: DATE,
    // 其他字段...
  });

  return Students;
};
