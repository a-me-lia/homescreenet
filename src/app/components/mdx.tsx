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
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
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
  return <li className="flex flex-row items-top space-x-4"><div className="w-2"><div className="h-2 w-2 mt-2 bg-gray-300 rounded-sm"></div></div><p>{props.children}</p></li>;
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
  Image: ImageWithCaption,
};

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <article className="prose prose-quoteless prose-neutral dark:prose-invert">
      <Component components={{ ...components }} />
    </article>
  );
}
