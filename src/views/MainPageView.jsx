import { FaBitcoin } from "react-icons/fa"
import CardView from './CardView';
import { millify } from 'millify';
import { useNavigate } from "react-router-dom";

const MainPageView = ({ coins, setPage }) => {
  const navigate = useNavigate()
  // console.log(coins)

  return (
    <div className='container-xl mt-5'>
      <h4 className="d-flex align-items-center gap-3">
        <FaBitcoin />
        <span>Welcome to CoinList</span>
      </h4>

      <p>CoinList a perfect source to follow crypto currency and digital assets around the world</p>

      <div className="d-flex flex-wrap gap-4 justify-content-around my-5">
        {coins?.slice(0, 3).map((data, key) => (
          <CardView data={data} key={key} />
          // buraya nav verebilmen için önce cardview'da kurman gerek navigate'i
        ))}
      </div>

      <table className="table table-dark table-hover mt-5 table-responsive"
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Coin</th>
            <th>Price</th>
            <th>Market Volume</th>
            <th>Transaction Volume</th>
            <th>%Change (24h)</th>
          </tr>
        </thead>
        <tbody>
          {coins?.map((coin, key) => (
            <tr key={key} onClick={() => navigate(`/coin/${coin.id}`)}>
              <td>{coin.rank}</td>
              <td>
                <span className="text-warning fw-bold me-1">{coin.symbol}</span>
                <span>{coin.name}</span>
              </td>
              <td>{millify(coin.priceUsd)}</td>
              <td>{millify(coin.marketCapUsd)}</td>
              <td>{millify(coin.volumeUsd24Hr)}</td>
              <td className={coin.changePercent24Hr >= 0 ? "up" : "down"}>{Number(coin.changePercent24Hr).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="d-flex justify-content-center my-5">
        {/* setPage'e bir fonk. verildiğinde=> özellik olarak state'in son değerini param olarak alır. 
        Buna genelde prev. deriz. 
        böylece page'i bu sayfaya aktarmak yerine prev+1 yaparak aynı sonuca ulaşırız ya da page dersek page+1
        ama page'i bu sayfada doğrudan kullanmamız gerekse, set page olmadan, örn suan x'inci sayfadayız. desek burada
        page'i diğer sayfadan prop olarak göndermemiz gerekirdi */}
        <button onClick={() => setPage((prev) => prev + 1)} id="more">For More..</button>
      </div>
    </div >)
}

export default MainPageView