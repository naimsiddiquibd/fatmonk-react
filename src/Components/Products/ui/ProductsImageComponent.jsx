const TEXT_IMAGES = {
  "Built with Expertise": ["/product_choose_11.jpg", "/product_choose_12.png"],
  "Customer-Centric Design": [
    "/product_choose_21.png",
    "/product_choose_22.png",
  ],
  "Continuous Innovation": ["/product_choose_31.png", "/product_choose_32.png"],
  "Scalable Solutions": ["/product_choose_41.png", "/product_choose_42.png"],
};

const ProductsImageComponent = ({ src, type }) => {
  return (
    <div className="relative px-8 py-20">
      <img
        className="h-[400px] w-[314px] object-cover border-transparent rounded-xl"
        src={TEXT_IMAGES[type][0]}
        alt="image"
      />
      <img
        className="relative bottom-28 left-20"
        src={TEXT_IMAGES[type][1]}
        alt="image"
      />
    </div>
  );
};

export default ProductsImageComponent;
