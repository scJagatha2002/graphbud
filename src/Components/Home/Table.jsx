import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Group from './button_group.jsx';
import TablePagination from '@mui/material/TablePagination';
import { api } from '../../apiConfig';

function createData(Name, Id, Location, options) {
    return { Name, Id, Location, options };
}



export default function BasicTable(props) {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [companies, setCompanies] = React.useState([]);
    console.log("jaga",props.Id);

    const fetchData = async (id = null) => {
        try {

            if (id !== null) {
                console.log("entered");
                
                const response = await api.get(`/api/company/${props.Id}`);
                

                
                setCompanies(response.data);
                console.log("id",companies);
                


            }
            else {
                const response = await api.get('/api/companies/');

                
                setCompanies(response.data);
                console.log("no id",response.data);
                

            }
            
        } catch (error) {
            console.log(error);
        }
    };

    if (props.Id) {
        fetchData(props.Id); // Call fetchData with the specified ID
    } else {
        fetchData(); // Call fetchData without an ID to fetch all companies
    }
    



    const rows = companies.map((company) => {
        return createData(company.Name, company.Id, company.Location, <Group id={company.Id} />);
    });



    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <TableContainer component={Paper} style={{ border: 'none' }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                <TableHead >
                    <TableRow >
                        <TableCell align="center" style={{ border: 'none' }}><strong>Company Name</strong></TableCell>
                        <TableCell align="center" style={{ border: 'none' }}><strong>Id</strong></TableCell>
                        <TableCell align="center" style={{ border: 'none' }}><strong>Location</strong></TableCell>
                        <TableCell align="center" style={{ border: 'none' }}><strong>Options</strong></TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => {

                            return (

                                <TableRow
                                    key={row.Id}
                                
                                >
                                    <TableCell component="th" scope="row" align="center" style={{ border: 'none' }}>
                                        {row.Name}
                                    </TableCell>
                                    <TableCell align="center" style={{ border: 'none' }}>{row.Id}</TableCell>
                                    <TableCell align="center" style={{ border: 'none' }}>{row.Location}</TableCell>
                                    <TableCell align="center" style={{ border: 'none' }}>{row.options}</TableCell>
                                </TableRow>

                            )
                        })
                    }


                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </TableContainer>

    );
}
