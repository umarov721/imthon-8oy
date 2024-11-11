import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import { Link, useParams } from "react-router-dom";
import Navbar from "../navbar";
import { MdOutlineMenu } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiFireLine } from "react-icons/ri";
import { GoShareAndroid } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  images: string[];
  money: number;
  tashkent: string;
  createdAt: string;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product>({} as Product);
  const [loading, setLoading] = useState(true);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    axios
      .get(`https://66cca101a4dd3c8a71b84998.mockapi.io/uzum/products/${id}`)
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    cssEase: "linear",
    dots: true,
    arrows: true,
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          width: "100%",
          height: "80px",
          backgroundColor: "#fff",
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.15)",
        }}
      >
       <Link to={"/"}> <MdOutlineMenu color="#fca212" size={35} /></Link>
        <Navbar />
        
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          height: "100%",
          paddingTop: "100px",
          backgroundColor: "#f5f5f5",
        }}
      >
        <div
          style={{
            backgroundColor: "#f5f5f5",
            padding: "20px",
            borderRadius: "20px",
            width: "50%",
            height: "100%",
          }}
        >
          <img
            src={products.image}
            alt={products.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
          <br />
          <br />
          <Slider
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "end",
              borderRadius: "100px",
            }}
            {...settings}
          >
            <img
              src={products.image}
              alt="das"
              style={{
                width: "30px",
                height: "40px",
                objectFit: "cover",
                borderRadius: "8px",
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.15)",
              }}
            />
            <img
              src={products.image}
              alt="das"
              style={{
                width: "30px",
                height: "40px",
                objectFit: "cover",
                borderRadius: "8px",
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.15)",
              }}
            />
            <img
              src={products.image}
              alt="das"
              style={{
                width: "30px",
                height: "40px",
                objectFit: "cover",
                borderRadius: "8px",
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.15)",
              }}
            />
          </Slider>
          <br />
          <br />
          <br />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24234.632719231333!2d69.20404656003417!3d41.284952124005514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2s!4v1731330784037!5m2!1sru!2s"
            style={{ width: "100%", height: "500px", border: "0" }}
          ></iframe>
        </div>
        <div
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "column",
            borderRadius: "20px",
            width: "40%",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <RiFireLine
                style={{ width: "30px", height: "30px", color: "#fca212" }}
              />
              <h1>{products.price}</h1>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <GoShareAndroid style={{ width: "25px", height: "25px" }} />
              <FaRegHeart style={{ width: "25px", height: "25px" }} />
            </div>
          </div>
          <p
            style={{
              marginBottom: "20px",
              fontSize: "40px",
              marginTop: "1px",
              marginLeft: "-420px",
              fontFamily: "sans-serif",
              color: "#6A9B0C",
              fontWeight: "bold",
            }}
          >
            $1{products.money},000
          </p>

          <p>{products.price}</p>
          <div className="section pricing-section">
            <div className="pricing-item">
              <span>Стоимость м²</span>
              <strong>$18,950</strong>
            </div>
            <div className="pricing-item">
              <span>Предоплата</span>
              <strong>85%</strong>
            </div>
            <div className="pricing-item">
              <span>Рассрочка</span>
              <strong>Есть</strong>
            </div>
          </div>

          <div className="section details-section">
            <div className="details-item">
              <span>Месячный платеж</span>
              <strong>1%</strong>
            </div>
            <div className="details-item">
              <span>Скидка</span>
              <strong>1%</strong>
            </div>
            <div className="details-item">
              <span>Акция</span>
              <p>Описание акции, здесь будет подробная информация об акции</p>
            </div>
            <div className="details-item">
              <span>Комиссионные</span>
              <strong className="no-commission">Нет</strong>
            </div>
          </div>

          <div className="section property-info">
            <div className="info-item">
              <span>Количество комнат</span>
              <strong>28 комнат</strong>
            </div>
            <div className="info-item">
              <span>Площадь</span>
              <strong>100 м²</strong>
            </div>
            <div className="info-item">
              <span>Количество этажей</span>
              <strong>3 этажа и подвал</strong>
            </div>
            <div className="info-item">
              <span>Санузел</span>
              <strong>10 отдельных санузлов</strong>
            </div>
            <div className="info-item">
              <span>Состояние</span>
              <strong>Евроремонт</strong>
            </div>
            <div className="info-item">
              <span>Планировка</span>
              <strong>Планировка</strong>
            </div>
            <div className="info-item">
              <span>Год постройки</span>
              <strong>{products.createdAt}</strong>
            </div>
            <div className="info-item">
              <span>Ремонт</span>
              <strong>Евроремонт</strong>
            </div>
          </div>

          <div className="section amenities">
            <h3>В доме имеется</h3>
            <div className="amenities-list">
              <span>интернет</span>
              <span>телефон</span>
              <span>мебель</span>
              <span>холодильник</span>
              <span>кондиционер</span>
              <span>видеонаблюдение</span>
              <span>бассейн</span>
              <span>сауна</span>
              <span>гараж</span>
            </div>
          </div>

          <div className="section broker-service">
            <span>Брокерское обслуживание</span>
            <strong>Есть</strong>
          </div>
          <p
            style={{
              margin: "30px",
              fontFamily: "sans-serif",
            }}
          >
            Это стильная вилла с потрясающим видом на море и находится всего в
            нескольких метрах от Кала Vadella. Просторная гостиная, большая
            полностью оборудованная кухня открытого плана столовая и
            многочисленные зоны отдыха и террасы.
          </p>
        </div>
      </div>
    </>
  );
};

export default Products;
