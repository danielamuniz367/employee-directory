import React from 'react'
import { Link } from "react-router-dom";

export default function GridView(props) {
    console.log(props)
    return (
        <>
            <Link to="/"><button className="view-btn">Back to Table View</button></Link>
            <div className="grid">
                {props.data.map(obj => (<div class="item">  
                <img key={obj.id} class="itemImg" src={obj.picture}></img>
                <div className="itemText">{obj.first_name} {obj.last_name}
                <br></br>{obj.title}</div></div>))}
            </div>
        </>
    )
}
