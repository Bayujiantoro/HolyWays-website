import Modal from 'react-bootstrap/Modal';
import { Form } from "react-bootstrap";

export default function ModalLogin({show, onHide}) {
    return (
        <Modal show={show} onHide={onHide}>
              
                <Modal.Body className='rounded' style={{backgroundColor:"whitesmoke"}}>
                    <Form className="form-auth mt-5">
                        <p className='fw-bold fs-1 mb-4'>Login</p>

                        <Form.Control type="email" className="mb-4 fw-semibold input-form"  name='email' placeholder="Email" />

                        <Form.Control type="password" className="mb-5 fw-semibold input-form"  name='password' placeholder="Password" />

                        <button type="submit" className="btn fw-semibold fs-5" style={{ borderRadius: "7px", width: "100%" , height:"50px" , color:"white", backgroundColor: "rgb(202, 20, 20)"}}> Login </button>
                    </Form>

                    <p className='text-center mt-4' style={{ color: "grey" }}>Don't Have Account ? Click<span className='fw-bold'>  Here </span></p>
                </Modal.Body>
                
            </Modal>
    )
}