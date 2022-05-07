import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import BTable from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { useTable } from 'react-table/dist/react-table.development';
import swal from 'sweetalert';

const ManageInventories = () => {
    const [ProductsItems, setProductsItems] = useState([]);
    const [Restart, setRestart] = useState(false);
    useEffect(() => {
        const url = "http://localhost:5000/Inventory"
        axios.get(url)
            .then(res => setProductsItems(res.data))
    }, [Restart]);
    const itemDelete = (id) => {
        swal("Are you sure you want to do this?", {
            buttons: ["NO", "Yes"],
        })
        .then((isOkay)=>{
            if (isOkay) {
                const url = `http://localhost:5000/deleteInventory/${id}`
                axios.delete(url)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            setRestart(!Restart)
                        }
                    })
            }
        })


    }


    const data = React.useMemo(
        () => [...ProductsItems], [ProductsItems]);

    const columns = React.useMemo(
        () => ProductsItems[0] ? Object.keys(ProductsItems[0]).map((key) => {
            if (key === "img") {
                return { Header: key, accessor: key, Cell: ({ value }) => <img width={150} src={value} /> }
            }


            return { Header: key, accessor: key, }
        }
        ) : [],
        [ProductsItems]
    )
    const tableHooks = (hooks) => {
        hooks.visibleColumns.push(
            (columns) => [
                ...columns, { id: "Delete", Header: "Delete", Cell: ({ row }) => <Button onClick={() => itemDelete(row.values._id)}>Delete</Button> }
            ]
        )
    }
    const tableInstance = useTable({ columns, data }, tableHooks)
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance
    return (
        <Container fluid>
            <div className='mt-3 mb-3'>Do You want to add more items? then click here<Link to='/addinventory' className='btn btn-outline-danger ms-3'>Add new item</Link></div>
            <Row>


                <BTable {...getTableProps()} striped bordered hover responsive size="sm" >
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th
                                        {...column.getHeaderProps()}
                                        style={{
                                            background: 'aliceblue',
                                            color: 'black',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        {column.render('Header')}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map(row => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map(cell => {
                                        return (
                                            <td
                                                {...cell.getCellProps()}
                                                style={{
                                                    padding: '10px',
                                                    border: 'solid 1px gray',
                                                }}
                                            >
                                                {cell.render('Cell')}
                                            </td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </BTable></Row>


        </Container>
    );
};

export default ManageInventories;