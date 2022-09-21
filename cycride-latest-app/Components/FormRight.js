import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import Snackbar from '@material-ui/core/Snackbar';
// import MuiAlert from '@material-ui/lab/Alert';
import React, { Component } from 'react';
// import React from "react";
import axios from 'axios';

const arrow_image = require('../images/form_arrow.jpg');

// function Alert(props) {
    // return <MuiAlert elevation={6} variant="filled" {...props} />;
// }
export default class UseFormRight extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            tel: '',
        };
    }

    onChange = (e) => {
        /*
            Because we named the inputs to match their
            corresponding values in state, it's
            super easy to update the state
        */
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        const { name, email, tel } = this.state;

        axios.get("http://cycride.in/databaseconnect.php?name=" + name + "&email=" + email + "&contact=" + tel + "&isShare=1")
          .then((result) => {
            // <Snackbar open={open}  autoHideDuration="6000" onClose={handleClose}>
            //     <Alert onClose={handleClose} severity="success">
            //         result
            //     </Alert>
            // </Snackbar>
            console.log(result.data)
        });
    }

    render() {
        const { name, email, tel } = this.state;    
        return (
            <div className="form_right">
                <span className="form_font">Register Here!</span>
                <div className="form">
                    <form className="ShareCycleForm" autoComplete="off">
                        <TextField id="p_name" type="text" label="Name" name="name" value={name} onChange={this.onChange} required fullWidth/>
                        <br></br>
                        <TextField id="p_email" type="email" label="Email Address" name="email" value={email} onChange={this.onChange} helperText="We'll never share your email." required fullWidth/>
                        <br></br>
                        <TextField id="p_contact" type="tel" label="Contact No." name="tel" value={tel} onChange={this.onChange} required fullWidth/>
                        <br></br>
                        <br></br>
                        <Button fullWidth variant="contained" size="large" className="SaveFormButton" color="primary" type="submit">
                            Submit
                        </Button>
                    </form>
                </div>
                <img className="arrow" src={arrow_image}></img>
                <div className="form_bottom">
                    <span className="bottom_header">We will soon get in touch.</span>
                    <br></br>
                    <span className="bottom_para">Add cycridesocial@gmail.com to your contact list so that our email does not end up in your spam folder.</span>
                </div>
            </div>
        );
    }
}

// export default function UseFormRight({ isShare }) {

//     const [open, setOpen] = React.useState(false);

//     const handleClose = (event, reason) => {
//         if (reason === 'clickaway') {
//             return;
//         }
//         setOpen(false);
//     };

//     this.state = {
//         name: '',
//         email: '',
//         tel: '',
//     };

//     const onChange = (e) => {
//     /*
//         Because we named the inputs to match their
//         corresponding values in state, it's
//         super easy to update the state
//     */
//         this.setState({ [e.target.name]: e.target.value });
//     }

//     const onSubmit = (e) => {
//         e.preventDefault();
//         // get our form data out of state
//         const { name, email, tel } = this.state;

//         axios.get("http://cycride.in/databaseconnect.php?name=" + name + "&email=" + email + "&contact=" + tel + "&isShare=" + isShare)
//           .then((result) => {
//             // <Snackbar open={open}  autoHideDuration="6000" onClose={handleClose}>
//             //     <Alert onClose={handleClose} severity="success">
//             //         result
//             //     </Alert>
//             // </Snackbar>
//             console.log(result.data)
//           });
//       }

//     const { name, email, tel } = this.state;

//     return (
//         <div className="form_right">
//             <span className="form_font">Register Here!</span>
//             <div className="form">
//                 <form className="ShareCycleForm" autoComplete="off">
//                     <TextField id="p_name" type="text" label="Name" name="name" value={name} onChange={onChange} required fullWidth/>
//                     <br></br>
//                     <br></br>
//                     <TextField id="p_email" type="email" label="Email Address" name="email" value={email} onChange={onChange} helperText="We'll never share your email." required fullWidth/>
//                     <br></br>
//                     <br></br>
//                     <TextField id="p_contact" type="tel" label="Contact No." name="tel" value={tel} onChange={onChange} required fullWidth/>
//                     <br></br>
//                     <br></br>
//                     <Button fullWidth variant="contained" size="large" className="SaveFormButton" color="primary" type="submit" onSubmit={onSubmit}>
//                         Submit
//                     </Button>
//                 </form>
//             </div>
//             <img className="arrow" src={arrow_image}></img>
//             <div className="form_bottom">
//                 <span className="bottom_header">We will soon get in touch.</span>
//                 <br></br>
//                 <span className="bottom_para">Add cycridesocial@gmail.com to your contact list so that our email does not end up in your spam folder.</span>
//             </div>
//         </div>
//     )
// }
