import { Image } from "react-bootstrap";
import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

import ModalRegister from "../modal/register";
import ModalLogin from "../modal/login";
import Logo from "../images/logo-holyways.png"
import PP from "../images/2563352.jpg"

export default function Navbar() {

    const [showRegister, setShowRegister] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    const handleCloseRegister = () => setShowRegister(false);
    const handleShowRegister = () => setShowRegister(true);
    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => setShowLogin(true);
    return (
        <div className="bg-color">

            <div class="container-fluid d-flex justify-content-between py-3 ">
                <Image className="ms-sm-5" src={Logo} style={{objectFit:"contain"}}/>
                <div className="">
            <button type="button" class="btn border-none text-white fw-bold me-3" onClick={()=>{handleShowLogin()}}>Login</button>
            <button type="button" class="btn btn-light text-red fw-bold me-sm-5 " onClick={()=>{handleShowRegister()}}>Register</button>
            </div>
                {/* <Dropdown>
                    <Dropdown.Toggle className="me-sm-5" variant="" style={{ border: "none" }}>
                        <Image src={PP} className="profile-picture rounded-circle" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Raise fund</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Log Out</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown> */}

                <ModalRegister onHide={handleCloseRegister} show={showRegister} />
                <ModalLogin onHide={handleCloseLogin} show={showLogin} />
            </div>
        </div>
    )
}