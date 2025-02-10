import { NavLink } from "react-router-dom";

export default function HomePage() {
    
    
    return(
        <main>
            <section className="bg-black-100 py-24">
                <div className="container mx-auto max-w-6xl px-4">
                    <h2 className="text-4xl font-bold text-center mb-8">Benvenuti sul nostro Blog di Cucina</h2>
                    <p className="text-lg text-center text-gray-700 mb-12">
                        Scopri ricette deliziose, consigli di cucina e molto altro. Siamo qui per ispirarti e rendere la tua esperienza culinaria indimenticabile.
                    </p>
                    <div className="grid grid-cols-12 gap-x-8">
                        <div className="col-span-6">
                            <img className="max-w-full" src="/img/sfondo.avif" alt="piatti" />
                        </div>
                        <div className="col-span-6 max-w-full flex items-center flex-col justify-center ">
                        <h1 className="text-center text-2xl mb-6 font-bold">Benvenuti nel nostro Paradiso Culinario!</h1>

                          <p className="text-center">Scopri la magia delle creazioni culinarie italiane, dalle ricette tradizionali alle rivisitazioni moderne. Lascia che le tue papille gustative intraprendano un viaggio ricco di sapori con le nostre guide e consigli facili da seguire. Buon appetito!</p>
                           
                          <NavLink to="/Prodotti">
                            <button className="bg-amber-400 text-neutral font-semibold p-2 rounded-lg my-3.5 cursor-pointer">VAI ALLE RICETTE</button>
                          </NavLink>

                        </div>
                    </div>
                
                </div>
            </section>
  
        </main>
    
    )
}