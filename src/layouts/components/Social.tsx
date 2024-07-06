import DynamicIcon from "@/helpers/DynamicIcon";

export interface ISocial {
  name: string;
  icon: string;
  link: string;
}

const Social = ({
  source,
  className,
}: {
  source: ISocial[];
  className: string;
}) => {
  return (
    <ul className={className}>
      {source.map((social) => (
        <li  key={social.name} className="inline-block">
        <a
           aria-label={social.name}
           href={social.link}
           target="_blank"
           rel="noopener noreferrer nofollow"
        >
          <DynamicIcon icon={social.icon} />
        </a>
      </li>
      ))}
    </ul>
  );
};

export default Social;
