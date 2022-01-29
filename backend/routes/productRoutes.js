import express from "express";
import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";
const router = express.Router();

// @description Fetch des produits
// @route GET api/products
// @access Public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);
// @description Fetch un produit unique
// @route GET sur api/products/:id
// @access Public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      //gestion du 404 si le produit n'est pas trouvé
      res.status(404);
      throw new Error("Produit introuvable");
    }
  })
);

export default router;
