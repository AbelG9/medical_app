import {
  Disclosure,
  Menu,
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
    <Disclosure as="nav" className="bg-sky-900">
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
                    className="hover:rounded px-3 py-2 text-sm hover:bg-gray-600 hover:text-blue-950 hover:font-semibold"
                  >
                    Inicio
                  </Link>
                  <Popover className="hover:rounded px-3 py-2 text-sm hover:bg-gray-600 hover:text-blue-950 hover:font-semibold">
                    <PopoverButton>Pacientes</PopoverButton>
                    <PopoverPanel
                      anchor="bottom"
                      className="flex flex-col ml-8"
                    >
                      <Link
                        to="/persons"
                        className="bg-gray-800 mt-3 py-2 pl-2 rounded w-32 mr-4 text-sm hover:bg-gray-500 hover:text-blue-950 hover:font-semibold"
                      >
                        <button>Ver todos</button>
                      </Link>
                      <Link
                        to="/persons/new"
                        className="bg-gray-800 mt-1 py-2 pl-2 rounded w-32 mr-4 text-sm hover:bg-gray-500 hover:text-blue-950 hover:font-semibold"
                      >
                        <button>Nuevo paciente</button>
                      </Link>
                    </PopoverPanel>
                  </Popover>
                  <Popover className="hover:rounded px-3 py-2 text-sm hover:bg-gray-600 hover:text-blue-950 hover:font-semibold">
                    <PopoverButton>Especialidades</PopoverButton>
                    <PopoverPanel
                      anchor="bottom"
                      className="flex flex-col ml-6"
                    >
                      <Link
                        to="/specialties"
                        className="bg-gray-800 mt-3 py-2 pl-2 rounded w-36 mr-4 text-sm hover:bg-gray-500 hover:text-blue-950 hover:font-semibold"
                      >
                        <button>Ver todas</button>
                      </Link>
                      <Link
                        to="/specialties/new"
                        className="bg-gray-800 mt-1 py-2 pl-2 rounded w-36 mr-4 text-sm hover:bg-gray-500 hover:text-blue-950 hover:font-semibold"
                      >
                        <button>Nueva especialidad</button>
                      </Link>
                    </PopoverPanel>
                  </Popover>
                  <Popover className="hover:rounded px-3 py-2 text-sm hover:bg-gray-600 hover:text-blue-950 hover:font-semibold">
                    <PopoverButton>Especialistas</PopoverButton>
                    <PopoverPanel
                      anchor="bottom"
                      className="flex flex-col ml-8"
                    >
                      <Link
                        to="/specialists"
                        className="bg-gray-800 mt-3 py-2 pl-2 rounded w-36 mr-4 text-sm hover:bg-gray-500 hover:text-blue-950 hover:font-semibold"
                      >
                        <button>Ver todos</button>
                      </Link>
                      <Link
                        to="/specialists/new"
                        className="bg-gray-800 mt-1 py-2 pl-2 rounded w-36 mr-4 text-sm hover:bg-gray-500 hover:text-blue-950 hover:font-semibold"
                      >
                        <button>Nuev@ especialista</button>
                      </Link>
                    </PopoverPanel>
                  </Popover>
                  <Link
                    to="/appointments"
                    className="hover:rounded px-3 py-2 text-sm hover:bg-gray-600 hover:text-blue-950 hover:font-semibold"
                  >
                    Citas
                  </Link>
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
            <div className="bg-gray-900 my-1 px-2 pb-3 pt-2 hover:bg-gray-600 hover:text-blue-950 hover:font-semibold">
              <Link to="/">Inicio</Link>
            </div>
            <div className="bg-gray-900 my-1 px-2 pb-3 pt-2 hover:bg-gray-600 hover:text-blue-950 hover:font-semibold">
              <Disclosure>
                <DisclosureButton className="py-2">Pacientes</DisclosureButton>
                <DisclosurePanel className="text-gray-500">
                  <div className="bg-gray-800 my-1 px-2 pb-3 pt-2 hover:bg-gray-500 hover:text-blue-950 hover:font-semibold">
                    <Link
                      to="/persons"
                      className="mt-3 py-2 pl-2 rounded w-32 mr-4 text-sm"
                    >
                      <button>Ver todos</button>
                    </Link>
                  </div>
                  <div className="bg-gray-800 my-1 px-2 pb-3 pt-2 hover:bg-gray-500 hover:text-blue-950 hover:font-semibold">
                    <Link
                      to="/persons/new"
                      className="mt-1 py-2 pl-2 rounded w-32 mr-4 text-sm"
                    >
                      <button>Nuevo paciente</button>
                    </Link>
                  </div>
                </DisclosurePanel>
              </Disclosure>
            </div>
            <div className="bg-gray-900 my-1 px-2 pb-3 pt-2 hover:bg-gray-600 hover:text-blue-950 hover:font-semibold">
              <Disclosure>
                <DisclosureButton className="py-2">Especialidades</DisclosureButton>
                <DisclosurePanel className="text-gray-500">
                  <div className="bg-gray-800 my-1 px-2 pb-3 pt-2 hover:bg-gray-500 hover:text-blue-950 hover:font-semibold">
                    <Link
                      to="/specialties"
                      className="mt-3 py-2 pl-2 rounded w-32 mr-4 text-sm"
                    >
                      <button>Ver todas</button>
                    </Link>
                  </div>
                  <div className="bg-gray-800 my-1 px-2 pb-3 pt-2 hover:bg-gray-500 hover:text-blue-950 hover:font-semibold">
                    <Link
                      to="/specialties/new"
                      className="mt-1 py-2 pl-2 rounded w-32 mr-4 text-sm"
                    >
                      <button>Nueva especialidad</button>
                    </Link>
                  </div>
                </DisclosurePanel>
              </Disclosure>
            </div>
            <div className="bg-gray-900 my-1 px-2 pb-3 pt-2 hover:bg-gray-600 hover:text-blue-950 hover:font-semibold">
              <Disclosure>
                <DisclosureButton className="py-2">Especialistas</DisclosureButton>
                <DisclosurePanel className="text-gray-500">
                  <div className="bg-gray-800 my-1 px-2 pb-3 pt-2 hover:bg-gray-500 hover:text-blue-950 hover:font-semibold">
                    <Link
                      to="/specialists"
                      className="mt-3 py-2 pl-2 rounded w-32 mr-4 text-sm"
                    >
                      <button>Ver tod@s</button>
                    </Link>
                  </div>
                  <div className="bg-gray-800 my-1 px-2 pb-3 pt-2 hover:bg-gray-500 hover:text-blue-950 hover:font-semibold">
                    <Link
                      to="/specialists/new"
                      className="mt-1 py-2 pl-2 rounded w-32 mr-4 text-sm"
                    >
                      <button>Nuev@ especialista</button>
                    </Link>
                  </div>
                </DisclosurePanel>
              </Disclosure>
            </div>
            <div className="bg-gray-900 my-1 px-2 pb-3 pt-2 hover:bg-gray-600 hover:text-blue-950 hover:font-semibold">
              <Link to="/appointments">Citas</Link>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
