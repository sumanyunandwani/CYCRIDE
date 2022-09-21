import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Background from '../images/WHOWEARE.jpg';
import UseFormLeft from './FormLeft';
import UseFormRight from './FormRight';
import CancelIcon from '@material-ui/icons/Cancel';

const useStyles = makeStyles((theme) => ({
  modal: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: "70%",
    padding: '5%',
    paddingTop: '7%',
  },
  paper: {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50%',
    backgroundSize: 'cover',
    boxShadow: theme.shadows[10],
    padding: theme.spacing(2, 2, 2),
    overflow: "auto",
  },
}));


export default function Home({ id }) {

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
    <div className="home-container" id={id}>
        <span className="space_home"></span>
        <span className="share_cycle_container">
          <button className="share_cycle_text home_button" onClick={handleOpen}>
            Share Your Cycle
          </button>
        </span>
        <span className="rent_cycle_container">
          <button className="rent_cycle_text home_button" onClick={handleOpenR}>
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
              <span className="form_font">SHARE YOUR CYCLE<CancelIcon className="close_button" onClick={handleClose}></CancelIcon></span>
              <br></br>
              <span className="form_sub_head_font">Looking to save your cycle from dust and rust? or a way to earn money while you sleep? Look no more! Because our diverse market and secure transactions will not disappoint.</span>
              <UseFormLeft func={handleClose}/>
              <UseFormRight />
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
              <span className="form_font">RENT A CYCLE<CancelIcon className="close_button" onClick={handleCloseR}></CancelIcon></span>
              <br></br>
              <span className="form_sub_head_font">Having trouble committing to your fitness regime or maintaining a cycle? With us, don't invest, don't commit, go for just an evening ride. Access the range of attractive cycles with us. Need a cycle for an hour or a day? Rent with us!</span>
              <UseFormLeft func={handleCloseR}/>
              <UseFormRight />
            </div>
          </Fade>
        </Modal>
    </div>
    
  );
}
