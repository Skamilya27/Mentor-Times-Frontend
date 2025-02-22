import { useParams } from "react-router-dom";
import API_BASE_URL from "../conf/config";
import { useEffect, useState } from "react";
import axios from "axios";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/${id}`);
        setPost(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching post:", error);
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <div>Loading post...</div>;
  }

  return (
    <div className="container">
      <div className="mx-auto max-w-7xl px-4 mt-0">
        <section className="post-detail">
          <div className="post-detail__container">
            <div className="post-detail__header">
              <h1>{post.title}</h1>

              {/* TODO: add category tag and link to the filtered page */}
              {/* <Link to={`/`} className="btn category">
                education
              </Link> */}
            </div>

            <div className="">
              <img
                src={`${API_BASE_URL}${post.main_image_url}`}
                className="aspect-[10/4]  w-full rounded-md object-contain mt-5 mb-7 "
                alt={post.main_image_alt}
              />
            </div>
            <p className="text-justify">{post.description}</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PostDetail;
