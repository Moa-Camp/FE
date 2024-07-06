"use client";

import Logo from "@/components/Logo";
import config from "@/config/config.json";
import menu from "@/config/menu.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export interface ChildNavigationLink {
  name: string;
  url: string;
}

export interface NavigationLink {
  name: string;
  url: string;
  hasChildren?: boolean;
  children?: ChildNavigationLink[];
}

const Header = () => {
  // distructuring the main menu from menu object
  const { main }: { main: NavigationLink[] } = menu;
  const { settings } = config;
  // get current path
  const pathname = usePathname();

  return (
    <header className="header" id="header">
      <nav className="navbar container">
        {/* <!-- logo --> */}
        <div className="order-0">
          {/* <Logo /> */}
          <h3>(로고) Moacamp</h3>
        </div>
        {/* <!-- navbar toggler --> */}
        {/* <input id="nav-toggle" type="checkbox" className="hidden" />
        <label
          id="show-button"
          htmlFor="nav-toggle"
          className="order-2 flex cursor-pointer items-center lg:order-1 lg:hidden"
        >
          <svg className="h-6 fill-current" viewBox="0 0 20 20">
            <title>Menu Open</title>
            <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z"></path>
          </svg>
        </label> */}
        {/* <label
          id="hide-button"
          htmlFor="nav-toggle"
          className="order-2 hidden cursor-pointer items-center lg:order-1"
        >
          <svg className="h-6 fill-current" viewBox="0 0 20 20">
            <title>Menu Close</title>
            <polygon
              points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
              transform="rotate(45 10 10)"
            ></polygon>
          </svg>
        </label> */}
        {/* <!-- /navbar toggler --> */}

        <ul
          id="nav-menu"
          className="navbar-nav order-3 hidden w-full flex-col pt-10 text-center lg:order-1 lg:flex lg:w-auto lg:flex-row lg:space-x-2 lg:pt-0 lg:text-left"
        >
          {main.map((menu, index: number) => (
            <React.Fragment key={index}>
              {menu.hasChildren ? (
                <li
                  className="nav-item nav-dropdown group relative cursor-pointer "
                  id="dropdown-button"
                >
                  <span
                    className={`nav-link inline-flex items-center lg:px-[0.625rem] lg:py-[0.9rem] xl:px-[1.06rem] ${menu.children?.map(({ url }) => url).includes(pathname) ||
                      menu.children
                        ?.map(({ url }) => `${url}/`)
                        .includes(pathname)
                      ? "active"
                      : ""
                      }`}
                  >
                    {menu.name}
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </span>
                  <ul
                    id="dropdown"
                    className="nav-dropdown-list hidden duration-300 lg:invisible lg:absolute lg:block lg:h-auto lg:w-[13.5rem] lg:opacity-0 lg:group-hover:visible lg:group-hover:opacity-100"
                  >
                    {menu.children?.map((child, i) => (
                      <li
                        key={i}
                        className={`nav-dropdown-item rounded-md hover:bg-primary/10`}
                      >
                        <Link
                          href={child.url}
                          className={`nav-dropdown-link block px-[0.9rem] py-2 ${(pathname === `${child.url}/` ||
                            pathname === child.url) &&
                            "active"
                            }`}
                        >
                          {child.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li className="nav-item">
                  <Link
                    href={menu.url}
                    className={`nav-link block py-2 lg:px-[0.625rem] lg:py-[0.9rem] xl:px-[1.06rem] ${(pathname === `${menu.url}/` || pathname === menu.url) &&
                      "active"
                      }`}
                  >
                    {menu.name}
                  </Link>
                </li>
              )}
            </React.Fragment>
          ))}
          {/* <li className="ml-autoflex order-1 text-center md:ml-0 lg:order-2 lg:hidden">
            <Link className="btn btn-primary" href="/signup">
              Sign Up Now
            </Link>
          </li> */}
        </ul>
        <div className="ml-autoflex order-1 hidden items-center md:ml-0 lg:order-2 lg:flex">
          <Link className="btn btn-primary" href="/signup">
            Log In
          </Link>
          <Link className="btn btn-primary" href="/signup">
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
