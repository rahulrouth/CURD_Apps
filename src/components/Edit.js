import React, { useEffect, useState } from 'react'
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from './Employees';
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";


function Edit() {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [id, setId] = useState("");

    let history = useNavigate();

    var index = Employees.map(function (e) {
        return e.id
    }).indexOf(id);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        let a = Employees[index];
        a.Name = name;
        a.Age = age;

        history('/');

    }

    useEffect(() => {
      setName(localStorage.getItem('Name'))
      setAge(localStorage.getItem('Age'))
      setId(localStorage.getItem('Id'))
    
     
    }, [])
    


    return (
        <div>
            <Form className='d-grid gap-2' style={{ margin: "15rem" }}>
                <FormGroup className='mb-3' controlId="formName">
                    <FormControl type='text' placeholder='Enter Name' value={name} required onChange={(e) => setName(e.target.value)}>
                    </FormControl>
                </FormGroup>

                <FormGroup className='mb-3' controlId="formAge">
                    <FormControl type='text' placeholder='Enter Age' value={age} required onChange={(e) => setAge(e.target.value)}>
                    </FormControl>
                </FormGroup>
                <Button type='submit' onClick={(e) => handleSubmit(e)}>Update</Button>
            </Form>
        </div>
    )
}

export default Edit;