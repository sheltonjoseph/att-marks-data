CREATE DATABASE classdata;

CREATE TABLE attendence(
     studentName VARCHAR(255),
     studentId integer NOT NULL,
     rollNo integer NOT NULL,
     classId integer NOT NULL,
     subjectId integer NOT NULL,
     staffId integer NOT NULL,
     Date  timestamp NOT NULL DEFAULT NOW(),
     attStatus  BOOLEAN NOT NULL DEFAULT FALSE
);



CREATE TABLE marks (
     id BIGSERIAL PRIMARY KEY,
     rollNo integer NOT NULL,
     classId varchar(500),
     subjectId varchar(500),
     marks integer NOT NULL
);




