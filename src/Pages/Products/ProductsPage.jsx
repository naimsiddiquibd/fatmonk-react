import Footer from "../../Components/Footer/Footer";
import ProductsChoose from "../../Components/Products/ProductsChoose";
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
      <ProductsChoose />
      <Footer />
    </div>
  );
};

export default ProductsPage;
