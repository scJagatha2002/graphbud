import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import Box from '@mui/material/Box';
import Update from './update.jsx';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { api } from '../../../src/apiConfig';

export default function VariantButtonGroup(props) {

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


    const [openUpdate, setOpenUpdate] = React.useState(false);
    const handleOpenUpdate = () => setOpenUpdate(true);
    const handleCloseUpdate = () => setOpenUpdate(false);

    const [openView, setOpenView] = React.useState(false);
    const handleOpenView = () => setOpenView(true);
    const handleCloseView = () => setOpenView(false);

    const handleDelete = async() => {
        
    try {
      
        const response = await api.delete(`/api/company/${props.id}`);
        
        console.log(response);
        if(response){
          alert("Data Deleted Successfully");
        }
        
      } catch (error) {
       
        alert("Error Deletiing the data");
        
      }
    }
    

    return (

        <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button onClick={handleOpenUpdate}>Update</Button>
            <Modal
                open={openUpdate}
                onClose={handleCloseUpdate}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>

                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <Update Id={props.id} />
                    </Typography>
                </Box>
            </Modal>

            

            <Button onClick={handleDelete}>Delete</Button>
        </ButtonGroup>


    );
}