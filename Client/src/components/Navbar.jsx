import React, {useEffect, useState} from 'react'
import '../styles/Navbar.css'
import Avatar from '@material-ui/core/Avatar'
import { AiOutlineSetting, AiOutlineMessage } from 'react-icons/ai'
import { IoNotificationsOutline } from 'react-icons/io5'
import IconButton from '@material-ui/core/IconButton'
import { HiChevronLeft } from 'react-icons/hi'
import Axios from 'axios'

function Navbar(props) {

    useEffect(() => {
        Axios.get("http://localhost:3001/login").then((response) => {
            setPicture(response.data.picture)
            setFirstname(response.data.firstname)
            setLastname(response.data.lastname)
        });
    }, []);

    const [picture, setPicture] = useState();
    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();

    return (
        <nav>
            <div className="title">
                <IconButton>
                    <HiChevronLeft />
                </IconButton>
                {props.navTitle}
            </div>
            <div className="icons-container">
                <IconButton>
                    <div className="notif">21</div>
                    <IoNotificationsOutline />
                </IconButton>
                <IconButton>
                    <div className="notif">3</div>
                    <AiOutlineMessage />
                </IconButton>
                <IconButton>
                    <div className="notif">1</div>
                    <AiOutlineSetting />
                </IconButton>
                <div className="avatar-container">
                    <div className="text">
                        <div className="text1">Good morning</div>
                        <div className="text2">{firstname} {lastname}</div>
                    </div>
                    <Avatar src={picture} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
