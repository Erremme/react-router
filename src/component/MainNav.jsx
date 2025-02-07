import { Link , NavLink } from "react-router-dom"

export default function MainNav(){
    return(
        <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
          <NavLink to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
             Home Page
          </NavLink>
          <NavLink to="/Prodotti" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
            Prodotti
          </NavLink>
          <NavLink to="/ChiSiamo" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
            Chi siamo
          </NavLink>
        </nav>
    )
}