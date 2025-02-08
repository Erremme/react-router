import MainNav from "../component/MainNav"
import axios from "axios"
import { useState, useEffect } from "react"

const initialFormData = {
    titolo : "",
    descrizione : "",
    immagine : "",
    ingredienti :[]
  }

export default function Prodotti(){

// stato del blog list che mi arriva dal BE
   const [blogList , setBlogList ] = useState([])
   const [formData , setFormData] = useState(initialFormData)

//funzione che fa la richiesta get al BE
    const fetchProducts = () =>{
        axios.get("http://localhost:3000/prodotti").then(function (res){
        setBlogList(res.data)
      
        })
   }

 //funzione che rende reattivi i campi imput modificando i valori
   const handleFormData = (fieldName , value)=> {
        setFormData( (currentFormData) =>{
            return(
                {...currentFormData , [fieldName] : value}
              
            )
        })
   }

//funzione che  fa la richiesta post al BE e restituisce e restituisce il nuovo array con il nuovo oggetto
//e poi svuota i campi
   const HandleOnSubmit = (event) => {
        event.preventDefault()
        axios.post("http://localhost:3000/prodotti " , formData).then( function (response){
            setBlogList((currentBlogList) => ([...currentBlogList , response.data]))
            setFormData(initialFormData)
        })
          
    }



// mi constente di fare una sola richiesta al BE appena si carica la pagina
    useEffect( fetchProducts , []);







    return (
        <main className="container mx-auto p-4">
    <h1 className="text-4xl font-bold mb-8">Food Blog</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogList.map((item) => {
            return (
                <div className="card bg-white shadow-md rounded-lg overflow-hidden" key={item.id}>
                   
                    <img src={item.immagine} alt={item.titolo} className="w-full h-48 object-cover"/>
                    <div className="p-4">
                        <div className="card-title text-2xl font-semibold mb-2">{item.titolo}</div>
                        <div className="card-text text-gray-700">{item.descrizione}.</div>
                    </div>
                </div>
            );
        })}
    </div>
    <hr className="my-8" />
    <form onSubmit={HandleOnSubmit} className="space-y-4">
        <h2 className="text-2xl font-bold mb-8">Aggiungi un nuovo prodotto</h2>
        <div>
            <label htmlFor="titolo" className="block text-gray-700 font-semibold mb-2">TITOLO*</label>
            <input 
                id="titolo"
                type="text"
                required
                placeholder="Inserisci il titolo del prodotto"
                value={formData.titolo}
                onChange={(event) => handleFormData("titolo" , event.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
            />
        </div>
        <div>
            <label htmlFor="descrizione" className="block text-gray-700 font-semibold mb-2">DESCRIZIONE*</label>
            <input 
                id="descrizione"
                type="text"
                required
                placeholder="Inserisci la descrizione del prodotto"
                value={formData.descrizione}
                onChange={(event) => handleFormData("descrizione" , event.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
            />
        </div>
        <div>
            <label htmlFor="img" className="block text-gray-700 font-semibold mb-2">IMMAGINE URL*</label>
            <input 
                id="img"
                type="url"
                required
                placeholder="Incolla l'url dell'immagine del prodotto"
                value={formData.immagine}
                onChange={(event) => handleFormData("immagine" , event.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
            />
        </div>
        <div>
            <label htmlFor="ingredienti" className="block text-gray-700 font-semibold mb-2">INGREDIENTI*</label>
            <input
                id="ingredienti"
                type="text"
                required
                placeholder="Inserisci gli ingredienti del prodotto"
                value={formData.ingredienti}
                onChange={(event) => handleFormData("ingredienti" , event.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
            />
        </div>
        <button 
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
        >
            Invia nuovo prodotto
        </button>
    </form>
</main>

    )
}