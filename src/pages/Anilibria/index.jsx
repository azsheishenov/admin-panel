import {useEffect, useState} from "react";
import AnilibiriaService from "../../entities/anilibria/api/anilibria.service.js";
import {AnilibiriaCard, AnilibiriaSearchInput} from "../../components/page/Anilibiria";
import PageHeader from "../../components/widgets/PageHeader";

export const Anilibria = () => {
    const {getAnimeCatalog} = AnilibiriaService()
    const [catalog, setCatalog] = useState([])

    const fetchAnimeCatalog = async () => {
        const response = await getAnimeCatalog()
        setCatalog(response)
    }

    useEffect(() => {
        fetchAnimeCatalog()
    }, [])
    return (
        <>
            <PageHeader title='Каталог релизов'>
                <AnilibiriaSearchInput/>
            </PageHeader>
            <AnilibiriaCard/>
        </>
    )
}