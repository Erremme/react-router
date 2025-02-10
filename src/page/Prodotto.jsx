import { useEffect , useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function Prodotto(){
    const [prodotto , setProdotto] = useState({})
    const [posts , setPosts] = useState([])

    

    const {id} = useParams()

    useEffect(() => {
      axios.get(`http://localhost:3000/prodotti/${id}`).then(function(res){
        setProdotto(res.data)
        
      })
    }, [id]);


    useEffect(() =>{
        axios.get("http://localhost:3000/prodotti").then((res) =>{
            setPosts(res.data)
        })
    }, [])

    const post = posts.find((p) => p.id === parseInt(id));
    const currentIndex = posts.indexOf(post)
    const nextPost = posts[currentIndex + 1]; 
    const previousPost = posts[currentIndex - 1];
    
    
    return (
        <div className="  max-w-6xl mx-auto py-16 font-semibold">
            <div className="flex justify-between">
            {previousPost && 
            <NavLink to={`/Prodotti/${previousPost.id}`}>
                <button className="rounded-sm cursor-pointer text-amber-50 p-2 bg-blue-500 >Torna al menu my-2">Post precedente</button>
            </NavLink>}
            {nextPost && 
            <NavLink to={`/Prodotti/${nextPost.id}`}>
                <button className="rounded-sm cursor-pointer text-amber-50 p-2 bg-blue-500 >Torna al menu my-2">Post successivo</button>
            </NavLink>}
            </div>
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
                <NavLink to="/Prodotti">
                     <button className=" rounded-sm cursor-pointer text-amber-50 p-2 bg-blue-500 >Torna al menu my-2">Torna al menu</button>
                    </NavLink>

            </div>
        </div>
    )
}