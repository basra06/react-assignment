import React, { useState } from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import "./assignment.css"
import TextField from '@mui/material/TextField';
import { Autocomplete } from '@mui/material';


function Assignment() {
    const [modal, setModal] = useState(false);
    const [buttonTitle, setButtonTitle] = useState('');
    const [formData, setFormData] = useState({});

    const toggle = () => {
        setModal(!modal);
    };

    const Cancel=()=>{
        toggle()
        setFormData({})
    }
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleComboChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setModal(false);
    };
    return (
        <>
            <div className='Webpage' style={{ display: 'flex', flexDirection: 'column' }}>
                <Button className='button button1' onClick={() => (toggle(), setButtonTitle("Button 1"))}>Button 1</Button>
                <Button className='button button2' onClick={() => (toggle(), setButtonTitle("Button 2"))}>Button 2</Button>
                <Button className='button button3' onClick={() => (toggle(), setButtonTitle("Button 3"))}>Button 3</Button>
            </div>

            <Modal isOpen={modal} centered>
                <ModalHeader toggle={Cancel}>
                    {buttonTitle}
                </ModalHeader>
                <ModalBody style={{maxHeight:'500px', overflowY:'scroll'}}>
                    {
                        buttonTitle === "Button 1" &&
                        <>
                            <TextField className='w-100' id="filled-basic" label="Button 1 Field-1" variant="filled" />
                            <br />
                            <TextField className='w-100 mt-3' id="filled-basic" label="Button 1 Field-2" variant="filled" />
                        </>
                    }
                    {
                        buttonTitle === "Button 2" &&
                        <>
                            <TextField className='w-100' id="filled-basic" label="Button 2 Field-1" variant="filled" />
                            <br />
                            <Autocomplete
                                className='w-100 mt-3'
                                disablePortal
                                id="combo-box-demo"
                                options={films}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Movie" />}
                            />
                        </>
                    }
                    {
                        buttonTitle === "Button 3" &&
                        <>
                            <TextField className='w-100 mt-3' id="filled-basic" label="Button 3 Field-1" variant="filled" />
                            <TextField className='w-100 mt-3' id="filled-basic" label="Button 3 Field-2" variant="filled" />
                            <TextField className='w-100 mt-3' id="filled-basic" label="Button 3 Field-3" variant="filled" />
                            <TextField className='w-100 mt-3' id="filled-basic" label="Button 3 Field-4" variant="filled" />
                            <TextField className='w-100 mt-3' id="filled-basic" label="Button 3 Field-5" variant="filled" />
                            <TextField className='w-100 mt-3' id="filled-basic" label="Button 3 Field-6" variant="filled" />
                            <TextField className='w-100 mt-3' id="filled-basic" label="Button 3 Field-7" variant="filled" />
                            <TextField className='w-100 mt-3' id="filled-basic" label="Button 3 Field-8" variant="filled" />
                            <TextField className='w-100 mt-3' id="filled-basic" label="Button 3 Field-9" variant="filled" />
                            <TextField className='w-100 mt-3' id="filled-basic" label="Button 3 Field-10" variant="filled" />

                        </>
                    }
                </ModalBody>
                <ModalFooter>
                    <button onClick={() => (Cancel())} className='btn btn-primary'>Ok</button>
                    <button onClick={() => (Cancel())} className='btn btn-danger'>Cancel</button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default Assignment

const films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
    { label: 'Snatch', year: 2000 },
    { label: '3 Idiots', year: 2009 },
    { label: 'Monty Python and the Holy Grail', year: 1975 },
  ];