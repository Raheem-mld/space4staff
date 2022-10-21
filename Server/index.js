const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
const multer = require('multer')
const path = require('path')
const app = express();
const cookieParser = require("cookie-parser");
const session = require("express-session");


/** connect to bd */

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "space4staff"
})

/** front host */

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(express.static("./public"));
app.use(express.json());

app.use(session({
    key: "userId",
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 1000 * 60 * 60 * 24,
    },
}));

/** check if session exist */

app.get("/login", (req, res) => {
    if (req.session.user) {
        res.send({
            loggedIn: true,
            picture: req.session.user[0].picture,
            firstname: req.session.user[0].firstname,
            lastname: req.session.user[0].lastname
        })
    } else {
        res.send({
            loggedIn: false
        })
    }
})

/** login script */

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const sqlSelect = "SELECT * FROM admin WHERE `username` = ? and `pass` = ?";
    db.query(sqlSelect, [username, password], (err, result) => {
        if (err) {
            res.send({
                err: err
            })
        } else {
            if (result.length == 0) {
                res.send({
                    message: "Authentication failed"
                })
            } else {
                req.session.user = result;
                res.send(result);
            }
        }
    });
});

/** fon login script */



/** logout sceript */

app.post("/logout", (req, res) => {
    req.session.destroy();
});

app.listen(3001, () => {
    console.log("running")
});

/** fin logout script */



/** select registration script */

app.get("/newReg", (req, res) => {
    const sqlSelect = "SELECT * FROM `etudiant` INNER JOIN `inscripton` ON `etudiant`.id_etudiant = `inscripton`.id_etudiant ORDER BY `etudiant`.`id_etudiant` DESC";
    db.query(sqlSelect, (err, result) => {
        if (err) {
            res.send({
                err: err
            })
        } else {
            if (result.length == 0) {
                res.send({
                    message: "No Rows"
                })
            } else {
                res.send(result);
            }
        }
    });
});

/** fin select registration script */

/** Add Student script */

app.post("/addstudent", (req, res) => {
    const firstname = req.body.fisrtname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const phone = req.body.phone;
    const adress = req.body.adress;
    const gender = req.body.gender;
    const datebirth = req.body.datebirth;
    const citybirth = req.body.citybirth;
    const nationality = req.body.nationality;
    const sclevel = req.body.sclevel;
    const group = req.body.group;
    const faculty = req.body.faculty;
    const scship = req.body.scship;
    const dateinsc = req.body.dateinsc;
    const image = req.body.image;
    const sqlSelect = "INSERT INTO `etudiant`(`id_etudiant`, `firstname`, `lastname`, `address`, `phone`, `email`, `gender`, `date_of_birth`, `place_of_birth`, `nationality`, `id_group`, `picture`) VALUES (NULL,?,?,?,?,?,?,?,?,?,?,?)";
    db.query(sqlSelect, [firstname, lastname, adress, phone, email, gender, datebirth, citybirth, nationality, group, image], (err, result) => {
        if (err) {
            res.send({
                err: err
            })
        } else {
            console.log(sqlSelect)
            const sqlselect2 = "INSERT INTO `inscripton`(`id_inscription`, `date_inscription`, `bourse`, `id_etudiant`, `id_niveau_scolaire`, `id_groupe`, `id_filiere`) VALUES (null,?,?,?,?,?,?)";
            db.query(sqlselect2, [dateinsc, scship, result.insertId, sclevel, group, faculty], (err2, result2) => {
                if (err2) {
                    res.send({
                        err2: err2
                    })
                } else {
                    res.send({
                        message: "Operation completed"
                    })
                }
            })

        }
    });
});

/** fin Add Student script */

/** Update Student script */

app.post("/updatestudent", (req, res) => {
    const id = req.body.id;
    const firstname = req.body.fisrtname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const phone = req.body.phone;
    const adress = req.body.adress;
    const gender = req.body.gender;
    const datebirth = req.body.datebirth;
    const citybirth = req.body.citybirth;
    const nationality = req.body.nationality;
    const sclevel = req.body.sclevel;
    const group = req.body.group;
    const faculty = req.body.faculty;
    const scship = req.body.scship;
    const dateinsc = req.body.dateinsc;
    const image = req.body.image;
    const sqlSelect = "UPDATE `etudiant` SET `firstname`=?,`lastname`=?,`address`=?,`phone`=?,`email`=?,`gender`=?,`date_of_birth`=?,`place_of_birth`=?,`nationality`=?,`id_group`=?,`picture`=? WHERE `etudiant`.id_etudiant = ? ";
    db.query(sqlSelect, [firstname, lastname, adress, phone, email, gender, datebirth, citybirth, nationality, group, image, id], (err, result) => {
        if (err) {
            res.send({
                err: err
            })
        } else {
            const sqlselect2 = "UPDATE `inscripton` SET `date_inscription`= ?,`bourse`= ?,`id_niveau_scolaire`= ?,`id_groupe`= ?,`id_filiere`= ? WHERE `inscripton`.id_etudiant = ?";
            db.query(sqlselect2, [dateinsc, scship, sclevel, group, faculty, id], (err2, result2) => {
                if (err2) {
                    res.send({
                        err2: err2
                    })
                } else {
                    res.send({
                        message: "Operation completed"
                    })
                }
            })

        }
    });
});

