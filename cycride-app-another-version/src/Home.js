import React from "react";
import ButtonBase from '@material-ui/core/ButtonBase';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Background from './WHOWEARE.jpg';
import { CenterFocusStrong } from "@material-ui/icons";

const spaceStyle = {
  float: 'left',
  width: '100%',
  height: '250px',
};

const colorStyle = {
  backgroundColor: 'white',
};

const useStyles = makeStyles((theme) => ({
  modal: {
    // display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '100px',
  },
  paper: {
    // backgroundColor: theme.palette.background.paper,
    // backgroundColor: "rgb(175, 196, 85)",
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50%',
    backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat',
    // backgroundPostion: '50%',
    // backgroundSize: 'cover',
    boxShadow: theme.shadows[10],
    padding: theme.spacing(5, 10, 4),
    // display: "flex",
    width: "83%",
    minHeight: "60%",
    overflow: "auto",
  },
}));


export default function Home({ dark, id }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openR, setOpenR] = React.useState(false);
  
  const handleOpenR = () => {
    setOpenR(true);
  }

  const handleCloseR = () => {
    setOpenR(false);
  }

  const handleOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="home">
      <div className="section-content" id={id}>
        <span style={spaceStyle}></span> 
        <span className="share_cycle_container">
          <button className="share_cycle_text" onClick={handleOpen}>
            Share Your Cycle
          </button>
        </span>
        <span className="rent_cycle_container">
          <button className="rent_cycle_text" onClick={handleOpenR}>
            Rent A Cycle
          </button>
        </span>
        <span className="home_bottom_text">WE HELP YOU CONNECT</span>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
          timeout: 500,
          }}
          >
          <Fade in={open}>
            <div className={classes.paper}>
              <span className="form_header">Register To Share Your Cycle</span>
              <div className="form_left">
                <span className="form_para">Looking for saving your cycle from dust and rust?<br></br> Or efficient use of your cycle and earn money with it? <br></br>Our diverse market and secure transactions will not disappoint you.</span>
                <br></br><br></br>
              </div>
              <div className="form_right">
                <form className="ShareCycleForm" autoComplete="off">
                  <TextField id="p_name" label="Name" required fullWidth/>
                  <br></br>
                  <br></br>
                  <TextField id="p_email" label="Email Address" helperText="We'll never share your email." required fullWidth/>
                  <br></br>
                  <br></br>
                  <TextField id="p_pincode" label="Pin Code" required fullWidth/>
                  <br></br>
                  <br></br>
                  <TextField id="p_cyclemodal" label="Cycle Model" required fullWidth/>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <Button fullWidth variant="contained" size="large" className="SaveFormButton" color="primary" type="submit">
                      Save
                  </Button>
                </form>
              </div>
            </div>
          </Fade>
        </Modal>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={openR}
          onClose={handleCloseR}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
          timeout: 500,
          }}
          >
          <Fade in={openR}>
            <div className={classes.paper}>
              <span className="form_header">Rent A Cycle</span>
              <div className="form_left">
                <span className="form_para">Having trouble committing to your fitness regime or maintaining a cycle? With us, don’t invest, don’t commit, go for just an evening ride. Access the range of attractive cycles with us. Need a cycle for an hour or a day? Rent with us!</span>
                <br></br><br></br>
              </div>
              <div className="form_right">
                <form className="ShareCycleForm" autoComplete="off">
                  <TextField id="p_name" label="Name" required fullWidth/>
                  <br></br>
                  <br></br>
                  <TextField id="p_email" label="Email Address" helperText="We'll never share your email." required fullWidth/>
                  <br></br>
                  <br></br>
                  <TextField id="p_pincode" label="Pin Code" required fullWidth/>
                  <br></br>
                  <br></br>
                  <TextField id="p_cyclemodal" label="Cycle Model" required fullWidth/>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <Button fullWidth variant="contained" size="large" className="SaveFormButton" color="primary" type="submit">
                      Save
                  </Button>
                </form>
              </div>
            </div>
          </Fade>
        </Modal>
      </div>
    </div>
    
  );
}