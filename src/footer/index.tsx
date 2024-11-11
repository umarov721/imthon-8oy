import { PiTelegramLogoDuotone } from "react-icons/pi";
import { PiYoutubeLogo } from "react-icons/pi";
import { LuFacebook } from "react-icons/lu";
import { PiInstagramLogo } from "react-icons/pi";
import { BsTelephone } from "react-icons/bs";
import { RxEnvelopeClosed } from "react-icons/rx";
import { HiOutlineHome } from "react-icons/hi2";
import "../App.css";




const Footer = () => {
  return (
    <footer
      style={{
        // marginTop: "4630px",
        display: "flex",
        justifyContent: "center",
        // maxWidth: "1481px",
        width: "100%",
        height: "240px",
        backgroundColor: "white",
      }}
    >
      <nav
        style={{
          width: "1200px",
          height: "180px",
          paddingTop: "50px",
          marginLeft: "119px",
          display: "flex",
        }}
      >
        <div>
          <h2 
            style={{
              fontFamily: "sans-serif",
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "18.75px",
              textAlign: "left",
              color: "rgba(22, 26, 29, 1)",
            }}
          >
            Полезные Ссылки
          </h2>
          <p 
            style={{
              fontFamily: "sans-serif",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "16.41px",
              textAlign: "left",
              color: "rgba(153, 153, 153, 1)",
              marginTop: "20px",
              marginBottom: "8px",
            }}
          >
            О Нас
          </p>
          <p 
            style={{
              fontFamily: "sans-serif",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "16.41px",
              textAlign: "left",
              color: "rgba(153, 153, 153, 1)",
              marginBottom: "65px",
            }}
          >
            Пользовательское Соглашение
          </p>
          <span 
            style={{
              fontFamily: "sans-serif",
              fontSize: "12px",
              fontWeight: 400,
              lineHeight: "14.41px",
              textAlign: "left",
              color: "rgba(153, 153, 153, 1)",
            }}
          >
            ©️ 2021 <b style={{ color: "black", fontWeight: "bold" }}>Utopia</b>{" "}
            | Все права защищены
          </span>
        </div>

        <div
          style={{
            marginLeft: "132px",
            marginRight: "197px",
          }}
        >
          <h2   
            style={{
              fontFamily: "sans-serif",
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "18.75px",
              textAlign: "left",
              color: "rgba(22, 26, 29, 1)",
            }}
          >
            Наши Страницы
          </h2>
          <div
            style={{
              marginTop: "15px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <a href="#">
  <PiTelegramLogoDuotone
    className="telegram-icon"
    style={{
      width: "1.25em",
      height: "1.33em",
    }}
  />
</a>


<a href="#">
  <PiYoutubeLogo
    className="youtube-icon"
    style={{
      width: "1.25em",
      height: "1.42em",
      marginLeft: "2.58px",
      marginRight: "1.18px",
      textDecoration: "underline",
    }}
  />
</a>


<a href="#">
  <LuFacebook
    className="facebook-icon"
    style={{
      width: "1.54em",
      height: "1.25em",
    }}
  />
</a>



            <a href="#">
  <PiInstagramLogo
    className="instagram-icon"
    style={{
      width: "1.33em",
      height: "1.33em",
      marginLeft: "1px",
    }}
  />
</a>

          </div>
        </div>

        <div>
          <a
            href="#"
            style={{
              textDecoration: "none",
              display: "flex",
            }}
          >
            <BsTelephone
              style={{
                marginTop: "15px",
                width: "15.75px",
                height: "15.75px",
                 color: "rgba(22, 26, 29, 1)",
              }}
            />
            <h3
              style={{
                marginLeft: "17px",
                fontFamily: "san-serif",
                fontSize: "14px",
                fontWeight: 300,
                lineHeight: "16.41px",
                textAlign: "left",
                 color: "rgba(22, 26, 29, 1)",
              }}
            >
              Тех. поддержка
            </h3>
          </a>

          <a
            href="#"
            style={{
              textDecoration: "none",
            }}
          >
            <h2
              style={{
                marginTop: "15px",
                marginBottom: "15px",
                fontFamily: "san-serif",
                fontSize: "24px",
                fontWeight: 300,
                lineHeight: "16.41px",
                textAlign: "left",
                 color: "rgba(22, 26, 29, 1)",
              }}
            >
              +998 99 880 80-80
            </h2>
          </a>
          <a
            href="#"
            style={{
              display: "flex",
              textDecoration: "none",
            }}
          >
            <RxEnvelopeClosed
              style={{
                marginTop: "15px",
                width: "17.75px",
                height: "17.75px",
                 color: "rgba(22, 26, 29, 1)",
              }}
            />
            <h3
              style={{
                marginLeft: "17px",
                fontFamily: "san-serif",
                fontSize: "14px",
                fontWeight: 300,
                lineHeight: "16.41px",
                textAlign: "left",
                 color: "rgba(22, 26, 29, 1)",
              }}
            >
              info@utopia.uz
            </h3>
          </a>
          <a
            href="#"
            style={{
              display: "flex",
              textDecoration: "none",
            }}
          >
            <HiOutlineHome
              style={{
                width: "19.75px",
                height: "19.75px",
                marginTop: "7px",
                 color: "rgba(22, 26, 29, 1)",
              }}
            />
            <h3
              style={{
                marginLeft: "17px",
                marginTop: "8px",
                fontFamily: "san-serif",
                fontSize: "14px",
                fontWeight: 300,
                lineHeight: "16.41px",
                textAlign: "left",
                 color: "rgba(22, 26, 29, 1)",
              }}
            >
              г. Ташкент, Чиланзарский р-н, ул. Гульхани, д-52
            </h3>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
