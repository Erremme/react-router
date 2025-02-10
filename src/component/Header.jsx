import MainNav from "./MainNav"
export default function Header(){
    return(
        <header className="bg-gray-800 text-white py-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center max-w-6xl">
                <h1 className="text-3xl font-bold">BLOG DI CUCINA</h1>
                <MainNav />
             </div>
        </header>

    )
}