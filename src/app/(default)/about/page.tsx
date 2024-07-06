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

interface AboutPage {
  title: string;
  description: string;
  draft: boolean;
  about_us: {
    subtitle: string;
    title: string;
    description?: string;
    image: string;
  };
  works: {
    title: string;
    subtitle: string;
    list: { title: string; content: string }[];
  };
  mission: {
    subtitle: string;
    title: string;
    description?: string;
    image: string;
  };
  video: Video;
  clients: {
    title: string;
    subtitle: string;
    brands: string[];
  };
  our_member: {
    subtitle: string;
    title: string;
    description?: string;
    list: {
      name: string;
      field: string;
      image: string;
    }[];
  };
  our_office: {
    subtitle: string;
    title: string;
    description?: string;
    countries: {
      flag: string;
      name: string;
      location: string;
    }[];
  };
}

const About = () => {
  const data = getListPage("pages/about.md");
  const { frontmatter } = data;
  const {
    title,
    description,
    about_us,
    works,
    mission,
    video,
    clients,
    our_member,
    our_office,
  }: AboutPage = frontmatter;

  return (
    <>
      <SeoMeta title={title} meta_title={title} description={description} />

      <PageHeader title={title} />

      {/* <!-- about us --> */}
      <AboutIntro data={about_us} order="left" />
      {/* <!-- about service --> */}
      <section>
        <div className="container">
          <div className="row justify-center">
            <div className="col-12">
              <div className="section-title">
                <p
                  dangerouslySetInnerHTML={markdownify(works.subtitle)}
                  className="mb-4 text-[0.9rem] uppercase"
                />
                <h2
                  dangerouslySetInnerHTML={markdownify(works.title)}
                  className="title"
                />
              </div>
            </div>
            {works.list.map((item, index: number) => (
              <div className="col-12 mb-4 lg:col-6 xl:col-5" key={index}>
                <div className="mt-6 px-0 text-center md:px-[4.5rem]">
                  <h3 className="mb-3 text-h4  font-semibold">{item.title}</h3>
                  <p className="text-sm leading-6">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <!-- our mission --> */}
      <AboutIntro data={mission} order="left" />

      {/* <!-- short video section --> */}
      <section>
        <div className="container relative">
          <div className="row items-center justify-center py-8">
            <div className="lg:col-5">
              <div className="section-title text-left" data-aos="fade-up">
                <p
                  dangerouslySetInnerHTML={markdownify(video.subtitle)}
                  className="mb-4 text-[0.9rem] uppercase"
                />
                <h2
                  dangerouslySetInnerHTML={markdownify(video.title)}
                  className="service-title"
                />
                <p
                  dangerouslySetInnerHTML={markdownify(video.description)}
                  className="text-[.9rem] text-text"
                />
              </div>
            </div>
            <div className="lg:col-5">
              <VideoComponent
                src={video.thumbnail}
                height={500}
                width={470}
                title={title}
                video_id={video.video_id}
                video_height="h-[256px]"
                video_width="w-[470px]"
              />
            </div>
          </div>
          <div className="has-circle has-bg-animate h-full" data-aos="fade-in">
            <Circle classes={"top-[19%] left-[8%] ratio-32"} />
            <Circle classes={"top-[15%] left-[29%] ratio-20"} />
            <Circle classes={"bottom-[20%] left-[35%] ratio-20"} />
            <Circle classes={"bottom-[40%] left-[3%] ratio-20"} />
            <Circle classes={"bottom-[14%] left-[14%] ratio-37"} />
            <Circle classes={"top-[6.25rem] right-[12%] ratio-20"} />
            <Circle classes={"top-[2%] right-[30%] ratio-47"} />
            <Circle classes={"top-[46%] left-[48%] ratio-37"} />

            <svg
              className="text-primary opacity-[0.15]"
              width="100%"
              height="100%"
              viewBox="0 0 1401 613"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 580C35.1785 462.015 166.359 247.408 425.652 332.866 749.767 439.688 890.318 302.84 946.338 181.583 1002.36 60.3256 1149.41-52.8479 14e2 35.4968"
                stroke="currentcolor"
                strokeWidth="4"
                strokeDasharray="10 10"
              ></path>
              <path
                d="M1398 .999977C1364.87 125.95 1233.88 353.224 974.955 262.722 651.302 149.594 510.953 294.52 455.013 422.935S252.231 671.203 2.00002 577.644"
                stroke="currentcolor"
                strokeWidth="4"
                strokeDasharray="10 10"
              ></path>
            </svg>
          </div>
        </div>
      </section>

      {/* <!-- our clients --> */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <p
                  dangerouslySetInnerHTML={markdownify(clients.subtitle)}
                  className="mb-4 text-[0.9rem] uppercase"
                />
                <h2
                  dangerouslySetInnerHTML={markdownify(clients.title)}
                  className="title"
                />
              </div>
            </div>
            <BrandSlider brands={clients.brands} />
          </div>
        </div>
      </section>

      {/* <!-- our members --> */}
      <section>
        <div className="container">
          <div className="row justify-center">
            <div className="col-12">
              <div className="section-title">
                <p
                  dangerouslySetInnerHTML={markdownify(our_member.subtitle)}
                  className="mb-4 text-[0.9rem] uppercase"
                />
                <h2
                  dangerouslySetInnerHTML={markdownify(our_member.title)}
                  className="title"
                />
                <p
                  dangerouslySetInnerHTML={markdownify(our_member.description!)}
                  className="text-[.9rem] text-text"
                />
              </div>
            </div>
          </div>
          <div className="row justify-center">
            <div className="col-12 lg:col-10">
              <div className="row justify-around">
                {our_member.list.map((item, index: number) => (
                  <div className="col-6 md:col-4 lg:col-3" key={index}>
                    <div className="text-center">
                      <div className="team-image">
                        <Image
                          src={item.image}
                          width={250}
                          height={250}
                          alt={item.name}
                          className="max-w-full rounded-full"
                        />
                      </div>
                      <h3 className="mb-3 text-h3-sm">{item.name}</h3>
                      <p className="mb-4">{item.field}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- country --> */}
      <section className="section mb-6">
        <div className="container">
          <div className="row justify-center">
            <div className="col-12 md:col-10 lg:col-8 xl:col-6">
              <div className="section-title">
                <p
                  dangerouslySetInnerHTML={markdownify(our_office.subtitle)}
                  className="mb-4 text-[0.9rem] uppercase"
                />
                <h2
                  dangerouslySetInnerHTML={markdownify(title)}
                  className="title"
                />
                <p
                  dangerouslySetInnerHTML={markdownify(description)}
                  className="text-[.9rem] text-text"
                />
              </div>
            </div>
          </div>
          <div className="row justify-center">
            <div className="xl:col-10">
              <div className="row">
                {our_office.countries.map((item, index: number) => (
                  <div className="sm:col-6 md:col-6 lg:col-3" key={index}>
                    <div className="mt-8 h-[calc(100%-1.875rem)] rounded-xl p-5 shadow-[0_0.25rem_1.5rem_rgb(0,0,0,0.05)]">
                      <Image
                        height={80}
                        width={80}
                        src={item.flag}
                        alt={item.name}
                      />
                      <h3
                        className="h5 mb-[0.625rem]"
                        dangerouslySetInnerHTML={markdownify(item.name)}
                      />
                      <p
                        dangerouslySetInnerHTML={markdownify(item.location)}
                        className="text-sm leading-6"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call_to_action */}
      {/* <CallToAction /> */}
    </>
  );
};

export default About;
