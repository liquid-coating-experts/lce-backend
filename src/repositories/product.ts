import { Product } from "../models/product";
import { dataSource } from "@medusajs/medusa/dist/loaders/database";
import {
  // alias the core repository to not cause a naming conflict
  ProductRepository as MedusaProductRepository,
} from "@medusajs/medusa/dist/repositories/product";

export const ProductRepository = dataSource.getRepository(Product).extend({
  // it is important to spread the existing repository here.
  // Otherwise you will end up losing core properties.
  // you also update the target to the extended entity
  ...Object.assign(MedusaProductRepository, { target: Product }),

  // you can add other customizations as well...
});

export default ProductRepository;
