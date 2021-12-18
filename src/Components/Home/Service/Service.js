import React, { useEffect, useState } from "react";
import { Card, CardGroup, Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Service.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchServices } from "../../../redux/slices/serviceSlice";

const Service = () => {
  // const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchServices());
  }, []);
  const services = useSelector((state) => state.books.disService);
  return (
    <section>
      <Container className="py-5">
        <div className="text-center servic_title pb-5">
          <h5>ELECTRONICS SERVICES</h5>
          <h2>
            What We <span>Provide</span>
          </h2>
          <p>
            There are many variations of passages of Lorem electronics repair,
            but the majority <br /> have suffered alteration in azer duskam
          </p>
        </div>
        <Row lg={3} md={2} xs={1} className="g-4">
          {!loading ? (
            services?.slice(0, 6).map((items) => (
              <Col key={items._id}>
                <CardGroup className="cardGroup">
                  <Card className="card">
                    <div className="card-img">
                      <img
                        className="card-image img-fluid"
                        src={items.main_image}
                        alt=""
                      />
                      <Card.Body>
                        <Link to={`/service/${items._id}`}>
                          <button className="card_btn">
                            {items.main_title}
                          </button>
                        </Link>
                      </Card.Body>
                    </div>

                    <Card.Body className="pt-3 description">
                      <Card.Text>{items?.des.slice(0, 100)}</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Col>
            ))
          ) : (
            <div className="spiner mx-auto">
              <Spinner
                className="text-center"
                animation="border"
                variant="danger"
              />
            </div>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default Service;
