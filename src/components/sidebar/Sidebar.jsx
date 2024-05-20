import "./sidebar.css";

import CollectionsIcon from '@mui/icons-material/Collections';
import ImageAdd from "../Add_Images/ImageAdd";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";


import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import CommentIcon from '@mui/icons-material/Comment';
import { useTranslation } from "react-i18next";


const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  const {t}= useTranslation();
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">{t('title')}</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>{t('label')}</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>{t('about')}</span>
            </li>
          </Link>

          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>{t('home')}</span>
            </li>
          </Link>
          <li>
            <CreditCardIcon className="icon" />
            <span>{t('user')}</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>{t('Delivery')}</span>
          </li>

          {/* ------------------------------------------------------------------------------------------------ */}

          <Link to="/Datatable1" style={{ textDecoration: "none" }}>
            <li>
              <CommentIcon className="icon" />
              <span>Users comment</span>
            </li>
          </Link>


          <Link to="/Payment" style={{ textDecoration: "none" }}>
            <li>
              <CommentIcon className="icon" />
              <span>payment</span>
            </li>
          </Link>

          {/* ------------------------------------------------------------------------------------------------ */}
          <p className="title">USEFUL</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>{t('Stats')}</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>{t('Notifications')}</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>{t('SystemHealth')}</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>{t('Logs')}</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>{t('Settings')}</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>{t('Profile')}</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>{t('Logout')}</span>
          </li>
          <Link to="/comment" style={{ textDecoration: "none" }}>
          <li>
            <CommentIcon className="icon" />
            
            <span>Comment</span>
          </li>
          </Link>  

             <Link to="/ImageAdd" >
          <li>
            <CollectionsIcon className="icon"  />
            <span>Image</span>
          </li>
            </Link>   
            
               
          </ul>

       
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
