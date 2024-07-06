import AboutIntro from "@/components/about/AboutIntro";
import BrandSlider from "@/components/BrandSlider";
import Circle from "@/components/Circle";
import VideoComponent from "@/components/VideoComponent";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import CallToAction from "@/partials/CallToAction";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import { Video } from "@/types";
import Image from "next/image";

interface Page {
  title: string;
  intro: Video;
  service: {
    subtitle: string;
    title: string;
    description?: string;
    image: string;
  }[];
}

const About = () => {
  const data = getListPage("pages/how-it-work.md");
  const { frontmatter } = data;
  const { title, service, intro }: Page = frontmatter;

  return (
    <>
      <SeoMeta title={title} meta_title={title} />
      <PageHeader title={title} />

      <section>
        <div className="container relative text-center">
          <div className="row justify-center">
            <div className="lg:col-12"></div>
            <div className="relative z-30 py-20">
              <div className="section-title" data-aos="fade-up">
                <p
                  dangerouslySetInnerHTML={markdownify(intro.subtitle)}
                  className="mb-4 text-[0.9rem] uppercase"
                />
                <h2
                  dangerouslySetInnerHTML={markdownify(intro.title)}
                  className="title"
                />
                <p
                  dangerouslySetInnerHTML={markdownify(intro.description)}
                  className="text-[.9rem] text-text"
                />
              </div>

              <VideoComponent
                src={intro.thumbnail}
                height={370}
                width={700}
                title={intro.title}
                video_id={intro.video_id}
                video_width="w-[700px]"
                video_height="h-[370px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {service.map((el, i: number) => (
            <div className="row mb-6 items-center justify-center" key={i}>
              <div
                className={`lg:col-5 ${i % 2 !== 0 ? "order-1" : "order-0"}`}
                data-aos="fade-up"
              >
                <div className="mb-0">
                  <div className="section-title text-left">
                    <p
                      dangerouslySetInnerHTML={markdownify(el.subtitle)}
                      className="mb-4 text-[0.9rem] uppercase"
                    />
                    <h2
                      dangerouslySetInnerHTML={markdownify(el.title)}
                      className="service-title"
                    />
                    <p
                      dangerouslySetInnerHTML={markdownify(el.description!)}
                      className="text-[.9rem] text-text"
                    />
                  </div>
                </div>
              </div>
              <div
                className={`mt-4 lg:col-6 lg:mt-0 ${
                  i % 2 !== 0 ? "order-0" : "order-1"
                }`}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="pl-0 lg:pl-4">
                  <Image
                    src={el.image}
                    height={511}
                    width={575}
                    className="max-w-full"
                    alt="service"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default About;
