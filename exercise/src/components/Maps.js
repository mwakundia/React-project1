





// let students =  ['John' , 'Mary', 'Samuel', 'Susan'];
let students = [
    {id: 1, name: "John", course: "Full-Stack"},
    {id: 2, name: "Mary", course: "Cyber Security"},
    {id: 3, name: "Samuel", course: "Database"},
    {id: 4, name: "Susan", course: "Full-Stack"},
    {id: 5, name: "Susan", course: "Full-Stack"},
];
    let studentList = students.map((student) => (
        <h1 key={student.id}>{student.name}, {student.course}</h1>
        ))
    return(
        <div>
            {studentList}
        </div>
    )
  