//Form (add)

import './App.css';
import React, { useState } from "react"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import dateFormat from "dateformat";


import axios from 'axios';



//Form component for add
const Form = (props) => {

    let { banners, onChangeValue } = props;

    //handle form
    const [open, setOpen] = React.useState(false);

    //banner text
    const [bannerText, setBannerText] = useState('');

    //banner color
    const [bannerColor, setBannerColor] = useState('');

    //banner link
    const [bannerLink, setBannerLink] = useState('');

    //banner icon
    const [bannerIcon, setBannerIcon] = useState('');

    //start date
    const [startDate, setStartDate] = useState(Date.now());

    //end date
    const [endDate, setEndDate] = useState(Date.now());

    const handleAddClick = () => {
        setOpen(true);
    }

    const handleClose = () => {

        //create object to add to list
        let banner = {
            bannerText: bannerText,
            bannerColor: bannerColor,
            bannerLink: bannerLink,
            bannerIcon: bannerIcon,
            startDate: startDate,
            endDate: endDate
        }

        let id = banners.length + 1;
        banner.id = id;

        //add for client side
        banners = banners.concat(banner);
        console.log(banners);
        onChangeValue(banners);

        //add for server side
        axios.post("api/banners/add", banner).then(res => console.log(res));

        setOpen(false);
    };

    return (<div>
        <Button variant="outlined" onClick={handleAddClick}>
            Add
        </Button>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add banner</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="bannerText"
                    label="Headline"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={bannerText}
                    onChange={(event) => setBannerText(event.target.value)}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="bannerColor"
                    label="Banner Color"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={bannerColor}
                    onChange={(event) => setBannerColor(event.target.value)}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="bannerLink"
                    label="Banner Link"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={bannerLink}
                    onChange={(event) => setBannerLink(event.target.value)}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="bannerIcon"
                    label="Banner Icon"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={bannerIcon}
                    onChange={(event) => setBannerIcon(event.target.value)}

                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="startDate"
                    label="Start Date"
                    type="date"
                    fullWidth
                    variant="standard"
                    value={startDate}
                    onChange={(event) => setStartDate(event.target.value)}
                    sx={{ width: 220 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="endDate"
                    label="End Date"
                    type="date"
                    fullWidth
                    variant="standard"
                    value={endDate}
                    onChange={(event) => setEndDate(event.target.value)}
                    sx={{ width: 220 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => handleClose()}>Submit</Button>
            </DialogActions>
        </Dialog>
    </div>);
}


export default Form;