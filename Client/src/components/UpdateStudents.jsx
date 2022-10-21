import React, { useState, useRef } from 'react'
import Axios from 'axios';
import '../styles/AddStudentPage.css'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function UpdateStudents({ IdStudent }) {

    const location = useLocation();

    const event1 = new Date(location.Student.date_of_birth);
    const event2 = new Date(location.Student.date_inscription);
    const options = { dateStyle: 'short' };
    const date = event1.toLocaleString('en-CA', options);
    const date2 = event2.toLocaleString('en-CA', options);

    const [faculty, setFaculty] = useState(location.Student.id_filiere);
    const [gender, setGender] = useState(location.Student.gender);
    const [group, setGroup] = useState(location.Student.id_groupe);
    const [Schoollevel, setLevel] = useState(location.Student.id_niveau_scolaire);
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState();
    const [open, setOpen] = React.useState(false);
    const [imageStudent, setimageStudent] = useState(location.Student.picture);

    const [verfFirstme, setverfFirstme] = useState(false)
    const [verfLastname, setverfLastname] = useState(false)
    const [verfEmail, setverfEmail] = useState(false)
    const [verfPhone, setverfPhone] = useState(false)
    const [verfAdress, setverfAdress] = useState(false)
    const [verfGender, setverfGender] = useState(false)
    const [verfFaculty, setverfFaculty] = useState(false)
    const [verfCity, setverfCity] = useState(false)
    const [verfNat, setverfNat] = useState(false)
    const [verfSch, setverfSch] = useState(false)
    const [verfGroup, setverfGroup] = useState(false)
    const [verfSship, setverfSship] = useState(false)
    const [verfDatebirth, setverfDatebirth] = useState(false)
    const [verfDateinsc, setverfDateinsc] = useState(false)

    const verifFirstname = () => {
        const reg = new RegExp(/^[a-zA-Z]*$/);
        if (reg.test(firstnameRef.current.value) === false) {
            setverfFirstme(true)
        } else {
            setverfFirstme(false)
        }
    }

    const verifLastname = () => {
        const reg = new RegExp(/^[a-zA-Z]*$/);
        if (reg.test(lastnameRef.current.value) === false) {
            setverfLastname(true)
        } else {
            setverfLastname(false)
        }
    }

    const verifEmail = () => {
        const reg = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (reg.test(emailRef.current.value) === false) {
            setverfEmail(true)
        } else {
            setverfEmail(false)
        }
    }

    const verifPhone = () => {
        const reg = new RegExp(/^[0-9]*$/);
        if (reg.test(phoneRef.current.value) === false) {
            setverfPhone(true)
        } else {
            setverfPhone(false)
        }
    }

    const verifCity = () => {
        const reg = new RegExp(/^[a-zA-Z]*$/);
        if (reg.test(citybirthRef.current.value) === false) {
            setverfCity(true)
        } else {
            setverfCity(false)
        }
    }

    const verifNat = () => {
        const reg = new RegExp(/^[a-zA-Z]*$/);
        if (reg.test(nationalityRef.current.value) === false) {
            setverfNat(true)
        } else {
            setverfNat(false)
        }
    }

    const verifSship = () => {
        const reg = new RegExp(/^[0-9]*$/);
        if (reg.test(scshipRef.current.value) === false) {
            setverfSship(true)
        } else {
            setverfSship(false)
        }
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function saveFile(event) {
        setFile(event.target.files[0]);
        setFileName(event.target.files[0].name);
    }

    const uploadFile = async (e) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", fileName);
        try {
            const res = await Axios.post(
                "http://localhost:3001/upload",
                formData
            );
            console.log(res);
            setimageStudent(res.data.path)
        } catch (ex) {
            console.log(ex);
        }
    };

    const handleChangeGender = (event) => {
        setverfGender(false);
        setGender(event.target.value);
    };

    const handleChangeGroup = (event) => {
        setverfGroup(false)
        setGroup(event.target.value);
    };

    const handleChangeLevel = (event) => {
        setverfSch(false)
        setLevel(event.target.value);
    };

    const handleChangeFaculty = (event) => {
        setverfFaculty(false)
        setFaculty(event.target.value);
    };

    const Input = styled('input')({
        display: 'none',
    });

    const firstnameRef = useRef();
    const lastnameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const adressRef = useRef();
    const datebirthRef = useRef();
    const citybirthRef = useRef();
    const nationalityRef = useRef();
    const scshipRef = useRef();
    const dateinscRef = useRef();
    let history = useHistory();

    function validate() {
        if (firstnameRef.current.value !== '' && !verfFirstme && lastnameRef.current.value !== '' && !verfLastname && emailRef.current.value !== '' && !verfEmail && phoneRef.current.value !== '' && !verfPhone && adressRef.current.value !== '' && gender !== '' && faculty !== '' && datebirthRef.current.value !== '' && citybirthRef.current.value !== '' && !verfCity && nationalityRef.current.value !== '' && !verfNat && Schoollevel !== '' && scshipRef.current.value !== '' && !verfSship && dateinscRef.current.value !== '') {
            Axios.post("http://localhost:3001/updatestudent", { id: location.Student.id_etudiant, fisrtname: firstnameRef.current.value, lastname: lastnameRef.current.value, email: emailRef.current.value, phone: phoneRef.current.value, adress: adressRef.current.value, gender: gender, datebirth: datebirthRef.current.value, citybirth: citybirthRef.current.value, nationality: nationalityRef.current.value, sclevel: Schoollevel, group: group, faculty: faculty, scship: scshipRef.current.value, dateinsc: dateinscRef.current.value, image: imageStudent }).then((response) => {
                if (response.data.message === "Operation completed") {
                    /** redirect to students list */
                    console.log('Operation Completed')
                    history.push({
                        pathname: '/home/students',
                    });
                }
            });
        } else {
            if (firstnameRef.current.value === '') {
                setverfFirstme(true)
            }
            if (lastnameRef.current.value === '') {
                setverfLastname(true)
            }
            if (emailRef.current.value === '') {
                setverfEmail(true)
            }
            if (phoneRef.current.value === '') {
                setverfPhone(true)
            } if (datebirthRef.current.value === '') {
                setverfDatebirth(true)
            }
            if (citybirthRef.current.value === '') {
                setverfCity(true)
            }
            if (nationalityRef.current.value === '') {
                setverfNat(true)
            }
            if (scshipRef.current.value === '') {
                setverfSch(true)
            }
            if (gender === '') {
                setverfGender(true)
            }
            if (faculty === '') {
                setverfFaculty(true)
            }
            if (adressRef.current.value === '') {
                setverfAdress(true)
            }
            if (Schoollevel === '') {
                setverfSship(true)
            }
            if (group === '') {
                setverfGroup(true)
            }
            if (dateinscRef.current.value === '') {
                setverfDateinsc(true)
            }
        }
    }

    return (
        <section className="add-student">
            <div className="container">
                <div className="container-info">
                    <div className="divider"></div>
                    <div className="title">
                        Update Student
                    </div>
                    <div className="text">
                        Lorem ipsum dolor
                    </div>
                </div>
                <div className="container-body">
                    <div className="left-side">
                        <div className="img-container" style={{ backgroundImage: 'url(' + imageStudent + ')' }}></div>
                        <label htmlFor="contained-button-file">
                            <Input accept="image/*" multiple id="contained-button-file" type="file" onChange={saveFile} />
                            <Button disableElevation variant="contained" component="span" onClick={uploadFile}>
                                Upload image
                            </Button>
                        </label>
                    </div>
                    <div className="right-side">
                        <div className="inputs-container">
                            <TextField
                                inputRef={firstnameRef}
                                required
                                error={verfFirstme}
                                onChange={verifFirstname}
                                label="First Name"
                                size="small"
                                sx={{ width: '100%' }}
                                defaultValue={location.Student.firstname}
                            />
                            <TextField
                                inputRef={lastnameRef}
                                required
                                error={verfLastname}
                                onChange={verifLastname}
                                label="Last Name"
                                size="small"
                                sx={{ width: '100%' }}
                                defaultValue={location.Student.lastname}
                            />
                            <TextField
                                inputRef={emailRef}
                                required
                                error={verfEmail}
                                onBlur={verifEmail}
                                label="Email"
                                size="small"
                                sx={{ width: '100%' }}
                                defaultValue={location.Student.email}
                            />
                            <TextField
                                inputRef={phoneRef}
                                required
                                error={verfPhone}
                                onChange={verifPhone}
                                label="Phone"
                                size="small"
                                sx={{ width: '100%' }}
                                defaultValue={location.Student.phone}
                            />
                            <TextField
                                inputRef={adressRef}
                                required
                                error={verfAdress}
                                onChange={() => setverfAdress(false)}
                                label="Adress"
                                size="small"
                                sx={{ width: '100%' }}
                                defaultValue={location.Student.address}
                            />
                            <FormControl fullWidth>
                                <InputLabel size="small" id="demo-simple-select-label">Gender</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={gender}
                                    label="Age"
                                    size="small"
                                    error={verfGender}
                                    onChange={handleChangeGender}
                                >
                                    <MenuItem value={"Male"}>Male</MenuItem>
                                    <MenuItem value={"Female"}>Female</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField
                                inputRef={datebirthRef}
                                id="date"
                                error={verfDatebirth}
                                onChange={() => setverfDatebirth(false)}
                                label="Date of birth"
                                type="date"
                                size="small"
                                sx={{ width: "100%" }}
                                defaultValue={date}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                inputRef={citybirthRef}
                                required
                                error={verfCity}
                                onChange={verifCity}
                                label="City Of birth"
                                size="small"
                                sx={{ width: '100%' }}
                                defaultValue={location.Student.place_of_birth}
                            />
                            <TextField
                                inputRef={nationalityRef}
                                required
                                error={verfNat}
                                onChange={verifNat}
                                label="Nationality"
                                size="small"
                                sx={{ width: '100%' }}
                                defaultValue={location.Student.nationality}
                            />
                            <FormControl fullWidth>
                                <InputLabel size="small" id="demo-simple-select-label">School Level</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={Schoollevel}
                                    label="School Level"
                                    size="small"
                                    error={verfSch}
                                    onChange={handleChangeLevel}
                                >
                                    <MenuItem value={1}>1St Year</MenuItem>
                                    <MenuItem value={2}>2Nd Year</MenuItem>
                                    <MenuItem value={3}>3Rd Year</MenuItem>
                                    <MenuItem value={4}>4Th Year</MenuItem>
                                    <MenuItem value={5}>5Th Year</MenuItem>

                                </Select>
                            </FormControl>
                            <FormControl fullWidth>
                                <InputLabel size="small" id="demo-simple-select-label">Group</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={group}
                                    label="Group"
                                    size="small"
                                    error={verfGroup}
                                    onChange={handleChangeGroup}
                                >
                                    <MenuItem value={1}>Group 1</MenuItem>
                                    <MenuItem value={2}>Group 2</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl fullWidth>
                                <InputLabel size="small" id="demo-simple-select-label">Faculty</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={faculty}
                                    label="Age"
                                    size="small"
                                    error={verfFaculty}
                                    onChange={handleChangeFaculty}
                                >
                                    <MenuItem value={1}>ISI3</MenuItem>
                                    <MenuItem value={2}>MGE</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField
                                inputRef={scshipRef}
                                required
                                error={verfSship}
                                onChange={verifSship}
                                label="Scholarship"
                                size="small"
                                sx={{ width: '100%' }}
                                defaultValue={location.Student.bourse}
                            />
                            <TextField
                                inputRef={dateinscRef}
                                id="date"
                                label="Date registration"
                                error={verfDateinsc}
                                onChange={() => setverfDateinsc(false)}
                                type="date"
                                size="small"
                                sx={{ width: "100%" }}
                                defaultValue={date2}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />

                        </div>
                        <div className="btns-container">
                            <Button onClick={() => { validate() }} disableElevation variant="contained">Update</Button>
                            <Button disableElevation variant="outlined" onClick={handleClickOpen}>Cancel</Button>
                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">
                                    {"Please confirm !"}
                                </DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        Are you sure you want to continue ?
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose}>Cancel</Button>
                                    <Link to="/home/students">
                                        <Button onClick={handleClose} autoFocus>
                                            Confirm
                                        </Button>
                                    </Link>
                                </DialogActions>
                            </Dialog>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UpdateStudents
