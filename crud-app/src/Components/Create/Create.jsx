import React, { useState } from 'react'
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Create() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    console.log('firstname=' + firstName);
    console.log('lastName=' + lastName);

    const sendDataToApi = () => {
        axios.post('https://63c40c6bf0028bf85fa1cdb4.mockapi.io/Crud_Operation',
            {
                firstName,
                lastName
            }).then(() => {
                navigate('/');
            })
    }

    return (
        <div>
            <Form>
                <Form.Field>
                    <label>First Name</label>
                    <input name='fname' placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input name='lname' placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} />
                </Form.Field>

                <Button primary type='submit' onClick={sendDataToApi}>Submit</Button>
                <Button primary>
                    <Link to='/' style={{ color: '#FFF' }}>Cancel</Link>
                </Button>
            </Form>


        </div>
    )
}
export default Create;