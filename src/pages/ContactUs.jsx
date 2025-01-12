import { useFormik } from "formik";
import {contactUsSchema} from "../schemas";

const initialValues = {
  fullName: "",
  email: "",
  mobileNo: "",
  message: "",
};

const ContactUs = () => {

  const {values, errors, touched, handleChange, handleBlur, handleSubmit} = useFormik({
    initialValues: initialValues,
    validationSchema: contactUsSchema,
    onSubmit: (values, {resetForm}) => {
      console.log(values);
      resetForm();
    }
  });

  return (
    <div className="container">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-7xl py-6 md:py-12">
          <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
            {/* contact from */}
            <div className="flex items-center justify-center">
              <div className="px-2 md:px-12">
                <p className="text-2xl font-bold text-gray-900 md:text-4xl">
                  Get in touch
                </p>
                <p className="mt-4 text-lg text-gray-600">
                  Our friendly team would love to hear from you.
                </p>
                <form action="" className="mt-8 space-y-4" onSubmit={handleSubmit}>
                <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="full_name"
                      >
                        Full Name
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border text-gray-900 border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-900 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        name="fullName"
                        placeholder="First Name"
                        value={values.fullName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.fullName && touched.fullName ? (
                      <small className="text-red-600">{errors.fullName}</small>
                    ) : (
                      null
                    )}
                    </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-900 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="text"
                      id="email"
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? <small className="text-red-600">{errors.email}</small> : null}
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="phone_number"
                    >
                      Phone number
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-900 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="tel"
                      id="mobileNo"
                      placeholder="Phone number"
                      value={values.mobileNo}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.mobileNo && touched.mobileNo ? <small className="text-red-600">{errors.mobileNo}</small> : null}
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-900 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      id="message"
                      placeholder="Leave us a message"
                      name="message"
                      cols={3}
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.message && touched.message ? <small className="text-red-600">{errors.message}</small> : null}
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <img
              alt="Contact us"
              className="hidden max-h-full w-full rounded-lg object-cover lg:block"
              src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGhhcHB5JTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
