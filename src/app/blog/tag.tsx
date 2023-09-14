

const bgColors = [
  'red-500', 
  'green-500',
  'blue-500',
  'purple-500',
  'slate-200'
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
  let indexes = []

  for( let i = 0; i <arr.length; i++){
    indexes[i] = (arr[i].charCodeAt(0) + arr[i].charCodeAt(arr[i].length-1)) % bgColors.length-1

  }

  // arr.map((i)=>{
  //   return()
  // })




    return(
      <ul>

      </ul>
    )
}
