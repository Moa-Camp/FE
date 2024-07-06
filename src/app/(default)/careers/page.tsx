import Circle from "@/components/Circle";
import DynamicIcon from "@/helpers/DynamicIcon";
import MDXContent from "@/helpers/MDXContent";
import { getListPage, getSinglePage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import Link from "next/link";

const Careers = () => {
  const careerIndex = getListPage("/careers/_index.md");
  const careers = getSinglePage("careers");

  return (
    <>
      <SeoMeta
        title={careerIndex.frontmatter.title}
        meta_title={careerIndex.frontmatter.title}
        description={careerIndex.frontmatter.career.subtitle}
      />
      <PageHeader title={careerIndex.frontmatter.title} />
      <MDXContent content={careerIndex.content} />
      <div className="section career" id="open-position">
        <div className="container relative">
          <div className="row justify-center">
            <div className="col-12 lg:col-10">
              <div className="px-4 py-20">
                <div className="section-title">
                  <p
                    dangerouslySetInnerHTML={markdownify(
                      careerIndex.frontmatter.career.subtitle
                    )}
                    className="mb-4 text-[0.9rem] uppercase"
                  />
                  <h2
                    dangerouslySetInnerHTML={markdownify(
                      careerIndex.frontmatter.career.title
                    )}
                    className="title"
                  />
                </div>
                <div className="row justify-center pt-6">
                  {careers.map((item, index: number) => (
                    <div
                      className="relative md:col-5 "
                      data-aos="fade-up"
                      key={index}
                    >
                      <div className="mb-6 rounded-2xl bg-white px-4 py-8 text-center shadow-[0_10px_34px_rgb(0,0,0,0.05)]">
                        <h3 className="h5 mb-2 font-semibold">
                          {item.frontmatter.title}
                        </h3>
                        <h6 className="mb-4 text-sm text-black/80">
                          {item.frontmatter.job_nature}
                        </h6>
                        <Link
                          href={`/careers/${item.slug}`}
                          className="stretched-link  flex items-center justify-center text-base font-semibold text-primary after:absolute after:inset-0"
                        >
                          View Listing
                          <span className="ml-1 text-sm">
                             <DynamicIcon icon="FaChevronRight" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="has-circle has-bg-animate h-full" data-aos="fade-in">
            <Circle classes={"top-[50px] left-[11%] ratio-32"} />
            <Circle classes={"bottom-[13%] left-[3%] ratio-37"} />
            <Circle classes={"bottom-[30%] left-[20%] ratio-20"} />
            <Circle classes={"top-[6.25rem] right-[12%] ratio-47"} />
            <Circle classes={"bottom-[30%] right-[4%] ratio-37"} />
            <Circle classes={"bottom-[12%] right-[19%] ratio-20"} />
            <Circle classes={"top-[30%] right-[2%] ratio-20"} />
            <Circle classes={"top-[24%] left-[27%] ratio-37"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;
