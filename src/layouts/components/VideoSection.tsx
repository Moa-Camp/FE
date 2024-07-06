import { markdownify } from "@/lib/utils/textConverter";
import Circle from "./Circle";
import VideoComponent from "./VideoComponent";

type Props = {
  intro: {
    subtitle: string;
    title: string;
    description: string;
    video_id: string;
    thumbnail: string;
  };
};

function VideoSection({ intro }: Props) {
  return (
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
        <div
          className="has-circle has-bg-animate aos-init aos-animate h-full"
          data-aos="fade-in"
        >
          <Circle classes={"top-[50px] left-[11%] ratio-32 "} />
          <Circle classes={"top-[29%] left-[3%]ratio-85 fill "} />
          <Circle classes={"top-[45%] left-[22%] ratio-20 fill"} />
          <Circle classes={"bottom-[35%] left-[15%] ratio-47 "} />
          <Circle classes={"bottom-[8%] left-[6%] ratio-62 "} />
          <Circle classes={"top-[100px] right-[12%] ratio-20 fill "} />
          <Circle classes={"top-[30%] right-[2%] ratio-73 "} />
          <Circle classes={"top-[52%] right-[19%] "} />
          <Circle classes={"top-[55%] right-[33%] ratio-20 fill "} />
          <Circle classes={"bottom-[20%] right-[5%] ratio-65 fill "} />
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
  );
}

export default VideoSection;
