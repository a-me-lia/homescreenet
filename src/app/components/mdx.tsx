import { useMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";
import Image from "next/image";

interface MdxProps {
  code: string;
}

const CustomLink = (props: any) => {
  const href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link className="text-blue-400" href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return (
    <div className="flex flex-row ">
      <a
        className="font-semibold text-blue-400 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
      <svg
        className="mt-1 ml-2"
        width="16px"
        height="16px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Interface / External_Link">
          <path
            id="Vector"
            d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </svg>
    </div>
  );
};

const CustomP = (props: any) => {
  return (
    <p className="fancy transition-opacity duration-500 mb-6">
      {props.children}
    </p>
  );
};

const CustomH1 = (props: any) => {
  return <h1 className="text-2xl font-bold mb-4">{props.children}</h1>;
};

const CustomH2 = (props: any) => {
  return <h2 className="text-lg font-bold mb-4">{props.children}</h2>;
};

const CustomUl = (props: any) => {
  return <ul className="mb-4">{props.children}</ul>;
};

const CustomLi = (props: any) => {
  return (
    <li className="flex flex-row items-top space-x-4">
      <div className="w-2">
        <div className="h-2 w-2 mt-2 bg-gray-300 rounded-sm"></div>
      </div>
      <p>{props.children}</p>
    </li>
  );
};

const CustomHr = (props: any) => {
  return <hr className="mb-4 mt-12">{props.children}</hr>;
};

function ImageWithCaption(props: any) {
  return (
    <>
      {" "}
      <div className="relative mt-6 w-full md:h-96 h-32">
        <Image
          src={props.src}
          alt={props.alt}
          fill
          {...props}
          className="object-cover rounded-lg border-[0.5px]"
        ></Image>
      </div>
      <p className="text-[14px] opacity-60 mt-2 mb-8">{props.caption}</p>
    </>
  );
}

const components = {
  a: CustomLink,
  p: CustomP,
  h1: CustomH1,
  h2: CustomH2,
  li: CustomLi,
  ul: CustomUl,
  hr: CustomHr,
  Image: ImageWithCaption,
  Link: CustomLink,
};

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <article className="prose prose-quoteless prose-neutral dark:prose-invert">
      <Component components={{ ...components }} />
    </article>
  );
}
