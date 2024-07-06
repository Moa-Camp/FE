import CareerForm from "@/components/CareerForm";
import MDXContent from "@/helpers/MDXContent";
import { getSinglePage } from "@/lib/contentParser";

type Job = {
  title: string;
  description: string;
  job_nature: string;
  date: Date | string;
  draft: boolean;
};

interface CareerSingle {
  frontmatter: Job;
  slug: string;
  content: string;
}

export const dynamicParams = false;

export const generateStaticParams: () => { single: string }[] = () => {
  const jobs: CareerSingle[] = getSinglePage("careers");

  const paths = jobs.map((job) => ({
    single: job.slug,
  }));

  return paths;
};

const CareerSingle = ({
  params: { single },
}: {
  params: { single: string };
}) => {
  const careers: CareerSingle[] = getSinglePage("careers");
  const job = careers.find((job) => job.slug === single);

  return (
    <section className="section">
      <div className="container">
        <div className="row justify-center">
          <CareerForm
            title={job!.frontmatter.title}
            job_nature={job!.frontmatter.job_nature}
          />
          <div className="order-0 md:col-10 lg:col-7 lg:order-1">
            <div className="pl-0 lg:pl-12">
              <h3 className="mb-6 text-primary">About the role</h3>
              <div className="content">
                <MDXContent content={job?.content} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSingle;
