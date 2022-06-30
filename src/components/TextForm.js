import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>
    {
        console.log("UpperCase Was Clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showalert("converted to upper case","successs");
    }
    const handlelowClick=()=>
    {
        console.log("UpperCase Was Clicked"+ text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showalert("converted to lower case","successs");
    }
    const handleclear=()=>
    {
        // console.log("UpperCase Was Clicked"+ text);
        let newText='';
        setText(newText);
        props.showalert("text clear","successs");
    }
    const handleOnChange=(event)=>
    {
        console.log("On Change");
        setText(event.target.value);
        
    }
    const[text,setText]=useState('');
    return (
        <>
        <div className="container"style={{color:props.mode==='dark'?'white':'black'}}>
            <h1 >{props.heading}</h1>
        <div className="mb-3">
        {/* <label for="myBox" class="form-label">Example textarea</label> */}
        <textarea className="form-control"value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handlelowClick}>Convert To LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleclear}>Clear Text</button>

        </div>
        <div className="container my-3"style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>Your Text Summery</h2>
            <p>{text.split(" ").length} words and {text.length} character</p>
            <p>{0.008*text.split(" ").length}  Minute Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Something To Preview It"}</p>
        </div>
        </>
    )
}
