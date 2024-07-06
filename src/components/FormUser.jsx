import { useRef } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

const FormUser = ({ handleLoginEmail, handleRegisterEmail }) => {
  const styleTab =
    "py-1 px-3 font-semibold w-1/2 text-white data-[selected]:border-blue-500 data-[selected]:border-b-4 data-[hover]:border-blue-500 data-[focus]:border-b-4 hover:bg-gray-600";

  //useRef, veanlo como un id; cuando conviene, cuando es poquito
  const inputEmailLogIn = useRef();
  const inputPassLogIn = useRef();
  const inputEmailRegister = useRef();
  const inputPassRegister = useRef();

  const handleLogin = () => {
    const email = inputEmailLogIn.current.value;
    const password = inputPassLogIn.current.value;
    handleLoginEmail(email, password);
  };

  const handleRegister = () => {
    const email = inputEmailRegister.current.value;
    const password = inputPassRegister.current.value;
    handleRegisterEmail(email, password);
  };

  return (
    <TabGroup className="w-full md:w-1/2 mx-auto">
      <TabList className="flex gap-4">
        <Tab className={styleTab}>Ingresa</Tab>
        <Tab className={styleTab}>Registrate</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <div className="min-w-4/5 pl-3 pt-4 pr-2 mb-2 block">
            <div className="mb-2">
              <label className="text-sm font-semibold mb-1 block text-white">Email</label>
              <input
                className="border-2 p-1 h-12 w-full text-black"
                placeholder="Email Login"
                ref={inputEmailLogIn}
              />
            </div>
            <div className="mb-2">
              <label className="text-sm font-semibold mb-1 block text-white">
                Contraseña
              </label>
              <input
                className="border-2 p-1 h-12 w-full text-black"
                type="password"
                ref={inputPassLogIn}
              />
            </div>
            <button
              className="bg-sky-700 w-full mt-4 rounded h-12 p-3 text-center text-white font-semibold mb-3 hover:bg-sky-800"
              onClick={handleLogin}
            >
              Ingresa con tu e-mail
            </button>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="min-w-4/5 pl-3 pt-4 pr-2 mb-2 block">
            <div className="mb-2">
              <label className="text-sm font-semibold mb-1 block text-white">Email</label>
              <input
                className="border-2 p-1 h-12 w-full text-black"
                placeholder="Email Register"
                ref={inputEmailRegister}
              />
            </div>
            <div className="mb-2">
              <label className="text-sm font-semibold mb-1 block text-white">
                Contraseña
              </label>
              <input
                className="border-2 p-1 h-12 w-full text-black"
                type="password"
                ref={inputPassRegister}
              />
            </div>
            <button
              className="bg-sky-700 w-full mt-4 rounded h-12 p-3 text-center text-white font-semibold mb-3 hover:bg-sky-800"
              onClick={handleRegister}
            >
              Registrate
            </button>
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
};

export default FormUser;
