import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import LeftNavbar from "../Components/Layout-Component/LeftNavbar";
import RightNavbar from "../Components/Layout-Component/RightNavbar";
import Navbar from "../Components/Navbar";

const HomeLayouts = () => {
    return (
        <div className="font-poppins">
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto  " >
                    <LatestNews></LatestNews>
                </section>
            </header>


            <nav className="w-11/12 mx-auto py-3">
                <Navbar></Navbar>
            </nav>
            

            <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3">
                <aside className="left col-span-3">
                    <LeftNavbar></LeftNavbar>
                </aside>

                <section className="middle col-span-6">
                    <Outlet></Outlet>
                </section>

                <aside className="right col-span-3">
                    <RightNavbar></RightNavbar>
                </aside>
            </main>

        </div>
    );
};

export default HomeLayouts;