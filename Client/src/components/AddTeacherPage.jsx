import React, { useState, useRef } from 'react'
import Axios from 'axios';
import '../styles/AddTeacherPage.css'
import { Link, useHistory } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function AddTeacherPage() {

    const firstnameRef = useRef();
    const lastnameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const adressRef = useRef();

    const [verfFirstme, setverfFirstme] = useState(false)
    const [verfLastname, setverfLastname] = useState(false)
    const [verfEmail, setverfEmail] = useState(false)
    const [verfPhone, setverfPhone] = useState(false)
    const [verfAdress, setverfAdress] = useState(false)
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState();

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

    const [imageProf, setimageProf] = useState('http://localhost:3001/public/images/default-avatar.png');

    const [open, setOpen] = React.useState(false);

    const Input = styled('input')({
        display: 'none',
    });

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
            setimageProf(res.data.path)
        } catch (ex) {
            console.log(ex);
        }
    };

    let history = useHistory();

    function validate() {
        if (firstnameRef.current.value !== '' && !verfFirstme && lastnameRef.current.value !== '' && !verfLastname && emailRef.current.value !== '' && !verfEmail && phoneRef.current.value !== '' && !verfPhone && adressRef.current.value !== '') {
            Axios.post("http://localhost:3001/addteacher", { fisrtname: firstnameRef.current.value, lastname: lastnameRef.current.value, email: emailRef.current.value, phone: phoneRef.current.value, adress: adressRef.current.value, image: imageProf }).then((response) => {
                if (response.data.message === "Operation completed") {
                    /** redirect to students list */
                    console.log('Operation Completed')
                    history.push({
                        pathname: '/home/teachers',
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
            }
        }
    }

    return (
        <section className="add-teacher">
            <div className="container">
                <div className="container-info">
                    <div className="divider"></div>
                    <div className="title">
                        Add Teacher
                    </div>
                    <div className="text">
                        Lorem ipsum dolor
                    </div>
                </div>
                <div className="container-body">
                    <div className="left-side">
                        <div className="img-container" style={{ backgroundImage: 'url(' + imageProf + ')' }}></div>
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
                            />
                            <TextField
                                inputRef={lastnameRef}
                                required
                                error={verfLastname}
                                onChange={verifLastname}
                                label="Last Name"
                                size="small"
                                sx={{ width: '100%' }}
                            />
                            <TextField
                                inputRef={emailRef}
                                required
                                error={verfEmail}
                                onBlur={verifEmail}
                                label="Email"
                                size="small"
                                sx={{ width: '100%' }}
                            />
                            <TextField
                                inputRef={phoneRef}
                                required
                                error={verfPhone}
                                onChange={verifPhone}
                                label="Phone"
                                size="small"
                                sx={{ width: '100%' }}
                            />
                            <TextField
                                inputRef={adressRef}
                                required
                                error={verfAdress}
                                onChange={() => setverfAdress(false)}
                                label="Adress"
                                size="small"
                                sx={{ width: '100%' }}
                            />
                        </div>
                        <div className="btns-container">
                            <Button onClick={() => { validate() }} disableElevation variant="contained">Validate</Button>
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
                                    <Link to="/home/teachers">
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

export default AddTeacherPage
