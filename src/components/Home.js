import React, { Fragment } from 'react'
import {Button, Table} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from './Employees';
import { Link, useNavigate } from "react-router-dom";

function Home() {

    let history  = useNavigate();

    const HandelEdit = (id, name, age) => {
        localStorage.setItem('Name',name)
        localStorage.setItem('Age',age)
        localStorage.setItem('Id',id)
    }

    const HandelDelete = (id)=> {
        var index = Employees.map(function(e){          
            return e.id
           }).indexOf(id);

           Employees.splice(index,1);
           history('/');
    }

    return(
        <Fragment>
            <div style={{margin:"10rem"}}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Age
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Employees && Employees.length > 0
                            ?
                            Employees.map((item) =>{
                                return (
                                    <tr>
                                        <td>
                                            {item.Name}
                                        </td>
                                        <td>
                                            {item.Age}
                                        </td>
                                        <td>
                                            <Link to={`/edit`}>
                                            <Button style={{margin:"5px"}} onClick={()=> HandelEdit(item.id, item.Name, item.Age)}>Edit</Button>
                                            </Link>
                                            
                                            <Button style={{margin:"5px"}} onClick={()=> HandelDelete(item.id)} >Delete</Button>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "No Record"
                        }
                    </tbody>                   
                </Table>
                <Link className='d-grid gap-2' to="/create">
                <Button size="lg">Create</Button>
                </Link>
            </div>
        </Fragment>
    )
}

export default Home;