import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Add from './add.jsx';
import Table from './Table.jsx';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Search = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [search, setSearch] = React.useState(null);
    const handleSearch = (event) => {
        console.log("event", event.target.value);
        setSearch(event.target.value);

    }
    return (
        <div>
            <div className='flex sm:flex-row flex-col w-full m-2'>
                <div className='container border basis-10/12 sm:p-1 m-2 flex flex-row border-2 border-slate-950'>
                    <div><SearchIcon /></div>
                    <input placeholder='Search Using company Id.......' className='px-3 w-full' onChange={handleSearch}></input>
                </div>
                <div className='container border basis-2/12 p-1 m-2'>
                    <Button variant="contained" className='w-full' onClick={handleOpen}>+ ADD DATA</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Add />
                        </Box>
                    </Modal>
                </div>


            </div>
            <div className="flex">
                <Table Id={search} />
            </div>
        </div>

    );
};

export default Search;
