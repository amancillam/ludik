export class ProductService {
    constructor() {
      this.products = [];
      this.nextId = 1;
    }
  
    create({ name, description, price, quantity }) {
      const newProduct = {
        id: this.nextId++,
        name,
        description,
        price,
        quantity,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };
      this.products.push(newProduct);
      return newProduct;
    }
  
    getAll() {
      return this.products;
    }
  
    getById(id) {
      return this.products.find(product => product.id === parseInt(id));
    }
  
    update(id, { name, description, price, quantity }) {
      const productIndex = this.products.findIndex(product => product.id === parseInt(id));
  
      if (productIndex === -1) {
        return null;
      }
  
      const updatedProduct = {
        ...this.products[productIndex],
        name,
        description,
        price,
        quantity,
        updated_at: new Date().toISOString(),
      };
  
      this.products[productIndex] = updatedProduct;
      return updatedProduct;
    }
  
    delete(id) {
      const productIndex = this.products.findIndex(product => product.id === parseInt(id));
  
      if (productIndex === -1) {
        return null;
      }
  
      return this.products.splice(productIndex, 1)[0];
    }
  }
  