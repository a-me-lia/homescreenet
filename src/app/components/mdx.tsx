import { useMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";


interface MdxProps {
    code: string;
  }

  const CustomLink = (props: any) => {
    const href = props.href;
  
    if (href.startsWith('/')) {
      return (
        <Link href={href} {...props}>
          {props.children}
        </Link>
      );
    }
  
    if (href.startsWith('#')) {
      return <a {...props} />;
    }
  
    return <a target="_blank" rel="noopener noreferrer" {...props} />;
  };

  const CustomP = (props:any) => {

    return(
      <p className="">{props.children}</p>
    )
    }

  const components = {
    a: CustomLink,
    p: CustomP
  };

export function Mdx({ code }: MdxProps) {
    const Component = useMDXComponent(code);
  
    return (
      <article className="prose prose-quoteless prose-neutral dark:prose-invert">
        <Component components={{ ...components }} />
      </article> 
    );
  }
  