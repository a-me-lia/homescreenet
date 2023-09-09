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
      <p className="fancy transition-opacity duration-500 mb-6">{props.children}</p>
    )
    }


    const CustomH1 = (props:any) => {

      return(
        <h1 className="text-2xl font-bold mb-4">{props.children}</h1>
      )
      }

  const components = {
    a: CustomLink,
    p: CustomP,
    h1: CustomH1
  };

export function Mdx({ code }: MdxProps) {
    const Component = useMDXComponent(code);
  
  
    return (
      <article className="prose prose-quoteless prose-neutral dark:prose-invert">
        <Component components={{ ...components }} />2
      </article> 
    );
  }
  