import Modal from 'react-bootstrap/Modal';
import { Form } from "react-bootstrap";

export default function ModalRegister({show, onHide}) {
    return (
        <Modal show={show} onHide={onHide}>
              
                <Modal.Body>
                    <Form className="form-auth mt-5">
                    <p className='fw-bold fs-1 mb-4'>Register</p>
                        <Form.Control className="mb-4 fw-semibold" type="text" style={{ height: "55px", backgroundColor:"whitesmoke" }} name='name' placeholder="Full Name" />

                        <Form.Control type="email" className="mb-4 fw-semibold" style={{ height: "55px" ,backgroundColor:"whitesmoke"}} name='email' placeholder="Email" />

                        <Form.Control type="password" className="mb-4 fw-semibold" style={{ height: "55px", backgroundColor:"whitesmoke" }} name='password' placeholder="Password" />

                        <Form.Control type="number" className="mb-5 fw-semibold" style={{ height: "55px", marginBottom: "30px", backgroundColor:"whitesmoke" }} name='phone' placeholder="Phone" />

                        <button type="submit" className="btn fw-semibold fs-5 bg-color" style={{ borderRadius: "7px", width: "100%" , height:"50px" , color:"white"}}> Register </button>
                    </Form>

                    <p className='text-center mt-3' style={{ color: "grey" }}>Already Have an account ? Click<span className='fw-bold'>  Here </span></p>
                </Modal.Body>
                
            </Modal>
    )
}