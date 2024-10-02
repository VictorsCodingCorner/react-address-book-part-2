import "./App.css";
import { useEffect, useState, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard";
import LeftMenu from "./components/LeftMenu";
import Contact from "./components/Contact";

const GlobalContext = createContext();

function App() {

  const [contacts, setContacts] = useState([]);

  const URL =
    "https://boolean-uk-api-server.fly.dev/VictorsCodingCorner/contact";

    const fetchPeople = async () => {
        const response = await fetch(URL);
        const jsonData = await response.json();
        setContacts(jsonData.results);
      };
    
      useEffect(() => {
        fetchPeople();
      }, []);

  return (
    <GlobalContext.Provider value={{ contacts, setContacts }}>
      <main>
        <Routes>
          <Route 
            path="/" 
            element={<Dashboard />}/>
          <Route 
            path="/View/:id" 
            element={<Contact />} />
        </Routes>
      </main>
    </GlobalContext.Provider>
  );
}

export { App, GlobalContext };
