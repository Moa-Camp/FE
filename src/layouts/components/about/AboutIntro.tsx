import { markdownify } from "@/lib/utils/textConverter";
import Image from "next/image";
import React from "react";
import Circle from "../Circle";

type Props = {
  data: {
    title: string;
    subtitle: string;
    image: string;
    description?: string;
  };
  order: string;
};

function AboutIntro(props: Props) {
  const {
    data: { title, subtitle, image, description },
    order,
  } = props;
  return (
    <section className="section">
      <div className="container relative">
        <div className="row items-center justify-center">
          <div
            className={`col-12 md:col-6 lg:col-4 ${
              order === "right" ? "order-1" : "order-1 md:order-0"
            }`}
          >
            <div className="section-title text-left">
              <p
                dangerouslySetInnerHTML={markdownify(subtitle)}
                className="mb-4 text-[0.9rem] uppercase"
              />
              <h2
                dangerouslySetInnerHTML={markdownify(title)}
                className="service-title"
              />
              <p
                dangerouslySetInnerHTML={markdownify(description!)}
                className="text-[.9rem] text-text"
              />
            </div>
          </div>
          <div
            className={`col-12 md:col-6 lg:col-5 ${
              order === "right" ? "order-0" : "order-0 md:order-1"
            }`}
          >
            <div className="relative">
              <div className="relative z-10 p-14">
                <Image
                  src={image}
                  height={436}
                  width={381}
                  alt={title}
                  className="w-full max-w-full rounded-2xl"
                />
                <div className="has-circle z-30 h-full w-full">
                  <Circle
                    classes={"bottom-[50%] left-[2.5rem] ratio-20 fill"}
                  />
                  <Circle
                    classes={
                      "bottom-[4.93rem] left-[1.5rem] ratio-47 bg-primary/5 "
                    }
                  />
                </div>
              </div>
              <div className="has-circle h-full w-full">
                <Circle
                  classes={"top-[0.875rem] left-[0.75rem] ratio-85 fill"}
                />
                <Circle classes={"top-[5rem] right-[41px] ratio-37"} />
                <Circle
                  classes={"bottom-[45%] right-[3.25rem] ratio-20 fill"}
                />
                <Circle
                  classes={"bottom-[1.5rem] right-[1.5rem] ratio-85 fill"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutIntro;
