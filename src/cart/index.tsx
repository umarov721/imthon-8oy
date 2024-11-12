import React, { useEffect, useState } from "react";
import axios from "axios";
import { LuSofa } from "react-icons/lu";
import { HiArrowsPointingOut } from "react-icons/hi2";
import { FaChevronLeft, FaChevronRight, FaPaintRoller, FaRegHeart } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom"; // Import Link
import useStore from "../zustand/store.js";
import { AiFillHeart } from "react-icons/ai";
interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  money?: number;
  tashkent?: string;
  createdAt?: string;
}

const ITEMS_PER_PAGE = 21; 

const Cart: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1); 
  const navigate = useNavigate();
  const { setTicket, tickets, deleteTicket } = useStore();


  const handleTicketClick = (product: any) => {
    const ticketExists = tickets.some(ticket => ticket.id === product.id);
    if (ticketExists) {
      alert("Такой билет уже бронирован");
    } else {
      setTicket(product);      
    }
  };

  const handleDeleteTicket = (id: number) => {
    deleteTicket(id);
  };



  useEffect(() => {
    axios
      .get("https://66cca101a4dd3c8a71b84998.mockapi.io/uzum/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  console.log(tickets);
  

  const indexOfLastProduct = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - ITEMS_PER_PAGE;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div style={{ backgroundColor: "#f3f3f3", width: "100%" }}>
      <div
        style={{
          paddingTop: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          alignItems: "center",
        }}
      >
        {currentProducts.map((product) => {
          const isLiked = tickets.some(ticket => ticket.id === product.id);
          return (
          <div
            key={product.id}
            style={{ textDecoration: "none", color: "inherit", width: "90%" }}
          >
            <div
              style={{
                display: "flex",
                border: "1px solid #ddd",
                borderRadius: "8px",
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.15)",
                height: "200px",
                backgroundColor: "#ffffff",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "200px",
                  height: "200px",
                  borderTopLeftRadius: "8px",
                  borderBottomLeftRadius: "8px",
                  marginRight: "16px",
                }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "80%",
                }}
              >
                <div>
                  <p style={{ fontWeight: "bold", fontSize: "26px" }}>
                    {product.price}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontFamily: "sans-serif",
                      color: "#999999",
                      gap: "8px",
                    }}
                  >
                    <LuSofa style={{ width: "20px", height: "20px" }} />
                    <p>{product.money}</p>
                    <HiArrowsPointingOut style={{ width: "20px", height: "20px" }} />
                    <p>100 м2</p>
                    <FaPaintRoller style={{ width: "20px", height: "20px" }} />
                    <p>Евроремонт</p>
                  </div>
                  <p style={{ fontFamily: "sans-serif", marginTop: "15px" }}>
                    {product.tashkent}
                  </p>
                </div>

                <div
                  style={{
                    gap: "8px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    justifyContent: "end",
                  }}
                >
                  {
                    isLiked ? (
                      <AiFillHeart style={{ width: "25px", height: "25px", color: "red" }} onClick={() => handleDeleteTicket(product.id)} />
                    ) : (
                      <FaRegHeart onClick={() => handleTicketClick(product)} style={{ width: "25px", height: "25px" }} />
                    )
                  }
                  <p
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "22px",
                      color: "#6A9B0C",
                    }}
                  >
                    ${product.money} 000
                  </p>
                  <div
                    style={{
                      display: "flex",
                      color: "#999999",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <p style={{ display: "flex", alignItems: "center" }}>
                      <IoEyeSharp />
                      {product.money}243
                    </p>
                    <p>{product.createdAt}</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "4%", height: "100%" }}>
                <div
                  style={{
                    backgroundColor: "#FCA311",
                    width: "15%",
                    marginLeft: "90%",
                    borderTopRightRadius: "8px",
                    borderBottomRightRadius: "8px",
                    height: "100%",
                  }}
                ></div>
              </div>
            </div>
          </div>
        )})}

        <div style={{ display: "flex", marginLeft: "60%", gap: "10px", padding: "20px" }}>
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            style={{
              padding: "8px 12px",
              borderRadius: "5px",
              border: "1px solid #ddd",
              backgroundColor: "#FCA311",
              color: currentPage === 1 ? "#999999" : "#000",
              cursor: currentPage === 1 ? "default" : "pointer",
            }}
          >
            <FaChevronLeft />
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index + 1)}
              style={{
                padding: "8px 12px",
                borderRadius: "5px",
                border: "1px solid #ddd",
                backgroundColor: currentPage === index + 1 ? "#f3f3f3" : "#ffffff",
                color: currentPage === index + 1 ? "#000000" : "#999999",
                fontWeight: currentPage === index + 1 ? "bold" : "normal",
                cursor: currentPage === index + 1 ? "default" : "pointer",
              }}
              disabled={currentPage === index + 1}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            style={{
              padding: "8px 12px",
              borderRadius: "5px",
              border: "1px solid #ddd",
              backgroundColor: "#FCA311",
              color: currentPage === totalPages ? "#999999" : "#000",
              cursor: currentPage === totalPages ? "default" : "pointer",
            }}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
