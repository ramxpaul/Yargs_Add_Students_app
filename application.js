const yargs=require('yargs')
const students=require('./func')


yargs.command({
    command:'add',
    describe:'This command To Add Students Information',
    builder:{
        id:{
            describe:'Id To Add The Identity of The Student',
            demandOption:true,
            type:'string'
        },
        name:{
            describe:'Using To Add Student Name',
            demandOption:true,
            type:'string'
        },
        mark:{
            describe:'Using To Add Student Mark',
            demandOption:true,
            type:'number'
        },
        grade:{
            describe:'Its a Comment To Desc Student status ',
            type:'string'
        }
    },
    handler:(argv)=>{
        students.addStudent(argv.id,argv.name,argv.mark,argv.grade)
    }
})

//Delete Student 

yargs.command({
    command:'delete',
    describe:'This Command To Delete student Information ',
    builder:{
        id:{
            describe:'ID uses To Delete Student Info',
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv)=>{
        students.deleteStudent(argv.id)
    }
})


//Read Student by id
yargs.command({
    command:'read',
    describe:'This Command To Search For Student`s information by id',
    builder:{
        id:{
            describe:'Id uses to search for Student`s Information',
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv)=>{
        students.searchStudentInfo(argv.id)
    }
})

//Listing All Students 
yargs.command({
    command:'list',
    describe:'This Command To Get All Students',
    handler:(argv)=>{
        students.searchAll(argv)
    }
})

yargs.parse()
