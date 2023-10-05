import Image from "next/image";
import Link from "next/link";

const rowClassnames = [
    'row-span-1',
    'row-span-2'
]

const colClassnames = [
    'col-span-1',
    'col-span-2'
]

interface CardProps {
    rows:1|2, cols:1|2, title: string; time: string, borderClassname:string, bgClassname:string, image?: string, alt?:string, href?:string, children:React.ReactNode
  }





export const ExperienceCard: React.FC<CardProps> = ({children, rows, cols, title, time, borderClassname, bgClassname, image, alt, href}) => {
    return(
        <div className={`${rowClassnames[rows-1]} ${colClassnames[cols-1]} h-max ${borderClassname} rounded-lg p-0.5 font-light`}>
        <div className={`w-full h-full ${bgClassname} p-4 rounded-lg`}>
          <div className="flex flex-row justify-between items-center w-full">
            <h3 className="font-mono text-[20px] ">{title}</h3>
            {!(image && alt && href )&& (
             <div className="relative w-40 h-10"></div>
            )}
            {image && alt && href && (
              <Link href={href} className="relative w-40 h-10">
              <Image src={image} alt={alt} className="object-cover" fill></Image>
            </Link>
            )}
          </div>
          <div className="w-full h-[1px] bg-black/25 my-1"></div>
          <div className="font-mono text-[14px]">{time}</div>
          {children}
        </div>
      </div>
    )
}