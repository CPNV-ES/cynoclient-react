import {Redirect, useParams} from "react-router-dom";
import {useBreed} from "../../common/hook/Breeds.hook";
import React from "react";

export function BreedsShowComponent() {
    const {breedId} = useParams<{ breedId: string }>();
    const {data: breed} = useBreed(Number(breedId));

    if (!breed) {
        return <Redirect to={"/breeds"}/>
    }

    return (
        <div>
            <p>{breed.link}</p>
        </div>
    )
}
