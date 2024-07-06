import MDXContent from "@/helpers/MDXContent";
import { getSinglePage } from "@/lib/contentParser";
import SeoMeta from "@/partials/SeoMeta";
import Image from "next/image";

type Case = {
  title: string;
  description: string;
  job_nature: string;
  date: Date | string;
  draft: boolean;
  company_size: string;
  location: string;
  image: string;
};

interface CaseSingle {
  frontmatter: Case;
  slug: string;
  content: string;
}

export const dynamicParams = false;

export const generateStaticParams: () => { single: string }[] = () => {
  const cases: CaseSingle[] = getSinglePage("case-studies");

  const paths = cases.map((job) => ({
    single: job.slug,
  }));

  return paths;
};

const CareerSingle = ({
  params: { single },
}: {
  params: { single: string };
}) => {
  const allCases: CaseSingle[] = getSinglePage("case-studies");
  const singleCase = allCases.filter(
    (singeCase) => singeCase.slug === single
  )[0];
  const { title, date, location, company_size, image } =
    singleCase?.frontmatter;

  return (
    <>
      <SeoMeta title={title} meta_title={title} image={image} />
      <section className="section">
        <div className="container">
          <div className="row justify-center">
            <div className="md:col-10 lg:col-8">
              <div className="block md:flex md:items-center md:justify-between">
                <div>
                  <h1 className="font h2 font-semibold leading-[1.2]">
                    Lets Meet{" "}
                    <span className="block text-primary">{title}</span>
                  </h1>
                  <div className="mt-6 block border-t pt-6 sm:flex">
                    <div className="mr-12">
                      <p className="mb-0 text-sm font-semibold uppercase text-theme-dark/60">
                        Year
                      </p>
                      <p className="font-medium text-primary">
                        {new Date(date).getFullYear()}
                      </p>
                    </div>
                    <div className="mr-12">
                      <p className="mb-0 text-sm font-semibold uppercase text-theme-dark/60">
                        Location
                      </p>
                      <p className="font-medium text-primary">{location}</p>
                    </div>
                    <div>
                      <p className="mb-0 text-sm font-semibold uppercase text-theme-dark/60">
                        Company Size
                      </p>
                      <p className="font-medium text-primary">{company_size}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 max-w-[200px] md:mt-0">
                  <Image src={image} width={300} height={100} alt={title} />
                </div>
              </div>
              <div className="content mt-6 border-t pt-12">
                <MDXContent content={singleCase.content} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerSingle;
