

const bgColors = [
  'red-500', 
  'green-500',
  'blue-500',
  'purple-500',
  'slate-200'
]

const order = [
  'electronics', 
  'dev',
  'music',
  'life',
  'other'
]

const navItems = {
  "/": {
    name: "home",
    id: "0",
  },
  "/blog": {
    name: "blog",
    id: "1",
  },
  "/guestbook": {
    name: "guestbook",
    id: "2",
  },
  "/contact": {
    name: "contact",
    id: "3",
  },
};

export default function Tag({ tags }: { tags: string }) {
  let arr = tags.split(',')

  // arr.map((i)=>{
  //   return()
  // })




    return(
      <ul>
      {Object.entries(arr).map((key) => {

        return (
<li className={`${bgColors[order.indexOf(key)]}`}>{key}</li>
        );
      })}
      </ul>

    
}
