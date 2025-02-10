import { Link , NavLink } from "react-router-dom"

export default function MainNav(){
    return(
        <nav className="bg-neutral-900 text-white p-4 flex justify-between items-center">
          <NavLink to="/" className="px-3 py-2 rounded-md text-md font-medium hover:bg-neutral-700">
             Home Page
          </NavLink>
          <NavLink to="/Prodotti" className="px-3 py-2 rounded-md text-md font-medium hover:bg-neutral-700">
            Ricette
          </NavLink>
          <NavLink to="/ChiSiamo" className="px-3 py-2 rounded-md text-md font-medium hover:bg-neutral-700">
            Chi siamo
          </NavLink>
        </nav>
    )
}