/** fin Update Student script */

/** Upload image script */

//! Use of Multer
var storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './public/images/')     // './public/images/' directory name where save the file
    },
    filename: (req, file, callBack) => {
        callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

var upload = multer({
    storage: storage
});

app.post("/upload", upload.single('file'), (req, res) => {
    if (!req.file) {
        console.log("No file upload");
    } else {
        console.log(req.file.filename)
        var imgsrc = 'http://localhost:3001/public/images/' + req.file.filename
        var insertData = "INSERT INTO etudiant(picture)VALUES(?)"
        res.send({
            path: 'http://localhost:3001/public/images/' + req.file.filename
        })
    }
});

/** Fin upload image script */



/** script delete students */
app.post("/deleteStudents", (req, res) => {
    const students = req.body.students;
    for (let index = 0; index < students.length; index++) {
        const sqlSelect = "DELETE FROM `etudiant` WHERE `id_etudiant` = ?";
        db.query(sqlSelect, [students[index].id_etudiant], (err, result) => {
            if (err) {
                res.send({
                    err: err
                })
            } else {
                const sqlSelect2 = "DELETE FROM `inscripton` WHERE `inscription`.`id_etudiant` = ?";
                db.query(sqlSelect2, [students[index].id_etudiant], (err, result) => {
                    res.send({
                        message: "Operation completed"
                    })
                })
            }
        })
    }
})


app.post("/deleteStudent", (req, res) => {
    const student = req.body.student;
    const sqlSelect = "DELETE FROM `etudiant` WHERE `id_etudiant` = ?";
    db.query(sqlSelect, student, (err, result) => {
        if (err) {
            res.send({
                err: err
            })
        } else {
            res.send({
                message: "Operation completed"
            })
        }
    })
})
/** fin script delete students */

/**Script liste Teachers */
app.get("/teachers", (req, res) => {
    const sqlSelect = "SELECT * FROM `formateur` ORDER BY `id_formateur` ASC";
    db.query(sqlSelect, (err, result) => {
        if (err) {
            res.send({
                err: err
            })
        } else {
            if (result.length == 0) {
                res.send({
                    message: "No Rows"
                })
            } else {
                res.send(result);
            }
        }
    });
});

/**fin script teachers */


/**Script add Teachers */

app.post("/addteacher", (req, res) => {
    const firstname = req.body.fisrtname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const phone = req.body.phone;
    const adress = req.body.adress;
    const image = req.body.image;
    const sqlSelect = "INSERT INTO `formateur`(`firstname`, `lastname`, `address`, `phone`, `email`, `picture`) VALUES (?,?,?,?,?,?)";
    db.query(sqlSelect, [firstname, lastname, adress, phone, email, image], (err, result) => {
        if (err) {
            res.send({
                err: err
            })
        } else {
            res.send({
                message: "Operation completed"
            })
        }
    });
});

/**fin add teachers */

/** script delete teachers */

app.post("/deleteTeachers", (req, res) => {
    const teachers = req.body.teachers;
    for (let index = 0; index < teachers.length; index++) {
        const sqlSelect = "DELETE FROM `formateur` WHERE `id_formateur` = ?";
        db.query(sqlSelect, [teachers[index].id_formateur], (err, result) => {
            if (err) {
                res.send({
                    err: err
                })
            } else {
                res.send({
                    message: "Operation completed"
                })
            }
        })
    }
})

/** fin script delete teachers */

/**Script liste SchoolLevel */
app.get("/SchoolLevel", (req, res) => {
    const sqlSelect = "SELECT * FROM `niveau_scolaire` ORDER BY `level_name` ASC";
    db.query(sqlSelect, (err, result) => {
        if (err) {
            res.send({
                err: err
            })
        } else {
            if (result.length == 0) {
                res.send({
                    message: "No Rows"
                })
            } else {
                res.send(result);
            }
        }
    });
});

/**fin Script liste SchoolLevel */

app.use('/public/images', express.static(process.cwd() + '/public/images'))