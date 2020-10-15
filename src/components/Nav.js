import React from 'react'
import logo from '../assets/logo.png'
import {IconButton} from '@material-ui/core'
import Instagram from '@material-ui/icons/Instagram'
import Facebook from '@material-ui/icons/Facebook'

function Nav() {
    return (
        <div className="navbar">
             <nav className="navbar_container">
                <span id="navbar_logoLeft">
                    <img src={logo} alt="none" />
                </span>
                <span id="navbar_title">
                    <div className="navbar_titleName">SaviraWeddingDepok</div>
                    <div className="navbar_titlePlace">WO & MUA Depok || Bogor || Jakarta</div>
                </span>
                <ul id="menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Booking</a></li>
                    <li><a href="#">Event</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Plans & Pricing</a></li>
                    <li>
                        <a href="https://www.instagram.com/saviraweddingdepok/?hl=id">
                            <IconButton>
                                <Instagram height="15px" width="15px"/>
                            </IconButton>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/savira.weddingg">
                            <IconButton>
                                <Facebook height="15px" width="15px"/>
                            </IconButton>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav
