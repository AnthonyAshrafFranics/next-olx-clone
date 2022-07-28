/* eslint-disable jsx-a11y/alt-text */
import { Grid, TextField, Autocomplete } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../images/olx.PNG";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import Modal from "./Modal";

export const Header = () => {
  const [open, setOpen] = useState(true);
  return (
    <Grid
      container
      className="bg-light"
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      py={4}
    >
      <Grid item xs={12} sm={12} md={8} lg={8} className="bg-light d-flex">
        <Image src={logo} />

        <div className="ms-3 hello">
          <SearchIcon />
          <select className="bg-light custom-input px-1">
            <option>Pakistan</option>
            <option>Karachi</option>
            <option>Sindh</option>
            <option>Isalambad</option>
            <option>KPK</option>
          </select>
        </div>
        <div className="hello2 ms-2">
          <input
            className="custom-input bg-light ps-3"
            placeholder="Find Cars, Mobile Phones and More "
          />
        </div>
        <div
          className="px-2 bg-dark custome-search d-flex align-items-center"
          style={{ marginLeft: "-4px" }}
        >
          <button className="bg-dark login-btn2">
            <SearchIcon fontSize="large" style={{ color: "white" }} />
          </button>
        </div>
        {/* <div className="ms-2 px-3 d-flex align-items-center">
          <div>
            <button className="login-btn fw-bold">Login</button>
          </div>
        </div> */}
        <div className="ms-2 d-flex align-items-center">
          <Modal />
        </div>
        <div className="d-flex flex-column">
          <button className="login-btn2 d-flex">
            {/* <Image src="https://www.olx.com.pk/assets/iconSellBorder_noinline.d9eebe038fbfae9f90fd61d971037e02.svg" />
             */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="104"
              height="48"
              viewBox="0 0 1603 768"
              //   class="_3V9PS"
            >
              <path
                // class="_2bClX _12yOz"
                d="M434.442 16.944h718.82c202.72 0 367.057 164.337 367.057 367.058s-164.337 367.057-367.057 367.057h-718.82c-202.721 0-367.058-164.337-367.058-367.058S231.721 16.943 434.442 16.943z"
                fill="#fff"
              />
              <path
                // class="_2bClX _YBz-"
                d="M427.241 669.489c-80.917 0-158.59-25.926-218.705-73.004l-.016-.014C139.407 542.352 99.766 464.914 99.766 383.997c0-41.07 9.776-80.712 29.081-117.797 25.058-48.139 64.933-89.278 115.333-118.966l-52.379-67.581c-64.73 38.122-115.955 90.98-148.159 152.845C18.8 280.243 6.201 331.224 6.201 383.997c0 104.027 50.962 203.61 139.799 273.175h.016c77.312 60.535 177.193 93.887 281.22 93.887h299.699l25.138-40.783-25.138-40.783H427.237z"
                fill="#ffce32"
              />
              <path
                // class="_2bClX _3uYj7"
                d="M1318.522 38.596c-45.72-14.369-93.752-21.658-142.762-21.658H427.249c-84.346 0-165.764 21.683-235.441 62.713l3.118 51.726 49.245 15.865c54.16-31.895 117.452-48.739 183.073-48.739h748.511c38.159 0 75.52 5.657 111.029 16.829 44.91 14.111 86.594 37.205 120.526 66.792l66.163-57.68c-43.616-38.01-97.197-67.703-154.957-85.852z"
                fill="#23e5db"
              />
              <path
                // class="_2bClX BfroU"
                d="M1473.479 124.453l-55.855 9.91-10.307 47.76c61.844 53.929 95.92 125.617 95.92 201.88a251.85 251.85 0 01-11.214 74.363c-38.348 124.311-168.398 211.129-316.262 211.129H726.949l25.121 40.783-25.121 40.783h448.812c190.107 0 357.303-111.638 406.613-271.498a323.69 323.69 0 0014.423-95.559c0-98.044-43.805-190.216-123.317-259.551z"
                fill="#3a77ff"
              />
            </svg>
            <div className="color-btn d-flex align-items-center ms-4">
              <AddIcon />
              <span>SELL</span>
            </div>
          </button>
        </div>
      </Grid>
    </Grid>
  );
};
