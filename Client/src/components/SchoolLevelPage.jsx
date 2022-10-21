import React, { forwardRef, useState, useEffect } from 'react';
import Axios from 'axios';
import MaterialTable from "material-table";
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Delete from '@material-ui/icons/DeleteOutlineRounded'
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
import Add from '@material-ui/icons/Add'
import Button from '@material-ui/core/Button'
import "../styles/SchoolLevelPage.css"

function SchoolLevelPage() {

    useEffect(() => {
        Axios.get("http://localhost:3001/SchoolLevel").then((response) => {
            setData(response.data)
        });
    }, []);

    const [data, setData] = useState();

    const tableIcons = {
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
        DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
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
            title: "ID School Level",
            field: "id_niveau_scolaire",
        },
        {
            title: "Level Name",
            field: "level_name",
        },
        {
            title: "Number Students",
            field: "id_niveau_scolaire",
        }
    ];

    const actions = [
        {
            icon: Edit,
            tooltip: 'Edit User',
            position: 'row',
            onClick: (event, rowData) => {

            }
        },
        {
            icon: DeleteOutline,
            tooltip: 'Delete User',
            position: 'row',
            onClick: (event, rowData) => {

            }
        }
    ];

    return (
        <div className="table-container">
            <div className="table-info">
                <div className="divider"></div>
                <div className="title">
                    School Level
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
                actions={actions}
                options={{
                    selection: true,
                    actionsColumnIndex: -1,
                }}
                components={{
                    Container: props => <Paper {...props} elevation={0} />
                }}
            />
            <div className="btns-container">
                <Button variant="contained" disableElevation endIcon={<Add />}>
                    Add Level
                </Button>
                <Button variant="contained" disableElevation endIcon={<Delete />} >
                    Delete Level
                </Button>
            </div>
        </div>
    )

}

export default SchoolLevelPage;
