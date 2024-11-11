import { Button, Input } from "antd";
import type { GetProps } from "antd";
import { MdOutlineEventNote } from "react-icons/md";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import img from "../img/full-logo-to-home.png";
import { AuthContext } from "../context/index";
import { useContext, useEffect, useState } from "react";
import { IoPerson } from "react-icons/io5";

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  console.log(info?.source, value);

const LoginNav: React.FC = () => {
  const { logout } = useContext(AuthContext);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const dropdownStyle = {
    padding: '8px 20px',
    backgroundColor: '#f3f3f3',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '14px',
    transition: 'background-color 0.2s, box-shadow 0.2s',
    outline: 'none',
  };

  useEffect(() => {
    
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
    logout(); 
  };

  return (
    <div style={{ display: "flex", width: "100%", height: 80, alignItems: 'center' }}>
      <div style={{ width: '20%', display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
        <Link to="/"><img src={img} alt="Logo" /></Link>
      </div>
      
     
      <div style={{ width: '40%', height: '100%', display: 'flex', alignItems: 'end', justifyContent: 'center', flexDirection: 'column' }}>
        <h2>+998 99 880 80-80</h2>
        <p style={{ marginTop: -20, fontWeight: 500 }}>Тех. поддержка</p>
      </div>
      
     
      <div style={{ width: '50%' }}>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
          
          
          <Button
            style={{
              backgroundColor: "#fca212",
              color: "#000",
              width: 200,
              height: 50,
            }}
          >
            Разместить объявление
          </Button>
          
        
          <div style={{ display: 'flex', gap: 20, justifyContent: 'center' }}>
            <MdOutlineEventNote size={20} />
            <FaRegHeart size={20} />

            {isLoggedIn ? (
             
              <button onClick={handleLogout} style={{ backgroundColor: 'transparent', border: 'none' }}>
                <FaRegUser size={20} />
              </button>
            ) : (
             
              <Link to="/login">
                <button
                  style={{
                    
                    // color: '#000',
                    border: 'none',
                    backgroundColor: 'transparent',
                  }}
                >
                  <IoPerson size={20} />
                </button>
              </Link>
            )}
          </div>
          
          
          <select style={dropdownStyle} id="length">
            <option value="uz">uz</option>
            <option value="ru">ru</option>
            <option value="en">en</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default LoginNav;
