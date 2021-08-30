import React, {useEffect} from "react";
import Grid from "../UI/Grid/Grid";
import * as PatientActions from "../../store/actions/PatientActions";
import {getAllPatientAppointmentsInit} from "../../store/actions/PatientActions";
import {connect} from "react-redux";


const columns = [
    {
        field: 'id',
        headerName: 'Sr No.',
        headerAlign: 'center',
        width: 120
    },
    {
        field: 'patientName',
        headerName: 'Patient Name',
        headerAlign: 'center',
        width: 180
    },
    {
        field: 'symptoms',
        headerName: 'Symptoms',
        headerAlign: 'center',
        width: 200
    },
    {
        field: 'doctorName',
        headerName: 'Doctor Name',
        headerAlign: 'center',
        width: 200
    },
    {
        field: 'availability',
        headerName: 'Doctor Availability',
        headerAlign: 'center',
        width: 300
    },
    {
        field: 'doctorEmail',
        headerName: 'Doctor Email',
        headerAlign: 'center',
        width: 180
    }
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'KAS', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 35 },
    { id: 6, lastName: 'Melisandre', firstName: 'ABC', age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const ViewAppointment = (props) => {

    useEffect(()=>{
        if(props.patient) {
            props.getAllAppointments();
        }
    },[]);

    let grid='';

    if(props.allAppointments && props.allAppointments.length > 0) {
        const rows = [];
        props.allAppointments.map((appointment, index) => {
            const row = {
                id: index+1, patientName: appointment.name,symptoms: appointment.symptoms, doctorName: appointment.doctorName,
                availability: appointment.availability,doctorEmail: appointment.doctorEmail
            };
            rows.push(row);
        });
        grid =  <Grid rows={rows} columns={columns} pageSize={parseInt("5")}/>;
    }

    return (
        <>
            <span className="h1 p-3 d-flex justify-content-center"> All Patient Appointments </span>
            {grid}
        </>
    );
}


const mapStateToProps = state => {
    return {
        allAppointments : state.patientRdcr.allAppointments,
        patient: state.authRdcr.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllAppointments: () => dispatch(PatientActions.getAllPatientAppointmentsInit())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewAppointment);