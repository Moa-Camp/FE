import ContactSocial from "@/components/ContactSocial";
import config from "@/config/config.json";
import { getListPage } from "@/lib/contentParser";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import { RegularPage } from "@/types";
import Image from "next/image";
import social from "@/config/social.json";
import CallToAction from "@/partials/CallToAction";

const Contact = async () => {
  const data: RegularPage = getListPage("pages/contact.md");
  const { frontmatter } = data;
  const { title, description, meta_title, image } = frontmatter;
  const { contact_form_action } = config.params;
  const { email, phone } = config;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <PageHeader title={title} />
      <section className="section">
        <div className="container">
          <div className="row items-center justify-center">
            <div
              className="mb-12 text-center md:col-8 lg:col-5 lg:mb-0"
              data-aos="fade-up"
            >
              <div className="pr-0 lg:pr-12">
                <Image
                  src="/images/contact.webp"
                  height={459}
                  width={575}
                  alt="contact image"
                  className="max-w-full"
                />
              </div>
            </div>
            <div className="md:col-10 lg:col-5" data-aos="fade-up">
              <div className="rounded-2xl p-8 pb-10 shadow">
                <div className="mb-6">
                  <h3 className="h5 font-semibold">Send A Message</h3>
                </div>
                <form action={contact_form_action} method="post">
                  <div className="mb-6">
                    <label
                      className="mb-2 block font-medium text-theme-dark/80"
                      htmlFor="name"
                    >
                      Full Name
                    </label>
                    <input
                      className="form-control shadow-none"
                      id="name"
                      name="Full Name"
                      type="text"
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      className="mb-2 block font-medium text-theme-dark/80"
                      htmlFor="email"
                    >
                      Email Address
                    </label>
                    <input
                      className="form-control shadow-none"
                      id="email"
                      name="Email Address"
                      type="email"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      className="mb-2 block font-medium text-theme-dark/80"
                      htmlFor="message"
                    >
                      Your Message
                    </label>
                    <textarea
                      className="form-control h-auto shadow-none"
                      id="message"
                      name="Comment"
                      rows={4}
                      required
                    ></textarea>
                  </div>
                  <button
                    className="btn btn-primary mt-6 w-full"
                    type="submit"
                    aria-label="Send Message"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="section pb-0">
            <div className="row justify-center">
              <div className="col-12">
                <div className="section-title text-center" data-aos="fade-up">
                  <p className="uppercase">Contact us</p>
                  <h2 className="title">Get In Touch</h2>
                </div>
              </div>
              <div
                className="contact-widget md:col-6 lg:col-4 xl:col-3"
                data-aos="fade-up"
              >
                <div className="rounded-lg px-6 py-12 text-center shadow">
                  <h3 className="mb-6 text-h5">{phone.title}</h3>
                  <ul className="list-unstyled">
                    {phone.contact.map((item, i: number) => (
                      <li key={i}>
                        <a href="tel:+704-555-0127">
                          <i className="las la-phone" />
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div
                className="contact-widget md:col-6 lg:col-4 xl:col-3"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="rounded-lg px-6 py-12 text-center shadow">
                  <h3 className="mb-6 text-h5">{email.title}</h3>
                  <ul className="list-unstyled">
                    {email.contact.map((item, i: number) => (
                      <li key={i}>
                        <a href="mailto:info@andromeda.io">
                          <i className="las la-envelope-open-text" />
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div
                className="contact-widget aos-init aos-animate md:col-6 lg:col-4 xl:col-3"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="rounded-lg px-6 py-12 text-center shadow">
                  <h3 className="mb-6 text-h5">Social Media</h3>
                  <ContactSocial source={social} className="contact-social" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default Contact;
