import { useParams } from "react-router-dom";
import Navbar from "../../Components/Shared/Navbar/Navbar";
import BlogTextSection from "../../Components/BlogDetails/BlogTextSection";
import Footer from "../../Components/Footer/Footer";

const BlogDetailsPage = () => {
  const { id } = useParams();
  return (
    <div className="min-h-[100vh] bg-monkwhite">
      <Navbar type={"black"} />
      <BlogTextSection />
      <Footer />
    </div>
  );
};

export default BlogDetailsPage;
