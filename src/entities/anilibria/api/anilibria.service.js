import axios from "axios";

const AnilibiriaService = () => {
    const BASE_URL = 'https://anilibria.top/api/v1'

    const getAnimeCatalog = async () => {
        try {
            const {data} = await axios.get(`${BASE_URL}/anime/catalog/releases`)

            return data.data
        } catch (error) {
            console.log(error)
        }
    }

    return {
        getAnimeCatalog,
    }
}

export default AnilibiriaService;