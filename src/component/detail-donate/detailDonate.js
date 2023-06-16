import { Image } from "react-bootstrap"
import palestine from "../images/palestine.png"
import Navbar from "../navbar/navbar"
import ListDonation from "./list-donation";
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { API } from "../../config/api";
import { useMutation, useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';




export default function DetailDonate() {
    const [deleteModal, setDeleteModal] = useState(false);

    const handleClose = () => setDeleteModal(false);
    const handleShow = () => setDeleteModal(true);

    let [donation, setDonation] = useState(0)
    const { id } = useParams()
    const { data: fund } = useQuery('fundChace', async () => {
        const response = await API.get(`/fund/${id}`);
        console.log(response?.data.Data)
        return response?.data.Data
    })
    let arrDonation = fund?.Donation
    let donatur = arrDonation?.length

    let collectDonation = 0;
    arrDonation?.forEach(item => collectDonation += item?.Money);

    let persentase = Math.floor(collectDonation / fund?.GoalsMoney * 100)

    useEffect(() => {
        setDonation(collectDonation)
    }, [collectDonation])
    console.log("user : ", localStorage.getItem("user"))

    // console.log("persentase : ", persentase)

    const createDonation = useMutation(async () => {
        try {
            const config = {
                Headers: {
                    'Content-Type': 'application/json'
                },
            }
            let donation = {
                Status: "waitting Payment",
                Money: 5000000,
                FundID: parseInt(id)
            }
            const response = await API.post("/donation", donation, config);
            console.log("xxxxx : ", response)

            const token = response.data.Data.token;
            window.snap.pay(token, {
                onSuccess: function (result) {
                    /* You may add your own implementation here */
                    console.log(result);
                },
                onPending: function (result) {
                    /* You may add your own implementation here */
                    console.log(result);
                },
                onError: function (result) {
                    /* You may add your own implementation here */
                    console.log(result);
                },
                onClose: function () {
                    /* You may add your own implementation here */
                    alert("you closed the popup without finishing the payment");
                },
            });
            // payment midtrans

        } catch (error) {
            console.log("failed xxx : ", error)
        }
    })

    useEffect(() => {
        //change this to the script source you want to load, for example this is snap.js sandbox env
        const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
        //change this according to your client-key
        const myMidtransClientKey = process.env.REACT_APP_MIDTRANS_CLIENT_KEY;

        let scriptTag = document.createElement("script");
        scriptTag.src = midtransScriptUrl;
        // optional if you want to set script attribute
        // for example snap.js have data-client-key attribute
        scriptTag.setAttribute("data-client-key", myMidtransClientKey);

        document.body.appendChild(scriptTag);
        return () => {
            document.body.removeChild(scriptTag);
        };
    }, []);

    const deleteButton = useMutation(async (id) => {
        try {
            await API.delete(`/fund/${id}`);
            window.location.href = "/"
        } catch (error) {
            console.log(error)
        }
    })

    return (
        <div>
            <Navbar />
            <div className="container d-md-flex justify-content-md-between">
                <Image className="mt-md-5 border" src={palestine} style={{ width: "500px" }} />
                <div className=" mt-md-5" style={{ width: "650px" }}>

                    <p className="ms-3 pt-3 me-3 fs-2 fw-bold">{fund?.Title}</p>
                    <div className="d-flex">
                        <div className=" d-flex justify-content-between mt-4 container-fluid">

                            <p className="fs-5 fw-bold text-red">Rp {collectDonation.toLocaleString()}   </p>
                            <p style={{ fontSize: "18px", color: "gray", fontWeight: "bold" }}>  gathered form </p>
                            <p style={{ color: "gray", }} className="fs-5 fw-bold">  Rp {fund?.GoalsMoney.toLocaleString()}</p>
                        </div>
                    </div>
                    <ProgressBar variant="danger" className="mb-3" now={persentase} />
                    <div className="d-flex justify-content-between mb-3">
                        <p className="fw-bold fs-5">{donatur} <span style={{ color: "gray", fontSize: "17px" }}>Donation</span></p>
                        <p className="fw-bold fs-5">150 <span style={{ color: "gray", fontSize: "17px" }}>More Day</span></p>

                    </div>
                    <p className="ms-3 text-gray fw-semibold">{fund?.description} </p>
                    <div className=" mb-3">
                        <button type="button" class=" bg-color text-white fw-bold mt-5" style={{ width: "100%", border: "none", borderRadius: "7px", height: "40px", }} onClick={createDonation.mutate} >Donate</button>

                        {localStorage.getItem("user") == fund?.User.Name ? (

                            <div className="d-flex justify-content-between">
                                <button type="button" class=" bg-warning text-white fw-bold mt-2" style={{ width: "45%", border: "none", borderRadius: "7px", height: "40px", }}>Update</button>
                                <button type="button" class=" bg-secondary text-white fw-bold mt-2" style={{ width: "45%", border: "none", borderRadius: "7px", height: "40px", }} onClick={handleShow}>Delete</button>
                            </div>
                        ) : (
                            <div></div>
                        )}


                    </div>
                </div>
            </div>

            <Modal show={deleteModal} onHide={handleClose} centered>

                <Modal.Body className='rounded' style={{ backgroundColor: "whitesmoke" }}>

                    <p className='text-center fs-5 fw-bold my-5'>Are You Sure To Delete this Item ??</p>

                    <div className="d-flex justify-content-between">

                    <button type="submit" className="btn fw-semibold fs-5" style={{ borderRadius: "7px", width: "45%", height: "50px", color: "white", backgroundColor: "rgb(202, 20, 20)" }} onClick={handleClose}> Cancel </button>
                    <button type="submit" className="btn fw-semibold fs-5 bg-secondary" style={{ borderRadius: "7px", width: "45%", height: "50px", color: "white", }} onClick={()=>{deleteButton.mutate(id)}}> Delete </button>
                    </div>

                </Modal.Body>

            </Modal>

            <ListDonation qty={donatur} data={fund?.Donation} />



        </div>
    )
}