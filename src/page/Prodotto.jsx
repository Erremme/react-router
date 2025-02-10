import { useEffect , useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios";

export default function Prodotto(){
    const [prodotto , setProdotto] = useState({})

    const {id} = useParams()

    useEffect(() => {
      axios.get(`http://localhost:3000/prodotti/${id}`).then(function(res){
        setProdotto(res.data)
        
      })
    }, [id]);

    return (
        <div className="  max-w-6xl mx-auto py-16 font-semibold">
            <h1 className="text-5xl text-center mb-6">{prodotto.titolo}</h1>
            <div className="grid grid-cols-12  ">
                <div className="col-span-10  ">
                    <img className="w-full" src={prodotto.immagine} alt="" />
                </div>
                <div className="bg-gray-300 shadow-2xl col-span-2 px-3">
                    <h3 className="font-medium text-2xl py-3 text-center">Ingredienti:</h3>
                    {prodotto.ingredienti &&
                    <ul className="gap-y-4">
                        {prodotto.ingredienti.map((indrediente ,index) =>{
                            return(
                                <li className=" text-md uppercase" key={index}>{indrediente};</li>
                            )
                        })}
                    </ul>}
                </div>
            </div>
            <div>
                <div className="max-w-full bg-gray-300 shadow-2xl p-3">
                    <h3 className="font-medium text-3xl pb-3 text-center">Descrizione</h3>
                    <p>{prodotto.descrizione}</p>
                </div>
            </div>
        </div>
    )
}