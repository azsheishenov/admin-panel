import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import AnilibiriaService from "../../../entities/anilibria/api/anilibria.service.js";

const AnilibriaDetails = () => {
    const {getAnimeByIdentifier} = AnilibiriaService()
    const params = useParams()

    console.log(params)

    useEffect(() => {
        getAnimeByIdentifier(params.identifier)
    }, [])

    return (
        <div>
            AnilibriaDetails
        </div>
    );
};

export default AnilibriaDetails;