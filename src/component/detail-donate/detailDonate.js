import { Image } from "react-bootstrap"
import palestine from "../images/palestine.png"
import Navbar from "../navbar/navbar"
import ListDonation from "./list-donation";
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function DetailDonate() {
    return (
        <div>
            <Navbar />
            <div className="container d-md-flex justify-content-md-between">
                <Image className="mt-md-5 border" src={palestine} style={{ width: "500px" }} />
                <div className=" mt-md-5" style={{ width: "650px" }}>

                    <p className="ms-3 pt-3 me-3 fs-2 fw-bold">The Strength of a poeple power of community</p>
                    <div className="d-flex">
                        <div className=" d-flex justify-content-between mt-4 container-fluid">

                            <p className="fs-5 fw-bold text-red">Rp 25000000   </p>
                            <p style={{ fontSize: "18px", color: "gray", fontWeight: "bold" }}>  gathered form </p>
                            <p style={{ color: "gray",  }} className="fs-5 fw-bold">  Rp 210000000</p>
                        </div>
                    </div>
                    <ProgressBar variant="danger" className="mb-3" now={75} />
                    <div className="d-flex justify-content-between mb-3">
                        <p className="fw-bold fs-5">200 <span style={{ color: "gray", fontSize: "17px" }}>Donation</span></p>
                        <p className="fw-bold fs-5">150 <span style={{ color: "gray", fontSize: "17px" }}>More Day</span></p>

                    </div>
                    <p className="ms-3 text-gray fw-semibold">Numquam temporibus ab sapiente totam est! Modi dignissimos fuga, You need to enable JavaScript to run this app. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam temporibus ab sapiente totam est! Modi dignissimos fuga, obcaecati quibusdam rerum, reprehenderit explicabo, amet aliquam quae libero cupiditate incidunt odio ullam. </p>
                    <div className=" mb-3">
                        <button type="button" class=" bg-color text-white fw-bold mt-5" style={{ width: "100%", border: "none", borderRadius: "7px", height: "40px", }}>Donate</button>

                    </div>
                </div>
            </div>
            <ListDonation/>

        </div>
    )
}