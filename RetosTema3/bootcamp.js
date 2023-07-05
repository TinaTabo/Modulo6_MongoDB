//-- Schema mongoose de Credentials
const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema({
    teacher_first_name: String,
    teacher_last_name: String
});

const MarksSchema = new mongoose.Schema({
    date: Date,
    mark: Number,
    student_first_name: String,
    student_last_name: String,
    group_name: String,
    subject_name: String,
    teachers: [TeacherSchema]
});

//-- Conexión a la base de datos
mongoose.connect('mongodb+srv://cris_taboada:MySecur3Mongo@codenotch.i0gbn5t.mongodb.net/bootcamp',
                {useNewUrlParser: false, useUnifiedTopology: false});


let Teachers = mongoose.model('Teachers', TeacherSchema);
let Marks = mongoose.model('Marks', MarksSchema);

//-- Rellenar la base de datos usando mongoose
//-- Teachers
const teacher1 = {
    teacher_first_name: "John",
    teacher_last_name: "Doe"
};

const teacher2 = {
    teacher_first_name: "Alice",
    teacher_last_name: "Smith"
};

const teacher3 = {
    teacher_first_name: "Michael",
    teacher_last_name: "Johnson"
};

const teacher4 = {
    teacher_first_name: "Emily",
    teacher_last_name: "Davis"
};

const teacher5 = {
    teacher_first_name: "Daniel",
    teacher_last_name: "Wilson"
};

// Teachers.insertMany([teacher1,teacher2,teacher3,teacher4,teacher5])
//     .then((data) => {
//         console.log(`Se han añadido ${data.length} teachers.`);
//         console.log(data);
//         // mongoose.disconnect();
//     })
//     .catch((err) => {
//         console.log("Error: " + err);
//     });


//-- Marks
const mark1 = {
    date: "2023-01-01",
    mark: 8,
    student_first_name: "Juan",
    student_last_name: "Pérez",
    group_name: "mañana",
    subject_name: "Matemáticas",
    teachers: [teacher1, teacher2]
};

const mark2 = {
    date: "2023-02-15",
    mark: 7,
    student_first_name: "María",
    student_last_name: "Gómez",
    group_name: "tarde",
    subject_name: "Historia",
    teachers: [teacher3, teacher4]
};

const mark3 = {
    date: "2023-03-10",
    mark: 9,
    student_first_name: "Luis",
    student_last_name: "Rodríguez",
    group_name: "mañana",
    subject_name: "Matemáticas",
    teachers: [teacher5, teacher1]
};

const mark4 = {
    date: "2023-04-22",
    mark: 6,
    student_first_name: "Ana",
    student_last_name: "López",
    group_name: "tarde",
    subject_name: "Matemáticas",
    teachers: [teacher2, teacher3]
};

const mark5 = {
    date: "2023-05-05",
    mark: 8,
    student_first_name: "Pedro",
    student_last_name: "Sánchez",
    group_name: "mañana",
    subject_name: "Geografía",
    teachers: [teacher4, teacher5]
};

const mark6 = {
    date: "2023-06-12",
    mark: 7,
    student_first_name: "Laura",
    student_last_name: "Hernández",
    group_name: "tarde",
    subject_name: "Arte",
    teachers: [teacher1, teacher2]
};

const mark7 = {
    date: "2023-07-18",
    mark: 9,
    student_first_name: "Carlos",
    student_last_name: "Martínez",
    group_name: "mañana",
    subject_name: "Física",
    teachers: [teacher3, teacher4]
};

const mark8 = {
    date: "2023-08-03",
    mark: 6,
    student_first_name: "Sofía",
    student_last_name: "García",
    group_name: "tarde",
    subject_name: "Física",
    teachers: [teacher5, teacher1]
};

const mark9 = {
    date: "2023-09-09",
    mark: 8,
    student_first_name: "Javier",
    student_last_name: "Fernández",
    group_name: "mañana",
    subject_name: "Inglés",
    teachers: [teacher2, teacher3]
};

const mark10 = {
    date: "2023-10-27",
    mark: 7,
    student_first_name: "Isabella",
    student_last_name: "Navarro",
    group_name: "tarde",
    subject_name: "Física",
    teachers: [teacher4, teacher5]
};

// Marks.insertMany([mark1,mark2,mark3,mark4,mark5,mark6,mark7,mark8,mark9,mark10])
//     .then((data) => {
//         console.log(`Se han añadido ${data.length} marks.`);
//         console.log(data);
//         // mongoose.disconnect();
//     })
//     .catch((err) => {
//         console.log("Error: " + err);
//     });


//-- Agregaciones --
//-- Nota media de los alumnos de una asignatura concreta.
Marks.aggregate([{$match: {subject_name: "Matemáticas"}},
                {$group: {_id: null, notaMedia: {$avg: "$mark"}}}])
                .then((data) => {
                    console.log(`Nota media = ${data[0].notaMedia}`);
                    // mongoose.disconnect();
                })
                .catch((err) => {
                    console.log("Error: " + err);
                });

//-- calcular el numero total de alumnos (tambien los repes)
Marks.aggregate([{$group: {_id: null, totalAlumnos: {$sum: 1}}}])
                .then((data) => {
                    console.log(`Número total de Alumnos (incl.repes) = ${data[0].totalAlumnos}`);
                    // mongoose.disconnect();
                })
                .catch((err) => {
                    console.log("Error: " + err);
                });

//-- Listar nombre y apellidos de todos los alumnos (incl.repes)
Marks.aggregate([{$project: {_id: 0, student_first_name: 1, student_last_name: 1}}])
                .then((data) => {
                    console.log(data);
                    // mongoose.disconnect();
                })
                .catch((err) => {
                    console.log("Error: " + err);
                });

//-- Listar nombre y apellidos de todos los profesores (incl.repes)
Marks.aggregate([{$project: {_id: 0, teachers: 1}}])
                .then((data) => {
                    console.log('[');
                    data.forEach((teachers) => {
                        teachers.teachers.forEach((teacher)=>{
                            console.log(`  { teacher_first_name: '${teacher.teacher_first_name}', teacher_last_name: '${teacher.teacher_last_name}'}`);
                        })
                    })
                    console.log(']');
                    // mongoose.disconnect();
                })
                .catch((err) => {
                    console.log("Error: " + err);
                });

//-- Mostrar el número total de alumnos por grupo ordenados por grupo en orden inverso al alfabeto.
Marks.aggregate([{$group: {_id: "$group_name", totalAlumnos: {$sum: 1}}},
                {$sort: {_id: -1}}])
                .then((data) => {
                    console.log(data);
                    // mongoose.disconnect();
                })
                .catch((err) => {
                    console.log("Error: " + err);
                });

//-- TOP 5 de las asignaturas con nota media > 5
Marks.aggregate([{$group: {_id: "$subject_name", notaMedia: {$avg: "$mark"}}},
                {$match: {notaMedia: {$gt: 5}}},
                {$sort: {notaMedia: -1}},
                {$limit: 5}])
                .then((data) => {
                    console.log(data);
                    // mongoose.disconnect();
                })
                .catch((err) => {
                    console.log("Error: " + err);
                });

//-- Número de profesores que hay por asignatura (incl.repes)
Marks.aggregate([{$unwind: "$teachers"},
                {$group: {_id: "$subject_name", totalProfes: {$sum: 1}}}])
                .then((data) => {
                    console.log(data);
                    // mongoose.disconnect();
                })
                .catch((err) => {
                    console.log("Error: " + err);
                });