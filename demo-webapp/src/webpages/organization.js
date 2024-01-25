import React, { useState, useEffect }  from 'react';
import { useMemo } from 'react';
import {
    MaterialReactTable,

} from 'material-react-table';
import{
    Box,
    Typography,
    Grid
} from "@mui/material"


const Organization = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [organizations, setOrganizations] = useState([]);

    const columns = useMemo(
        () => [
            {
                accessorKey: 'name', //access nested data with dot notation
                header: 'Name',
                size: 150,
            },
            {
                accessorKey: 'address',
                header: 'Address',
                size: 150,
            },
            {
                accessorKey: 'city', //normal accessorKey
                header: 'City',
                size: 150,
            },
            {
                accessorKey: 'state', //normal accessorKey
                header: 'State',
                size: 150,
            },
            {
                accessorKey: 'phone', //normal accessorKey
                header: 'Phone',
                size: 150,
            }

        ],
        [],
    );

    useEffect(() => {
        fetch('http://localhost:8080/organizations')
            .then(res => res.json())
            .then(
                (data) => {
                    console.log("data-----",data)
                    setIsLoaded(true);
                    setOrganizations(data);
                },
                (error) => {
                    console.log("error-----",error)
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <Grid>
                <Typography variant="h4" >Organizations :</Typography>

            <MaterialReactTable columns={columns} data={organizations}   renderDetailPanel={(row) =>
            <Box>
                {/*<Typography>Manager: {row.row.original.manager}</Typography>*/}
                <Typography>Email: {row.row.original.email}</Typography>
            </Box>
            } />
            </Grid>
        );
    }
}

export default Organization;