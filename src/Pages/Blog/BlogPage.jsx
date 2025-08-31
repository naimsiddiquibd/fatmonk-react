import BlogHeader from "../../Components/Blog/BlogHeader";
import BlogPosts from "../../Components/Blog/BlogPosts";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Shared/Navbar/Navbar";
import StickyIcons from "../../Components/StickyIcons/StickyIcons";

const BlogPage = () => {
  return (
    <div>
      <Navbar type="black" />
      <StickyIcons />
      <BlogHeader />
      <BlogPosts />
      <Footer />
    </div>
  );
};

export default BlogPage;
