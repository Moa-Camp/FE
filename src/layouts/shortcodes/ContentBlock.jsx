import { markdownify } from "@/lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const ContentBlock = ({
  title,
  subtitle,
  button_label,
  button_link,
  image,
  order,
  children,
}) => {
  return (
    <div className="section">
      <div className="container">
        <div className="row items-center justify-center">
          <div
            className={`lg:col-5 ${
              order === "right" ? "order-1" : "order-1 lg:order-0"
            }`}
          >
            <div className="section-title text-left">
              <p
                className="mb-4 text-[0.9rem] uppercase"
                dangerouslySetInnerHTML={markdownify(subtitle)}
              />
              <h2
                className="service-title"
                dangerouslySetInnerHTML={markdownify(title)}
              />
              <div className="text-[.9rem] text-text">{children}</div>
            </div>
            {button_label && (
              <Link href={button_link} className="btn btn-primary">
                {button_label}
              </Link>
            )}
          </div>
          <div
            className={`mb-6 lg:col-5 lg:mb-0 lg:mt-0 ${
              order === "right" ? "order-0" : "order-0 lg:order-1"
            }`}
          >
            <Image
              src={image}
              alt={title}
              height={320}
              width={527}
              className="h-auto w-full max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentBlock;
