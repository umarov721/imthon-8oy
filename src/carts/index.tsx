import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaPaintRoller, FaRegHeart } from "react-icons/fa";
import { LuSofa } from "react-icons/lu";
import { HiArrowsPointingOut } from "react-icons/hi2";
import { IoEyeSharp } from "react-icons/io5";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  money: number;
  tashkent: string;
  createdAt: string;
}

const ITEMS_PER_PAGE = 21;

const Carts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("https://66cca101a4dd3c8a71b84998.mockapi.io/uzum/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError("Failed to load products.");
        setLoading(false);
      });
  }, []);

  const indexOfLastProduct = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - ITEMS_PER_PAGE;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  const goToPage = (pageNumber: number) => setCurrentPage(pageNumber);
  const goToPreviousPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const goToNextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ backgroundColor: "#f3f3f3", width: "100%" }}>
      <div
        style={{
          width: "100%",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(3, 0.26fr)",
          justifyContent: "space-evenly",
          gap: "40px",
        }}
      >
        {currentProducts.map((product) => (
          <Link key={product.id} to={`products/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
            <div
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.15)",
                borderBottom: "5px solid #FCA311",
              }}
            >
              
              <img src={product.image} alt={product.name} style={{ width: "100%", borderRadius: "8px" }} />
              <div style={{ padding: "16px" }}>
                <h2 style={{ fontWeight: "bold", fontFamily: "sans-serif" }}>{product.price}</h2>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <h2 style={{ fontWeight: "lighter", fontFamily: "sans-serif", color: "#6A9B0C" }}>
                    $ {product.money},000
                  </h2>
                  <FaRegHeart style={{ width: "25px", height: "25px" }} />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div
                    style={{
                      fontSize: "12px",
                      display: "flex",
                      alignItems: "center",
                      fontFamily: "sans-serif",
                      color: "#999999",
                      gap: "5px",
                    }}
                  >
                    <LuSofa style={{ width: "18px", height: "18px" }} />
                    <p>{product.money}</p>
                    <HiArrowsPointingOut style={{ width: "18px", height: "18px" }} />
                    <p style={{ fontSize: "11px" }}>100 м2</p>
                    <FaPaintRoller style={{ width: "16px", height: "16px" }} />
                    <p style={{ fontSize: "11px" }}>Евроремонт</p>
                  </div>
                  <p style={{ display: "flex", alignItems: "center", fontSize: "12px", color: "#999999" }}>
                    <IoEyeSharp />
                    {product.money}243
                  </p>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <p>{product.tashkent}</p>
                  <p style={{ color: "#999999", fontSize: "12px" }}>{product.createdAt}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div style={{ display: "flex", marginLeft: "75%", gap: "10px", padding: "20px" }}>
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
            color: currentPage === 1 ? "#000" : "#999999",
            cursor: currentPage === totalPages ? "default" : "pointer",
          }}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Carts;
