import { useState } from "react";
import { ArrowRight } from "lucide-react";

const CreatePost = () => {
  const [data, setData] = useState("");

  return (
    <div className="container">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-7xl py-5 md:py-5">
          <div className="flex items-center justify-center">
            <div className="w-4/5 px-2 md:px-12">
              <p className="text-2xl font-bold text-gray-900 md:text-4xl">
                Create a Blog Post
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Write From your Heart ❤️
              </p>
              <form id="blogForm" className="mt-8 space-y-4">
                <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="first_name"
                    >
                      First Name
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="text"
                      id="first_name"
                      placeholder="First Name"
                      value={data}
                      onChange={(e) => setData(e.target.value)}
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="last_name"
                    >
                      Last Name
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="text"
                      id="last_name"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="grid w-full  items-center gap-1.5">
                  <label
                    className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                    type="text"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="grid w-full  items-center gap-1.5">
                  <label
                    className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="phone_number"
                  >
                    Phone number
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                    type="tel"
                    id="phone_number"
                    placeholder="Phone number"
                  />
                </div>
                <div className="grid w-full  items-center gap-1.5">
                  <label
                    className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="phone_number"
                  >
                    Choose a Category
                  </label>
                  <select
                    id="category"
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                  >
                    <option defaultValue={"Select"} disabled>
                      Choose a Category
                    </option>
                    <option className="bg-indigo-500">Education</option>
                    <option>History</option>
                    <option>Science</option>
                    <option>Current Affairs</option>
                    <option>General Knowledge</option>
                  </select>
                </div>
                <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="first_name"
                    >
                      Main Image
                    </label>
                    <input
                      className="flex h-10 w-full 
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-full file:border-0
                      file:text-sm file:font-semibold
                      file:bg-violet-50 file:text-violet-700
                      hover:file:bg-violet-100 cursor-pointer"
                      type="file"
                      id="first_name"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="last_name"
                    >
                      Side Images <small>optional</small>
                    </label>
                    <input
                      className="flex h-10 w-full 
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-full file:border-0
                      file:text-sm file:font-semibold
                      file:bg-violet-50 file:text-violet-700
                      hover:file:bg-violet-100 cursor-pointer"
                      type="file"
                      id="last_name"
                      placeholder="Last Name"
                      multiple
                    />
                  </div>
                </div>
                <div className="grid w-full  items-center gap-1.5">
                  <label
                    className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="phone_number"
                  >
                    Blog Content
                  </label>
                  <textarea
                    className="flex w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                    type="text"
                    id="blog_content"
                    placeholder="Blog Content"
                    rows={10}
                  />
                  <small>Blog Content should be atleast 100 words</small>
                </div>

                <button
                  type="button"
                  className="mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Send Post
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
