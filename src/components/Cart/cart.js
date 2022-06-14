 
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
 
 
 
import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
 
 

const Cart = () => {
  const { selectedService, remove, setselectedService } = useAuth();
  console.log(selectedService)
  const navigate = useNavigate();

  const totalPrice = selectedService.reduce(
    (total, packages) => total + packages.price,
    0
  );
   
  return (
    <div className="my-4">
      <Container>
        {selectedService.length ? (
          <Row>
            <Col  sm={12} md={8}>
              {selectedService.map((course) => {
                const { img, _id, name, description, price } =
                  course;

                return (
                  <Row className="my-2 bg-info" _id={_id}>
                    <Col sm={5}>
                      <img className="img-fluid" src={img} alt="" />
                    </Col>
                    <Col  className="mt-5" sm={7}>
                      <h5>{name}</h5>
                      <p className="mb-0">{description}</p>
                      <h4>Price: {price}</h4>
                      <Row>
                         
                        <Col sm={8}>
                          <div className="d-flex">
                            <NavLink
                              to={`/courses/${_id}`}
                              className="btn btn-warnng w-100 me-1"
                            >
                              View Details
                            </NavLink>

                            <button
                              onClick={() => remove(_id)}
                              className="btn btn-warning  w-100"
                            >
                              Remove
                            </button>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                );
              })}
            </Col>
            <Col className="text-center" md={4}>
              <h4>Total {selectedService.length} course selected</h4>
              <h6>Total Price: {totalPrice }  $</h6>

              <button
                onClick={() => {
                
               
                  navigate("/shipping");
                }}
                className="btn btn-warning"
              >
              Process To Shipping
              </button>
            </Col>
          </Row>
        ) : (
          <div className="text-center my-5 py-5">
            <h1>No Course Selected!</h1>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Cart;