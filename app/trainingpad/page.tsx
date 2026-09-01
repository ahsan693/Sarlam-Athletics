import ProductPage from "../components/allproducts/details/details";
import { products } from "../components/allproducts/data";

export default function TrainingPadPage() {
  return <ProductPage product={products.trainingpad} />;
}