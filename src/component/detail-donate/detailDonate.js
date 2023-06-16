import { Image } from "react-bootstrap"
import palestine from "../images/palestine.png"
import Navbar from "../navbar/navbar"
import ListDonation from "./list-donation";
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { API } from "../../config/api";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";


export default function DetailDonate() {
    let [donation, setDonation] = useState(0)
    const { id } = useParams()

    const { data: fund } = useQuery('fundChace', async () => {
        const response = await API.get(`/fund/${id}`);
        return response?.data.Data
    })

    let arrDonation = fund?.Donation
    let donatur = arrDonation?.length

    let collectDonation = 0;
    arrDonation?.forEach(item => collectDonation += item?.Money);
    
    console.log(fund)
    console.log(arrDonation)

    let persentase = Math.floor(collectDonation / fund?.GoalsMoney * 100)
    
    
    console.log("collectDonation : ",collectDonation)
    console.log("Goals Money : ", fund?.GoalsMoney)
    useEffect(()=>{
        setDonation(collectDonation)
    },[collectDonation])
    
    console.log("persentase : ",persentase)

    return (
        <div>
            <Navbar />
            <div className="container d-md-flex justify-content-md-between">
                <Image className="mt-md-5 border" src={palestine} style={{ width: "500px" }} />
                <div className=" mt-md-5" style={{ width: "650px" }}>

                    <p className="ms-3 pt-3 me-3 fs-2 fw-bold">{fund?.title}</p>
                    <div className="d-flex">
                        <div className=" d-flex justify-content-between mt-4 container-fluid">

                            <p className="fs-5 fw-bold text-red">Rp {collectDonation}   </p>
                            <p style={{ fontSize: "18px", color: "gray", fontWeight: "bold" }}>  gathered form </p>
                            <p style={{ color: "gray", }} className="fs-5 fw-bold">  Rp {fund?.GoalsMoney}</p>
                        </div>
                    </div>
                    <ProgressBar variant="danger" className="mb-3" now={persentase} />
                    <div className="d-flex justify-content-between mb-3">
                        <p className="fw-bold fs-5">{donatur} <span style={{ color: "gray", fontSize: "17px" }}>Donation</span></p>
                        <p className="fw-bold fs-5">150 <span style={{ color: "gray", fontSize: "17px" }}>More Day</span></p>

                    </div>
                    <p className="ms-3 text-gray fw-semibold">{fund?.description} </p>
                    <div className=" mb-3">
                        <button type="button" class=" bg-color text-white fw-bold mt-5" style={{ width: "100%", border: "none", borderRadius: "7px", height: "40px", }}>Donate</button>

                    </div>
                </div>
            </div>
            <ListDonation data={fund?.Donation} />


        </div>
    )
}