import React, { useEffect, useState } from 'react';
import { Button, Table } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Read() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios.get(`https://63c40c6bf0028bf85fa1cdb4.mockapi.io/Crud_Operation`)
      .then((getData) => {
        setApiData(getData.data);
      })
  }, [])

  const setData = (id, firstName, lastName) => {
    localStorage.setItem('ID', id);
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
  }

  const getData = () => {
    axios.get(`https://63c40c6bf0028bf85fa1cdb4.mockapi.io/Crud_Operation`)
      .then((getData) => {
        setApiData(getData.data);
      })
  }

  const onDelete = (id) => {
    axios.delete(`https://63c40c6bf0028bf85fa1cdb4.mockapi.io/Crud_Operation/${id}`)
      .then(() => {
        getData();
      })
  }

  return (
    <div>
      <Button primary>
        <Link to='/Create' style={{ color: 'cyan' }}>Add New</Link>
      </Button>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {apiData.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data.id}</Table.Cell>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell>{data.lastName}</Table.Cell>
                <Table.Cell>
                  <Link to='/update'>
                    <Button color="blue" onClick={() => setData(data.id, data.firstName, data.lastName)}>Update</Button>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Button color="orange" onClick={() => onDelete(data.id)}>Delete</Button>
                </Table.Cell>
              </Table.Row>
            )
          })}

        </Table.Body>
      </Table>
    </div>
  )
}
export default Read;