import React from 'react'

export default function GridView(props) {

    return (
        <div className="grid">
            {props.data.map(obj => (<div class="item">  
            <img key={obj.id} class="itemImg" src={obj.picture}></img>
            <div className="itemText">{obj.first_name} {obj.last_name}
            <br></br>{obj.title}</div></div>))}
        </div>
    )
}
