import {useState} from "react"

export default function ParentOne() {
   const [data, setData] = useState();
    
   const parent = () => {
    ("This is the data from the parent page which will be passed to the child page");
   }

   return(
        <>
        
        </>
    )
}