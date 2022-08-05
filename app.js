import { useState } from "react";
import "./styles.css";

const data = [
  {
    studentName: "john",
    subjects: ["maths", "physics"],
    marks: [40,50]
  },
  {
    studentName: "jean",
    subjects: ["chemistry", "physics"],
    marks: [60,50]
  },
];

export default function App() {
  const [studentName, setStudentName] = useState();
  const [subjectName, setSubjectName] = useState();
  const studentChangeHandler = (event) => {
    setStudentName(event.target.value);
  }
  const subjectChangeHandler = (event) => {
    setSubjectName(event.target.value);
  }
  return (
    <div className="App">
      <select onChange={studentChangeHandler}>
        {data.map(ele => <option>{ele.studentName}</option>)}
      </select>
    {studentName && 
    <select onChange={subjectChangeHandler}>
      {data.map(ele => {
        if(ele.studentName === studentName)
          return ele.subjects.map((ele) => <option>{ele}</option>);
      })
      }    
    </select>
    }
    {subjectName && 
    <select>
    {data.map(ele => {
      if(ele.studentName === studentName)
        return ele.marks.map((ele) => <option>{ele}</option>);
    })
    }    
  </select>
    }
    </div>
  );
}
