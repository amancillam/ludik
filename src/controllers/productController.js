import { ProductService } from '../services/productService.js';
import { productValidation } from '../utils/validation.js';

const productService = new ProductService();

export const createProduct = async (req, res) => {
  try {
    const { name, description, price, quantity } = req.body;

    const parsedData = productValidation.parse({ name, description, price, quantity });

    const newProduct = await productService.create(parsedData);
    return res.status(201).json(newProduct);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await productService.getAll();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: 'Error retrieving products' });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productService.getById(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ message: 'Error retrieving product' });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, quantity } = req.body;

    const parsedData = productValidation.parse({ name, description, price, quantity });
    const updatedProduct = await productService.update(id, parsedData);

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    return res.status(200).json(updatedProduct);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await productService.delete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    return res.status(200).json({ message: 'Product deleted' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting product' });
  }
};
