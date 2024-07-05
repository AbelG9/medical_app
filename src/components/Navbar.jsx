import {
  Disclosure,
  Menu,
  Transition,
  MenuButton,
  MenuItem,
  MenuItems,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import { Link } from "react-router-dom";
import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = () => {
  const user = null;

  return (
    <Disclosure as="nav" className="bg-sky-800">
      {({ open }) => (
        <>
          <div className="mx-auto">
            <div className="relative flex h-16 items-center justify-between bg-gray-900 text-white">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 ml-2 hover:bg-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Abrir Menú</span>
                  {open ? <FaXmark /> : <FaBars />}
                </DisclosureButton>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Link
                    to="/"
                    className="hover:rounded-md px-3 py-2 text-sm hover:bg-gray-700 hover:text-blue-600"
                  >
                    Inicio
                  </Link>
                  <Popover className="hover:rounded-md px-3 py-2 text-sm hover:bg-gray-700 hover:text-blue-600">
                    <PopoverButton>Pacientes</PopoverButton>
                    <PopoverPanel anchor="bottom" className="flex flex-col ml-8">
                      <a
                        className="bg-gray-800 mt-4 py-2 pl-2 rounded w-32 mr-4 text-sm hover:bg-gray-700 hover:text-blue-600"
                        href="/persons"
                      >
                        Ver todos
                      </a>
                      <a
                        className="bg-gray-800 mt-1 py-2 pl-2 rounded w-32 mr-4 text-sm hover:bg-gray-700 hover:text-blue-600"
                        href="/persons/new"
                      >
                        Nuevo paciente
                      </a>
                    </PopoverPanel>
                  </Popover>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center px-2">
                {user?.displayName ? (
                  <span>{user.displayName}</span>
                ) : user?.email ? (
                  <span>{user?.email}</span>
                ) : (
                  <span>Usuario anónimo</span>
                )}

                <Menu>
                  <MenuButton>
                    {user && user.photoURL ? (
                      <img
                        src={user.photoURL}
                        className="rounded-full w-6 h-6 inline-block me-2 ml-2 hover:opacity-50"
                      />
                    ) : (
                      <img
                        src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1718841600&semt=ais_user"
                        className="rounded-full w-6 h-6 inline-block me-2 ml-2 hover:opacity-50"
                      />
                    )}
                  </MenuButton>
                  <MenuItems anchor="bottom">
                    <MenuItem>
                      <button
                        className="bg-gray-800 mt-4 py-4 rounded w-32 mr-4 font-semibold hover:bg-gray-700 hover:text-blue-600"
                        onClick={() => console.log("logout")}
                      >
                        Cerrar sesión
                      </button>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>
          <DisclosurePanel className="sm:hidden bg-blue-950 text-gray-100">
            <div className="my-1 px-2 pb-3 pt-2 hover:bg-gray-700 hover:text-blue-600">
              <Link to="/">Inicio</Link>
            </div>
            <div className="my-1 px-2 pb-3 pt-2 hover:bg-gray-700 hover:text-blue-600">
              <Link to="/">Pacientes</Link>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
