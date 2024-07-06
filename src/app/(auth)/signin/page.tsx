import Logo from "@/components/Logo";
import Image from "next/image";
import Link from "next/link";

const Signin = () => {
  return (
    <>
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
                <h2 className="title">Sign In</h2>
              </div>
              <form method="POST">
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

                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="cursor-pointer rounded-sm text-[#0d6efd] focus:ring-0 focus:ring-transparent"
                    id="save-info"
                    checked
                  />
                  <label
                    htmlFor="save-info"
                    className="custom-control-label font-medium text-theme-dark/70"
                    role="button"
                  >
                    Remember Me
                  </label>
                </div>

                <button className="btn btn-primary mt-6 w-full">
                  Submit Now
                </button>
              </form>
              <p className="mb-0 mt-3 text-center">
                Dont Have An Account?{" "}
                <Link className="text-primary hover:underline" href="/signup">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signin;
