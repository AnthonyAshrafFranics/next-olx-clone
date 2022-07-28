/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import OLX from "../images/olxB.svg";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function Modal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
      <div className="ms-2 px-3 d-flex align-items-center">
        <div>
          <button className="login-btn fw-bold" onClick={handleClickOpen}>
            Login
          </button>
        </div>
      </div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          className="d-flex mt-5 justify-content-center"
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <Image src={OLX} />
        </BootstrapDialogTitle>
        <DialogContent className="d-flex flex-column justify-content-center">
          <Typography variant="h6" gutterBottom className="text-center">
            WELCOME TO OLX
          </Typography>
          <Typography variant="body1" gutterBottom className="text-center mt-3">
            The trusted community of buyers and sellers.
          </Typography>
          <div className="d-flex flex-column mt-3">
            <button className="mb-2 auth-btn">Continue with Google</button>
            <button className="mb-2 auth-btn">Continue with Facebook</button>
            <button className="mb-2 auth-btn">Continue with Email</button>
            <button className="mb-2 auth-btn">Continue with Phone</button>
          </div>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
