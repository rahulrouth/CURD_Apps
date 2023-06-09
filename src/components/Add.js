import React, { Fragment, useState } from 'react'
import {Button, Form, FormControl, FormGroup} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from './Employees';
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";


function Add() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    let history  = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const ids = uuid();
        let uniqueId = ids.slice(0,8);

        let a = name,
        b = age;

        Employees.push({id: uniqueId, Name: a, Age: b});

        history('/');

    }

    return <div>
        <Form className='d-grid gap-2' style={{margin:"15rem"}}>
            <FormGroup className='mb-3' controlId="formName">
                <FormControl type='text' placeholder='Enter Name' required onChange={(e) => setName(e.target.value)}>
                </FormControl>
            </FormGroup>

            <FormGroup className='mb-3' controlId="formAge">
                <FormControl type='text' placeholder='Enter Age' required onChange={(e) => setAge(e.target.value)}>
                </FormControl>
            </FormGroup>
            <Button type='submit' onClick={(e)=> handleSubmit(e)}>Submit</Button>
        </Form>
    </div>




}

export default Add;