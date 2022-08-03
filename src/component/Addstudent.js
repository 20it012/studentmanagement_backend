import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import axios from "axios";

export default function Addstudent() {

    const [id, setId] = useState();
    const [name, setName] = useState();
    const [address, setAddress] = useState();

    const student = {
        id: id,
        name: name,
        address: address}
    
        function textChange(event) {
            if (event.target.name === 'id')
                setId(event.target.value);
            else if (event.target.name === 'name')
                setName(event.target.value);
            else if (event.target.name === 'address')
                setAddress(event.target.value);
        }

        let saveStudent = () => {
            axios.post("http://localhost:8080/student, student")
                .then(response => {
                    alert(response.data);
                })
                .catch(error => alert(error));
        }

    return(
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Id</Form.Label>
        <Form.Control type="text" name="id" value="id" placeholder="enter yoar id" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" value="name" placeholder="enter yoar Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" name="address" value="address" placeholder="enter yoar Address" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    )
}