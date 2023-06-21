import { useState } from "react";
import { Sidebar } from "./components/shared/Sidebar";
import {
  RiMenu3Fill,
  RiUser3Line,
  RiAddLine,
  RiPieChartLine,
  RiCloseLine,
  RiSearchLine,
  RiArrowDownSLine,
} from "react-icons/ri";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  // const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="bg-[#262837] w-full min-h-screen ">
        <Sidebar showMenu={showMenu} />

        {/* Menu*/}
        <div className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-2xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tr-lg rounded-tl-lg transition-all">
          <button className="p-2">
            <RiUser3Line />
          </button>
          <button className="p-2">
            <RiAddLine />
          </button>
          <button className="p-2">
            <RiPieChartLine />
          </button>
          <button className="text-white p-2" onClick={toggleMenu}>
            {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
          </button>
        </div>

        <main className="lg:pl-28 grid grid-cols-1 lg:grid-cols-8">
          {/* title and search */}
          <div className="lg:col-span-6 mb-6">
            <header className="p-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
                <div>
                  <h1 className="text-2xl text-gray-300">Jeager Resto</h1>
                  <p className="text-gray-500">18 Junio 2023</p>
                </div>

                <form action="">
                  <div className="w-full relative">
                    <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                    <input
                      type="text"
                      className="w-full py-2 pl-10 pr-4 bg-[#1F1D2B] rounded-lg text-gray-300 outline-none"
                      placeholder="Search"
                    />
                  </div>
                </form>
              </div>

              {/* Tabs */}
              <nav
                className="text-gray-300 flex items-center justify-between lg:gap-8 border-b mb-6 lg:justify-start 
              "
              >
                <a href="#" className="text-[#ec7c6a] ">
                  Hot dishes
                </a>
                <a href="#">Cold dishes</a>
                <a href="#">Soup</a>
                <a href="#">Grill</a>
              </nav>

              {/* Tittle content */}
              <div className="flex items-center justify-between ">
                <h2 className="text-xl text-gray-300">Choose dishes</h2>
                <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
                  <RiArrowDownSLine /> Dine in
                </button>
              </div>
            </header>
          </div>

          <div className="lg:col-span-2 fixed lg:static right-0">Carrito</div>
        </main>
      </div>
    </>
  );
}

export default App;
