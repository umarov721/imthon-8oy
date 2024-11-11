import React, { useContext, useEffect, useState } from "react";
import { FiAlignLeft } from "react-icons/fi";
import { Button, Input, Space } from "antd";
import type { GetProps } from "antd";
import { MdOutlineEventNote } from "react-icons/md";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/index";
import { IoPerson } from "react-icons/io5";

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  console.log(info?.source, value);

const Navbar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const { logout } = useContext(AuthContext);

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
    // Check for token in localStorage on component mount
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    // Clear token from localStorage and update login state
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
    logout();
  };

  return (
    <div style={{ display: "flex", width: "100%", height: 80, alignItems: 'center' }}>
      <div style={{ width: '20%' }}>
        {/* Placeholder for left-aligned elements, if needed */}
      </div>
      
      {/* Centered search bar */}
      <div style={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Space direction="vertical">
          <Search
            placeholder="Найти объявления..."
            onSearch={onSearch}
            size="large"
            style={{ width: 300 }}
          />
        </Space>
      </div>
      
     
      <div style={{ width: '40%' }}>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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

          <div style={{ display: 'flex', gap: 20, justifyContent: 'center', alignItems: 'center' }}>
            <MdOutlineEventNote size={20} />
            <FaRegHeart size={20} />

            {isLoggedIn ? (
              
              <button
                onClick={handleLogout}
                style={{
                  backgroundColor: 'var(--main-color)',
                  border: 'none',
                }}
              >
                 <IoPerson size={20} />
              </button>
            ) : (
              
              <Link to="/login">
                <button
                  style={{
                    backgroundColor: 'var(--main-color)',
                    border: 'none',
                  }}
                >
                   <FaRegUser size={20} />
                </button>
              </Link>
            )}
          </div>

          <select style={dropdownStyle} id="language-select">
            <option value="uz">uz</option>
            <option value="ru">ru</option>
            <option value="en">en</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
