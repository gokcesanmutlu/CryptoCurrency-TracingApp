import MainPageView from "../views/MainPageView"
import Model from "../models/MainPageModel"
import { useEffect, useState } from "react"

const MainPageController = () => {
    const [coins, setCoins] = useState([]);
    const [page, setPage] = useState(1);
   // console.log(page)

    // sayfa sayısı her arttığında bir sonraki sayfanınverilerini alıp coins state'ine eklicez
    useEffect(() => {
        Model.getCoins(page).then((data) => setCoins(coins.concat(data)))
    }, [page])

    return <MainPageView setPage={setPage} coins={coins} />
}

export default MainPageController;