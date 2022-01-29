import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import axios from "axios";
// import products from "../products";

export default function HomeScreen() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get("/api/products/");
      setProducts(data);
    };
    fetch();
  }, []);

  if (products === null) {
    return <p>Chargement en cours...</p>;
  }

  return (
    <main className="py-3">
      <h1>Nouveautés</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </main>
  );
}
