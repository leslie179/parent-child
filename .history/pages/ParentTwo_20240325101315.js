import { useState } from "react";
import Child

export default function ParentTwo() {
    const [data, setData] = useState();

    const childToParent = (childData) => {
        setData(childData);
    }

    return(
        <>
            {data}

        </>
    )

}