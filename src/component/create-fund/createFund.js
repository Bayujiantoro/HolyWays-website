import Navbar from "../navbar/navbar"
import { Form } from "react-bootstrap";


export default function FormFund() {
    return (
        <div>
            <Navbar/>
            <div className="container mt-5">

            <p className="fs-2 fw-bold ">Make Raise Fund</p>
            <Form className=" mt-5">
                        <Form.Control className="mb-4 fw-semibold input-form" type="text" name='title' placeholder="Title" style={{backgroundColor:"rgb(223, 220, 220)"}}/>

                        <button type="file" className=" fw-semibold  bg-color mb-3" style={{ borderRadius: "7px",border:"none", width: "200px" , height:"40px" , color:"white"}}> Attachment thumbnail </button>
                        {/* <Form.Control type="file" className="mb-4 fw-semibold" style={{ height: "55px", width:"150px" ,backgroundColor:"whitesmoke"}} name='thumbnail' /> */}

                        <Form.Control type="text" className="mb-4 fw-semibold input-form" name='goals-donation' placeholder="Goals Donation" style={{backgroundColor:"rgb(223, 220, 220)"}} />

                        <textarea className="form-control mb-4 fw-semibold textarea1" id="exampleFormControlTextarea1" rows="3" style={{backgroundColor:"rgb(223, 220, 220)"}}placeholder="Description"></textarea>

                        <div className="d-flex justify-content-end">

                        <button type="submit" className=" fw-semibold fs-5 bg-color mt-5" style={{ borderRadius: "7px",border:"none", width: "250px" , height:"45px" , color:"white" ,}}> Public Fundraising </button>
                        </div>
                    </Form>
            </div>
        </div>
    )
}