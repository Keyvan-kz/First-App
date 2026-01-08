import { useEffect, useState } from "react"

function Resize () {
    const[resizeHeight , setResizeHeight] = useState(window.innerHeight);
    const[resizeWidth , setResizeWidth] = useState(window.innerWidth);

    function detectResizeHeight () {
        setResizeHeight(window.innerHeight)
        
    }
    
    function detectResizeWidth () {
        setResizeWidth(window.innerWidth) 
    }


    window.addEventListener('resize', detectResizeHeight )
    window.addEventListener('resize', detectResizeWidth)


    useEffect (detectResizeWidth , [resizeWidth])
    useEffect (detectResizeHeight , [resizeHeight])

    return (
        <div className="m-5 bg-orange-300 p-5 w-50 rounded text-center shadow-lg shadow-gray-800">
        <h1>Height of Window</h1>
        <p>{resizeHeight}</p>
        <h1>Width of Window</h1>
        <p>{resizeWidth}</p>
        </div>
    )
}

export default Resize