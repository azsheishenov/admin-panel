import {useEffect, useState} from "react";
import AnilibiriaService from "../../entities/anilibria/api/anilibria.service.js";
import {AnilibiriaCard, AnilibiriaSearchInput} from "../../components/page/Anilibiria";
import PageHeader from "../../components/widgets/PageHeader";

import stl from './index.module.css'

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
            <div className={stl.wrapper}>
                {catalog.length > 0 ?
                    catalog.map((item) => <AnilibiriaCard item={item} key={item.id}/>) : ''}
            </div>
        </>
    )
}