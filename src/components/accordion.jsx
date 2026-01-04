import { useState } from "react";

function Accordion (props) {

    const [paragraphVisibility , setParagraphVisibility] = useState('hidden')
    function hideParagraph (e) {
        if (paragraphVisibility === 'hidden') {
            setParagraphVisibility('')
        } else {
            setParagraphVisibility('hidden')
        }
        
        
        
    }

    return (
        <>
        <button className={`cursor-pointer m-5`} onClick={hideParagraph}>
            <h1>{props.title}</h1>
        </button>
        <p className={`${paragraphVisibility}`}>{props.paragraph}</p>
        
        
        </>
    )
}

export default Accordion;