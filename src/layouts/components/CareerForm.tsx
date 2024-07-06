import React from "react";
import config from "@/config/config.json";

function CareerForm({
  title,
  job_nature,
}: {
  title: string;
  job_nature: string;
}) {
  const { career_form_action } = config.params;
  return (
    <div className="order-1 mt-12 md:col-10 lg:col-4 lg:order-0 lg:mt-0">
      <div className="mb-12">
        <h2 className="h3 mb-2 font-semibold text-black">{title}</h2>
        <p className="text-primary">{job_nature}</p>
      </div>
      <form method="POST" action={career_form_action}>
        <div className="mb-6">
          <label
            className="mb-2 block font-medium text-theme-dark/80"
            htmlFor="name"
          >
            First Name<span className="text-primary">{`*`}</span>
          </label>
          <input
            className="form-control w-full"
            name="first name"
            type="text"
            placeholder="First Name"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="mb-2 block font-medium text-theme-dark/80"
            htmlFor="email"
          >
            Last Name<span className="text-primary">{`*`}</span>
          </label>
          <input
            className="form-control w-full"
            type="text"
            name="last name"
            placeholder="Last Name"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="mb-2 block font-medium text-theme-dark/80"
            htmlFor="subject"
          >
            Email Address<span className="text-primary">{`*`}</span>
          </label>
          <input
            className="form-control w-full"
            name="email"
            type="email"
            placeholder="Email Address"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="mb-2 block font-medium text-theme-dark/80"
            htmlFor="subject"
          >
            Upload Cv<span className="text-primary">{`*`}</span>
          </label>
          <input
            className="form-control w-full py-3 pl-1 ring-0"
            name="file"
            type="file"
            required
          />
          <small className="block">
            only doc, pdf file allowed &amp;amp; file size will be less than 2MB
          </small>
        </div>

        <button className="btn btn-primary mt-6 w-full">Submit Now</button>
      </form>
    </div>
  );
}

export default CareerForm;
