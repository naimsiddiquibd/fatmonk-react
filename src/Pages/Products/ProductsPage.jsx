import ProductsHeader from "../../Components/Products/ProductsHeader";
import ProductsProjects from "../../Components/Products/ProductsProjects";
import Navbar from "../../Components/Shared/Navbar/Navbar";
import StickyIcons from "../../Components/StickyIcons/StickyIcons";

const ProductsPage = () => {
  return (
    <div>
      <Navbar type="black" />
      <StickyIcons />
      <ProductsHeader />
      <ProductsProjects />
    </div>
  );
};

export default ProductsPage;
