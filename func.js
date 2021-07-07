const { Console } = require('console')
const fs=require('fs')


//Add Function
const addStudent=(id,name,mark,grade)=>{
    const students=loadStudents()

    const duplicateId=students.filter((student)=>
    {
       return student.id===id
    })

    if(duplicateId.length===0)
    {
       students.push({
           id,
           name,
           mark,
           grade
       })
       savedStudent(students)
       console.log('Add Success ')
    }
    else{
        console.log('Error : Student ID Already Exists')
    }

}

//Delete Function
const deleteStudent=(id)=>{
    const students=loadStudents() 
    const studentsNeeded =students.filter((student)=>{
         return student.id!==id
    })
    console.log('Delete Success And There is The Other Students : ')
    for(i=0;i<studentsNeeded.length;i++)
    {
    console.log('ID : ',studentsNeeded[i].id,' , '+ ' Name: ',studentsNeeded[i].name )  
    }
    savedStudent(studentsNeeded)

}

//Read Function
const searchStudentInfo=(id)=>{
    const students=loadStudents() 
    const student=students.find((stID)=>{
        return stID.id === id
    })
    if(student)
    {        
        console.log('Student Name is : ',student.name)
        console.log('Student Degree is : ',student.mark)
        console.log('Student Grade is : ',student.grade)
    }
    else 
    {
    console.log('Error : Student Not Found Please Check That You Put The Right Student ID ')
    }

}

//List Function
const searchAll=()=>{
    const students=loadStudents()
    students.forEach(student => {
        console.log('Name :',student.name, ' , '+'Grade :',student.grade)       
    });

    // for(i=0;i<students.length;i++)
    // {
    //     console.log('Name :',students[i].name, ' , '+'Grade :',students[i].grade)
    // }
}



//Load Students Infos
const loadStudents=()=>{
    try{
    const bufferData= fs.readFileSync('student.json').toString()
    return JSON.parse(bufferData)
    }
    catch(e)
    {
       return []
    }
    
}

// Write Students info
const savedStudent=(students)=>{
    const saveData= JSON.stringify(students)
    fs.writeFileSync('student.json',saveData)
}

module.exports={
    addStudent,
    deleteStudent,
    searchStudentInfo,
    searchAll
}