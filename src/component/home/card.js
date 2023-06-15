import kids from "../images/kids.png"
import Card from 'react-bootstrap/Card';


export default function CardDonation() {
    return (
        <div className="bg-body1 mb-0">
            <p className="fs-1 fw-bold text-red text-center" >Donation Now</p>

            <div className=" row row-cols-1 row-cols-lg-3 row-cols-md-2 m-auto" style={{ width: "90%" }}>
            {/* <div className=" d-flex justify-content-evenly flex-wrap m-auto mb-5" style={{ width: "90%" }}> */}

                <div className="col mt-5 mb-3">
                    <Card style={{ width: '25rem' }} className='position-relative m-auto' >
                        <Card.Img variant="top" src={kids} />
                        <p className="ms-3 mt-3 me-3 fs-5 fw-bold">The Strength of a poeple power of community</p>
                        <p className="ms-3 text-gray">Numquam temporibus ab sapiente totam est! Modi dignissimos fuga, </p>
                        <div className="d-flex justify-content-between mb-3">
                            <p className="ms-3 fw-bold">Rp 250.000.000</p>
                            <button type="button" class=" bg-color btn-donasi text-white fw-bold me-3" >Donate</button>

                        </div>


                    </Card>
                </div>

            </div>
        </div >
    )
}