const pool = require("../db");

// Post Attendence
const enterMarks = async (marks) => {
    console.log(marks);
  try {
   
    for (let i = 0; i < marks.length; i++) {
      console.log(marks[i]);
      let myQuery = `INSERT INTO marks (rollno,classid,subjectid,marks,studentid,studentname) VALUES(${marks[i].rollno},'${marks[i].classid}','${marks[i].subjectid}',${marks[i].marks},'${marks[i].studentid}','${marks[i].studentname}') `;
      pool.query(myQuery);
      
    }
  } catch (err) {
    console.log(err);
  }
};

const getMarks = async()=>{
  try{
    const allMarks = await pool.query("SELECT * FROM marks");
   let result = allMarks.rows
      return result
  }
  catch(err){
      console.log(err)
  }
}


//class  subject marks
const getClassSubMarks= async(id,sub)=>{
  try{
    console.log(sub)
    console.log(id)
    const classMarks = await pool.query(`SELECT * FROM marks where classid='${id}'  AND subjectid='${sub}' `);
   let marksresult = classMarks.rows
      return marksresult
      
  }
  catch(err){
      console.log(err)
  }
}

const updateMarks = async(marks)=>{
  try{
    console.log(marks)
    for (let i = 0; i < marks.length; i++) {
    console.log(`UPDATE marks SET rollno=${marks[i].rollno},classid='${marks[i].classid}',subjectid='${marks[i].subjectid}',marks='${marks[i].marks}',studentid='${marks[i].studentid}',studentname='${marks[i].studentname}' where id=${marks[i].id}`)
   
    await pool.query(`UPDATE marks SET rollno=${marks[i].rollno},classid='${marks[i].classid}',subjectid='${marks[i].subjectid}',marks='${marks[i].marks}',studentid='${marks[i].studentid}',studentname='${marks[i].studentname}' where id=${marks[i].id}`)
    }
   }
   catch(err){
       console.log(err)
   }
}
module.exports = {
    enterMarks,
    getMarks,
    updateMarks,
    getClassSubMarks
};