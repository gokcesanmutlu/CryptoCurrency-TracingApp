import DetailView from '../views/DetailView'
import Model from "../models/DetailModel"
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const DetailController = () => {
  const [coin, setCoin] = useState(null);

  //1 urlden id'i al
  const { id } = useParams();

  //2 coinin detay verilerini ve geçmişini al
  useEffect(() => {
    Model.getCoinDetails(id).then((data) => setCoin(data))
  }, []);

  // model bir örnek oluşturma
  // örnek oluştururken coin bilgilerini gönderdik
  // Model ise gönderdiğimiz bilgiler ile birlikte view bileşeninde kullanacağımız infoFields verisini oluşturdu
  const model = new Model(coin)
  // console.log(model)

  return <DetailView model={model} />
}

export default DetailController;