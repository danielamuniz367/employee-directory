import React, { useEffect } from 'react'
import { Link } from "react-router-dom";

export default function GridView() {

    useEffect(() => {
        console.log('grid rendered');
      }, []) // only for first time i want to exectute this

    return (
        <React.Fragment>
            <h1>GRID</h1>
            <Link to="/"><button className="view-btn">Back to Table View</button></Link>
        </React.Fragment>
    )
}
