import Navbar from "../navbar/navbar"
import Card from 'react-bootstrap/Card';
import kids from "../images/kids.png"


export default function RaiseFund() {
    return (
        <div>
            <Navbar/>
            <div className="container mt-5 d-flex justify-content-between">
            <p className="fs-2 fw-bold ">My Profile</p>
            <button type="button" class=" bg-color btn-fund text-white fw-bold me-3" >Make Raise Fund</button>

            </div>
            <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 m-auto container" >

                <div className="col mb-3">
                    <Card style={{ width: '25rem' }} className='position-relative m-auto' >
                        <Card.Img variant="top" src={kids} />
                        <p className="ms-3 mt-3 me-3 fs-5 fw-bold">The Strength of a poeple power of community</p>
                        <p className="ms-3 text-gray">Numquam temporibus ab sapiente totam est! Modi dignissimos fuga, </p>
                        <div className="d-flex justify-content-between mb-3">
                            <p className="ms-3 fw-bold">Rp 250.000.000</p>
                            <button type="button" class=" bg-color btn-donasi text-white fw-bold me-3" >View Fund</button>

                        </div>


                    </Card>
                    
                </div>
                <div className="col mb-3">
                    <Card style={{ width: '25rem' }} className='position-relative m-auto' >
                        <Card.Img variant="top" src={kids} />
                        <p className="ms-3 mt-3 me-3 fs-5 fw-bold">The Strength of a poeple power of community</p>
                        <p className="ms-3 text-gray">Numquam temporibus ab sapiente totam est! Modi dignissimos fuga, </p>
                        <div className="d-flex justify-content-between mb-3">
                            <p className="ms-3 fw-bold">Rp 250.000.000</p>
                            <button type="button" class=" bg-color btn-donasi text-white fw-bold me-3" >View Fund</button>

                        </div>


                    </Card>
                    
                </div>

            </div>
        </div>
    )
}