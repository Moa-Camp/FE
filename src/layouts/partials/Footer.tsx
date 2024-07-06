"use client";

import Logo from "@/components/Logo";
import Social from "@/components/Social";
import config from "@/config/config.json";
import menu from "@/config/menu.json";
import social from "@/config/social.json";
import { markdownify } from "@/lib/utils/textConverter";
import Link from "next/link";

export default function Footer() {
  const { footer } = menu;
  const { copyright } = config.params;
  const { location, email, contact, description } = config.footer_data;

  return (
    <footer className="mt-24">
      <div className="container">
        <div className="row justify-center pb-12">
          <div className="col-12">
            <div className="border-t pb-12"></div>
          </div>
          <div className="sm:col-6 md:col-6 lg:col-4">
            <div className="pr-6">
              <div className="order-0 mb-6">
                <Logo />
              </div>
              <p className="mb-0">{description}</p>
            </div>
          </div>
          <div className="mt-12 sm:col-6 md:col-6 lg:col-3 sm:mt-0">
            <div className="footer-widget">
              <h4 className="h5 mb-6">Socials</h4>
              <ul className="footer-links list-unstyled mb-6">
                <li>
                  <Link
                    className="hover:text-primary hover:underline"
                    href={`mailto:${email}`}
                  >
                    {email}
                  </Link>
                </li>
              </ul>
              {/* social icons */}
              <Social source={social.main} className="social-icons mb-8" />
            </div>
          </div>
          <div className="mt-12 sm:col-6 md:col-6 lg:col-2 lg:mt-0">
            <div className="footer-widget">
              <h4 className="h5 mb-6">Quick Links</h4>
              <ul className="footer-links list-unstyled">
                {footer.map((item, i) => (
                  <li
                    className={footer.length - 1 === i ? "mb-0" : "mb-4"}
                    key={i}
                  >
                    <Link
                      className="hover:text-primary hover:underline "
                      href={item.url}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12 sm:col-6 md:col-6 lg:col-3 lg:mt-0">
            <div className="footer-widget">
              <h4 className="h5 mb-6">Location &amp; Contact</h4>
              <ul className="footer-links list-unstyled">
                <li className="mb-4">{location}</li>
                <li>
                  <Link
                    className="hover:text-primary hover:underline"
                    href={`tel:${contact}`}
                  >
                    {contact}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row justify-center border-t border-border py-6">
          <div className="col-12 text-center">
            <p
              className="content text-text"
              dangerouslySetInnerHTML={markdownify(copyright)}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
