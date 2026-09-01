import ProductPage from "../components/allproducts/details/details";
import { products } from "../components/allproducts/data";

export default function DetailsPage() {
  return <ProductPage product={products.details} />;
}
