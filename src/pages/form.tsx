import { useFormik } from "formik";
import * as Yup from "yup";

interface fromProps {
  name: string;
  address: string;
  email: string;
  contact: string;
  photo: any;
  cv: any;
}

const validationSchema = Yup.object<fromProps>().shape({
  name: Yup.string().required("Name is required"),
  address: Yup.string().required("Address is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  contact: Yup.string()
    .matches(/^\d{10}$/, "Invalid contact number")
    .required("Contact is required"),
  photo: Yup.mixed().required("Photo is required"),
  cv: Yup.mixed().required("CV is required"),
});

const FileUploadForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      email: "",
      contact: "",
      photo: null,
      cv: null,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form data:", values);
    },
  });

  return (
    <div className="m-5">
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border border-gray-300text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-gray-800"
          />
          {formik.touched.name && formik.errors.name && (
            <div className="text-red-600">{formik.errors.name}</div>
          )}
        </div>

        <div>
          <label
            htmlFor="address"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            className="border border-gray-300text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-gray-800"
          />
          {formik.touched.address && formik.errors.address && (
            <div className="text-red-600">{formik.errors.address}</div>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border border-gray-300text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-gray-800"
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-600">{formik.errors.email}</div>
          )}
        </div>

        <div>
          <label
            htmlFor="contact"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Contact
          </label>
          <input
            type="text"
            maxLength={10}
            id="contact"
            name="contact"
            className="border border-gray-300text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-gray-800"
          />
          {formik.touched.contact && formik.errors.contact && (
            <div className="text-red-600">{formik.errors.contact}</div>
          )}
        </div>
        <br />
        <br />

        <div className="flex">
          <div className="flex flex-col gap-5">
            <label htmlFor="photo">Upload Photo</label>
            <input
              type="file"
              id="photo"
              name="photo"
              accept="image/*"
              onChange={(event: any) =>
                formik.setFieldValue("photo", event?.currentTarget?.files[0])
              }
              onBlur={formik.handleBlur}
            />
            {formik.touched.photo && formik.errors.photo && (
              <div className="text-red-600">{formik.errors.photo}</div>
            )}
          </div>
          <div className="flex flex-col gap-5">
            <label htmlFor="cv">Upload CV</label>
            <input
              type="file"
              id="cv"
              name="cv"
              accept=".pdf,.doc,.docx"
              onChange={(event: any) =>
                formik.setFieldValue("cv", event?.currentTarget?.files[0])
              }
              onBlur={formik.handleBlur}
            />
            {formik.touched.cv && formik.errors.cv && (
              <div className="text-red-600">{formik.errors.cv}</div>
            )}
          </div>
        </div>
        <br />
        <br />
        <button
          type="submit"
          className="bg-blue px-[1rem] py-[0.5rem] text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FileUploadForm;
