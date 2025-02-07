import { Outlet } from "react-router-dom"
import Header from "../component/Header"
import Footer from "../component/Footer"

export default function DefaulLayout(){
    return(
        <div>
            <Header />
            <main>
            <Outlet />
            </main>
            <Footer />

        </div>
    )
}