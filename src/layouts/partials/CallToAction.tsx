import Circle from "@/components/Circle";
import config from "@/config/config.json";
import { markdownify } from "@/lib/utils/textConverter";

const CallToAction = () => {
  const {
    title,
    content,
    button: { label, link },
    enable,
  } = config.call_to_action;
  return (
    <>
      {enable && (
        <section className="overflow-hidden">
          <div className="container relative">
            <div className="row">
              <div className="lg:col-12">
                <div className="relative z-30 py-20 text-center">
                  <div className="section-title" data-aos="fade-up">
                    <h2
                      dangerouslySetInnerHTML={markdownify(title)}
                      className="title"
                    />
                    <p
                      dangerouslySetInnerHTML={markdownify(content)}
                      className="text-[.9rem] text-text"
                    />
                  </div>

                  <a href={link} className="btn btn-primary">
                    {label}
                  </a>
                </div>
                <div
                  className="has-circle has-bg-animate aos-init aos-animate h-full"
                  data-aos="fade-in"
                >
                  <svg
                    className="text-primary opacity-[0.12]"
                    width="100%"
                    height="100%"
                    viewBox="0 0 1381 283"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1379 .998871C1346.3 58.3528 1186.5 172.501 961.409 121.133 645.85 49.1205 596.5 68.5008 448.172 194.674 386.651 247.006 248.005 308.633 1 265.688"
                      stroke="currentcolor"
                      strokeWidth="4"
                      strokeDasharray="10 10"
                    />
                  </svg>
                  <Circle classes={"top-[50px] left-[11%] ratio-32"} />
                  <Circle classes={"bottom-[13%] left-[3%] ratio-85 fill"} />
                  <Circle classes={"bottom-[30%] left-[22%] ratio-47"} />
                  <Circle classes={"top-[6.25rem] right-[12%] ratio-20 fill"} />
                  <Circle classes={"bottom-[30%] right-[4%] ratio-73"} />
                  <Circle classes={"bottom-[12%] right-[19%] ratio-37"} />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CallToAction;
