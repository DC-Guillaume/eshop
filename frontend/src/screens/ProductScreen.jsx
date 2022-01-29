import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
// import products from "../products";
import axios from "axios";

export default function ProductScreen() {
  // const product = products.find((p) => p._id === id);

  const { id } = useParams(null);
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get("/api/products/" + id);
      setProduct(data);
    };
    fetch();
  }, [id]);

  // export default function ProductScreen() {
  //   const [product, setProduct] = useState({});
  //   const {productId} = useParams();

  //   useEffect(() => {
  //     fetch("/api/products/" + productId)
  //     .then((response) => response.json())
  //     .then((data) => setProduct(data));
  //   }, [productId]);

  //   if (product === null) {
  //     return <p>chargement en cours...</p>;
  //   }

  if (product === null) {
    return <p>Chargement en cours...</p>;
  }

  return (
    <div>
      <main className="py-3">
        <Link className="btn btn-primary my-3" to="/">
          Accueil
        </Link>
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid rounded />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} avis`}
                />
              </ListGroup.Item>
              <ListGroup.Item>Prix: {product.price}€</ListGroup.Item>
              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Prix :</Col>
                    <Col>
                      <span className="bold">{product.price}€</span>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Stock :</Col>
                    <Col>
                      {product.countInStock > 0 ? (
                        <div>
                          <span className="bold">{product.countInStock}</span>
                          {" en stock"}
                        </div>
                      ) : (
                        "épuisé"
                      )}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item className="d-grid">
                  <Button
                    className="btn-primary"
                    type="button"
                    disabled={product.countInStock === 0}
                  >
                    Ajouter au Panier
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </main>
    </div>
  );
}
