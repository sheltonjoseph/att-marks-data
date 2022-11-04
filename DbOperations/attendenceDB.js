const pool = require("../db");

// Post Attendence
const postAttendance = async (att) => {
  console.log(att);
  try {
    for (let i = 0; i < att.length; i++) {
      console.log(att[i]);
      let myQuery = `INSERT INTO attendence (studentname,studentid,rollno,classid,subjectid,staffid,attstatus ) VALUES('${att[i].studentname}','${att[i].studentid}',${att[i].rollno},'${att[i].classid}','${att[i].subjectid}','${att[i].staffid}',${att[i].attstatus}) RETURNING *`;
      pool.query(myQuery);
    }
  } catch (err) {
    console.log(err);
  }
};

const getAttendance = async () => {
  try {
    const allAttendence = await pool.query("SELECT * FROM attendence");
    let attresult = allAttendence.rows;
    return attresult;
  } catch (err) {
    console.log(err);
  }
};
//class attendence
const getClassAttendance = async (id) => {
  try {
    const classAttendence = await pool.query(
      `SELECT * FROM attendence where classid='${id}'`
    );
    let attresult = classAttendence.rows;
    return attresult;
  } catch (err) {
    console.log(err);
  }
};

//class ans subject attendence
const getClassSubAttendance = async (id, sub) => {
  try {
    console.log(sub);
    const classAttendence = await pool.query(
      `SELECT * FROM attendence where classid='${id}'  AND subjectid='${sub}' `
    );
    let attresult = classAttendence.rows;
    return attresult;
  } catch (err) {
    console.log(err);
  }
};

const checkAttendance = async (id, sub, date) => {
  try {
    const classAttendence = await pool.query(
      `SELECT * FROM attendence where classid='${id}'  AND subjectid='${sub}' AND date='${date}'`
    );
    let attresult = classAttendence.rows;
    return attresult;
  } catch (err) {
    console.log(err);
  }
};

const getClassDateAtt = async (id, date) => {
  try {
    const classDateAttendence = await pool.query(
      `SELECT * FROM attendence where classid='${id}' AND date='${date}'`
    );

    let attresult = classDateAttendence.rows;
    return attresult;
  } catch (err) {
    console.log(err);
  }
};

const updateAttendance = async (att) => {
  try {
    console.log(att);
    for (let i = 0; i < att.length; i++) {
      await pool.query(
        `UPDATE attendence SET attstatus='${att[i].attstatus}'  where attid=${att[i].attid}`
      );
    }
  } catch (err) {
    console.log(err);
  }
};
module.exports = {
  postAttendance,
  getAttendance,
  updateAttendance,
  getClassAttendance,
  getClassSubAttendance,
  getClassDateAtt,
  checkAttendance,
};
