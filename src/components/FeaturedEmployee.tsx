import { CardContent } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store";

const FeaturedEmployee = () => {
    const { data } = useContext(Context);
    const [featured, setFeatured] = useState<object>({});

    useEffect(() => {
        if(data){
            const randomIdx = Math.floor(Math.random() * data.length);
            setFeatured(data[randomIdx]);
        }
    }, [data]);

    return (
        <div>
            <h4>Featured Employee</h4>
            <CardContent>
            {
                featured && Object.entries(featured).map(([key, value]) => (
                    <div>{key} : {value}</div>
                ))
            }
            </CardContent>
        </div>
    )
}

export default FeaturedEmployee;