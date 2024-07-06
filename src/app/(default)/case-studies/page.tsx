import { getListPage, getSinglePage } from "@/lib/contentParser";
import { plainify } from "@/lib/utils/textConverter";
import CallToAction from "@/partials/CallToAction";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import Image from "next/image";
import Link from "next/link";

const CaseStudies = () => {
  const caseStudyIndex = getListPage("/case-studies/_index.md");
  const caseStudies = getSinglePage("/case-studies");
  const { title, description } = caseStudyIndex.frontmatter;

  return (
    <>
      <SeoMeta title={title} description={description} />
      <PageHeader title={title} />
      <section className="section">
        <div className="container">
          <div className="row justify-center">
            <div className="md:col-10 lg:col-8">
              <div className="row justify-center">
                {caseStudies.map((item, i: number) => (
                  <div className="relative md:col-6" data-aos="fade-in" key={i}>
                    <div className="mt-8 h-[calc(100%-1.875rem)] rounded-2xl p-6 shadow-[0_10px_34px_rgb(0,0,0,0.05)]">
                      <h3 className="text-h3-sm font-semibold">
                        {item.frontmatter.title}
                      </h3>
                      <div className="flex items-center">
                        <div className="max-w-[55%] flex-auto">
                          <div className="content">
                            <p>{plainify(item.content.slice(0, 30))}</p>
                          </div>
                          <Link
                            href={`/case-studies/${item.slug}`}
                            className="stretched-link inline-block font-normal text-primary after:absolute after:inset-0"
                          >
                            Read More
                            <i className="las la-angle-right ms-1" />
                          </Link>
                        </div>
                        <div className="pl-6">
                          <Image
                            src={item.frontmatter.image}
                            width={160}
                            height={40}
                            alt={item.frontmatter.title}
                            className="h-10 object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <CallToAction />
    </>
  );
};

export default CaseStudies;
