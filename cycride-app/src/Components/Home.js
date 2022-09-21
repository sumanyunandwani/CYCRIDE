import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Background from '../images/WHOWEARE.jpg';
import UseFormLeft from './FormLeft';
import UseFormRight from './FormRight';
import CancelIcon from '@material-ui/icons/Cancel';
import NavigationIcon from '@material-ui/icons/Navigation';
import Fab from '@material-ui/core/Fab';
import disableScroll from 'disable-scroll';
import { Link } from "react-scroll";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import DoubleArrow from '../images/double_down_arrows.svg'

const useStyles = makeStyles((theme) => ({
  modal: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '90vw',
    height: "73vh",
    padding: '0',
    marginLeft: '5vw',
    marginTop: '20vh',
    overflow: 'hidden',
    boxShadow: theme.shadows[10],
    border: 'solid 4px'
  },
  paper: {
    background: 'linear-gradient(90deg, rgba(134,170,192,255) 50%, #ffffff 50%)',
    // backgroundImage: `url(${Background})`,
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: '50%',
    // backgroundSize: 'cover',
    padding: theme.spacing(2, 2, 2),
    height: '100%',
  },
}));

export const scrollUpButton = () => {
  disableScroll.off();
};


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

  window.onscroll = function() {
    if(window.pageYOffset === 0) {
      disableScroll.on();
    }
  };

  window.onload = function() {
    if(window.pageYOffset === 0) {
      disableScroll.on();
    }
  }

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
        <span className="home_bottom_scroll">
          <Link
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              underlineAlways
              onClick={scrollUpButton}
          >
            <img src={DoubleArrow} className="scroll_lock" alt="Scroll Down" title="Scroll Down"></img>
          {/* <Fab variant="extended" title="Scroll Up" className="outer_button">
            <NavigationIcon className="scroll_lock"/>
          </Fab> */}
          </Link>
        </span>
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
              <div className="form_font">
                SHARE YOUR CYCLE
                <CancelIcon className="close_button" onClick={handleClose}></CancelIcon>
              </div>
              <div className="form_sub_head_font">
                Looking to save your cycle from dust and rust? or a way to earn money while you sleep? Look no more! Because our diverse market and secure transactions will not disappoint.
              </div>
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
              <div className="form_font">
                RENT A CYCLE
                <CancelIcon className="close_button" onClick={handleCloseR}></CancelIcon>
              </div>
              <div className="form_sub_head_font">
                Having trouble committing to your fitness regime or maintaining a cycle? With us, don't invest, don't commit, go for just an evening ride. Access the range of attractive cycles with us. Need a cycle for an hour or a day? Rent with us!
              </div>
              <UseFormLeft func={handleCloseR}/>
              <UseFormRight />
            </div>
          </Fade>
        </Modal>
    </div>
    
  );
}