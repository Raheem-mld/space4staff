import React, { forwardRef, useEffect, useState } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom';
import MaterialTable from "material-table";
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button'
import Add from '@material-ui/icons/Add'
import Delete from '@material-ui/icons/DeleteOutlineRounded'
import Avatar from '@material-ui/core/Avatar'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import '../styles/StudentsPage.css'

function TeachersPage() {

    useEffect(() => {
        Axios.get("http://localhost:3001/teachers").then((response) => {
            setData(response.data)
        });
    }, []);

    const tableIcons = {
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
        Details: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
        ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
        ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
    };

    const columns = [
        {
            title: "",
            field: "picture",
            width: "auto",
            render: rowData => <Avatar alt="Picture" src={rowData.picture} />
        },
        {
            title: "Firstname",
            field: "firstname",
        },
        {
            title: "Last Name",
            field: "lastname",
        },
        {
            title: "Adresse",
            field: "address",
        },
        {
            title: "Phone",
            field: "phone",
        },
        {
            title: "Email",
            field: "email",
        },
    ];

    const actions = [
        {
            icon: Edit,
            tooltip: 'Edit User',
            position: 'row',
            onClick: (event, rowData) => {
                // Do save operation
                console.log(rowData)
            }
        },
        {
            icon: Delete,
            tooltip: 'Delete User',
            position: 'row',
            onClick: (event, rowData) => {
                // Do save operation
                console.log(rowData)
            }
        }
    ];

    const [open, setOpen] = useState(false);

    const [data, setData] = useState();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [Teachers, setTeachers] = useState();

    const deleteTeachers = () => {
        if (Teachers.length === 0) {
            /** no row selected */
        } else if (Teachers.length > 0) {
            Axios.post("http://localhost:3001/deleteTeachers", { teachers: Teachers }).then((response) => {
                handleClose();
                setTeachers([])
                Axios.get("http://localhost:3001/teachers").then((response) => {
                    setData(response.data)
                });
            })
        }
    }

    return (
        <section className="students">
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
                    <Button onClick={() => { deleteTeachers() }} autoFocus>
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
            <div className="table-container">
                <div className="table-info">
                    <div className="divider"></div>
                    <div className="title">
                        Teachers List
                    </div>
                    <div className="text">
                        Lorem ipsum dolor
                    </div>
                </div>
                <MaterialTable
                    icons={tableIcons}
                    title=""
                    data={data}
                    columns={columns}
                    components={{
                        Container: props => <Paper {...props} elevation={0} />
                    }}
                    actions={actions}
                    options={{
                        selection: true,
                        actionsColumnIndex: -1
                    }}
                    onSelectionChange={(rows) => setTeachers(rows)}
                />
                <div className="btns-container">
                    <Link to="/home/teachers/addteachers">
                        <Button variant="contained" disableElevation endIcon={<Add />}>
                            Add Teachers
                        </Button>
                    </Link>
                    <Button variant="contained" disableElevation endIcon={<Delete />} onClick={handleClickOpen}>
                        Delete Teachers
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default TeachersPage
