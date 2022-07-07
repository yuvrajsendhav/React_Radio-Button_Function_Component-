import { useState } from "react"

let Radioex = () =>
{
    var [u,setU]=useState(0);
    let Entercourse =  (e) =>
    {
        setU(e.target.value);
    }
    let Display = (e) =>
    {
        alert(u);
        e.preventDefault();
    }
    return(
        <div>
            <input type="radio" value="java" name="course" onClick={ (e) => Entercourse (e) } />JAVA
            <br/>
            <input type="radio" value="React" name="course" onClick={ (e) => Entercourse (e) } />REACT
            <br/>
            <input type="radio" value="Python" name="course" onClick={ (e) => Entercourse (e) } />PYTHON
            <br/>
            <input type="button" value="Click" onClick={(e) => Display(e)} />
            <p>{u}</p>
        </div>
    )
}
export default Radioex;