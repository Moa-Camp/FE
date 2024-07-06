import Logo from "@/components/Logo";
import Image from "next/image";
import { IoLogoFacebook, IoLogoGoogle } from "react-icons/io5/index.js";

function Signup() {
  return (
    <section className="section user-access">
      <div className="container">
        <div className="row items-center justify-around">
          <div
            className="col-11 sm:col-10 md:col-7 lg:col-4"
            data-aos="fade-up"
          >
            <div className="text-center">
              <div className="relative z-20 mb-8 flex justify-center">
                <Logo />
              </div>

              <p className="mb-4">
                Join Over 30000 Companys Validing
                <br />
                Proto Decision With Andromeda
              </p>
              <div className="mt-12 pt-12">
                <Image
                  src="/images/signup.webp"
                  width={436}
                  height={376}
                  alt="signup"
                />
              </div>
            </div>
          </div>
          <div
            className="user-access-form col-11 mt-24 sm:col-10 md:col-8 lg:col-4 lg:mt-0"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div className="section-title text-center">
              <h2 className="title">Sign Up</h2>
            </div>
            <form method="POST">
              <div className="mb-6">
                <label
                  className="mb-2 block font-medium text-theme-dark/70"
                  htmlFor="subject"
                >
                  Full Name
                </label>
                <input
                  className="form-control w-full"
                  name="name"
                  type="text"
                  placeholder="Your Full Name"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="mb-2 block font-medium text-theme-dark/70"
                  htmlFor="subject"
                >
                  Enter Email Address
                </label>
                <input
                  className="form-control w-full"
                  name="email"
                  type="email"
                  placeholder="Type Your Email Address"
                />
              </div>
              <div className="mb-6">
                <label
                  className="mb-2 block font-medium text-theme-dark/70"
                  htmlFor="subject"
                >
                  Password
                </label>
                <input
                  className="form-control w-full"
                  name="password"
                  type="password"
                  placeholder="Enter Your Password"
                  required
                />
              </div>

              <button className="btn btn-primary mt-6 w-full">
                Submit Now
              </button>
            </form>
            <p className="mt-6 text-center font-semibold text-theme-dark">
              Otherwise Log In With
            </p>
            <div className="block sm:flex">
              <a
                href="#"
                className="btn btn-primary mr-0 mt-4 flex w-full items-center justify-center bg-[#4064ad] sm:mr-2"
              >
                <span className="mr-2">
                  <IoLogoFacebook />
                </span>{" "}
                Facebook
              </a>
              <a
                href="#"
                className="btn btn-primary ml-0 mt-4 flex w-full items-center justify-center bg-[#e24d48] pb-0 pt-0 text-white sm:ml-2"
              >
                <span className="mr-2">
                  <IoLogoGoogle />
                </span>{" "}
                Google
              </a>
            </div>
            <p className="mb-0 mt-3 text-center">
              Already Have An Account?{" "}
              <a className="text-primary hover:underline" href="/signin">
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
