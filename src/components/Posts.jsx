import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API_BASE_URL from "../conf/config";
import moment from "moment";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}`);
        setPosts(response.data.data.posts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading posts...</div>;
  }

  return (
    <div>
      <div className="mx-auto max-w-7xl px-2 lg:mt-10 md:mt-0">
        {/* TODO: add filter to show posts  
        <div className="mt-10 hidden w-full flex-col justify-between space-y-4 md:flex md:flex-row">
          <div className="flex w-full items-end border-b border-gray-300">
            {['Design', 'Product', 'Software Engineering', 'Customer Success'].map(
              (filter, index) => (
                <div
                  className="cursor-pointer px-4 py-2 text-base font-semibold leading-normal text-gray-700 first:border-b-2 first:border-black"
                  key={filter}
                >
                  {filter}
                </div>
              )
            )}
          </div>
        </div> */}

        {/* posts */}
        <div className="grid gap-6 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post.id} className="border post cursor-default">
              <img
                src={`${API_BASE_URL}${post.main_image_url}`}
                className="aspect-video w-full rounded-md"
                alt={post.main_image_alt}
              />
              <div className="min-h-min p-3">
                <p className="mt-4 w-full text-xs font-semibold leading-tight text-gray-700">
                  #{post.category}
                </p>
                <p className="mt-4 flex-1 text-base font-semibold text-gray-900 cursor-pointer">
                  <Link to={`/${post.id}`}>{post.title}</Link>
                </p>
                <p className="mt-4 w-full text-sm leading-normal text-gray-600">
                  {post.description.split(" ").slice(0, 20).join(" ")}
                  {post.description.split(" ").length > 20 && "..."}
                </p>
                <div className="mt-4 flex space-x-3 ">
                  <img
                    className="h-full w-10 rounded-lg"
                    src={`${API_BASE_URL}${post.gender_image_url}`}
                    alt={post.gender}
                  />
                  <div>
                    <p className="text-sm font-semibold leading-tight text-gray-900">
                      {post.first_name} {post.last_name}
                    </p>
                    <p className="text-sm leading-tight text-gray-600">
                    {moment(post.created_at).format("DD MMMM YYYY")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* TODO: pagination
        <div className="w-full border-t border-gray-300">
          <div className="mt-2 flex items-center justify-between">
            <div className="hidden md:block">
              <p>
                showing <strong>1</strong> to <strong>10</strong> of <strong>20</strong> results
              </p>
            </div>
            <div className="space-x-2">
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                &larr; Previous
              </button>
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Next &rarr;
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Posts;
