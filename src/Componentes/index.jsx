import React from 'react';
import './Paginas/style.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faFacebook, faTwitter, faInstagram } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: 'url(/img/wall_page-0001.jpg)' }}>
      <div className="content">
        <h3>Papelería</h3>
        <br />
        <span> Gran variedad de materiales</span>
        <br />
        <p>
          Somos tu destino para materiales de papelería de calidad. Ofrecemos una amplia gama de
          productos, atención personalizada y un compromiso con la sostenibilidad. Tu papelería de
          confianza.
        </p>
        <a href="#products" className="btn">Ver ahora</a>
      </div>
    </div>
  );
};

const Products = () => {
  const productData = [
    { id: 1, name: 'Cuaderno tapa dura', price: '$12.99', imgSrc: '/img/prod-1.png' },
    { id: 2, name: 'Lápiz H2', price: '$12.99', imgSrc: '/img/prod-2.png' },
    { id: 3, name: 'Sacapuntas', price: '$12.99', imgSrc: '/img/prod-3.png' },
  ];

  return (
    <section className="products" id="products">
      <h1 className="heading">Lista <span>Productos</span></h1>
      <div className="box-container">
        {productData.map(product => (
          <div className="box" key={product.id}>
            <span className="discount"></span>
            <div className="image">
              <img src={product.imgSrc} alt={product.name} />
            </div>
            <div className="content">
              <h3>{product.name}</h3>
              <div className="price">{product.price} <span></span></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="heading"><span>Sobre</span> Nosotros</h1>
      <div className="raw">
        <div className="video-container">
          <video src="/img/Shotgun Willy – Oreo.mp4" loop autoPlay muted></video>
          <h3>La mejor papelería</h3>
        </div>
        <div className="content">
          <h3>¿Por qué escogernos?</h3>
          <p>
            Nuestra papelería es la elección principal cuando se trata de comprar materiales de papelería.
            Nos enorgullece ofrecer una amplia gama de productos de alta calidad a precios competitivos.
            Nuestra atención al cliente es insuperable, brindando asesoramiento personalizado y un servicio
            rápido y eficiente. Además, estamos comprometidos con la sostenibilidad, promoviendo productos ecológicos.
            En tu búsqueda de materiales de papelería, confía en nosotros como tu opción número uno.
          </p>
        </div>
      </div>
    </section>
  );
};

const IconsContainer = () => {
  const iconsData = [
    { id: 1, title: 'Envios gratis', imgSrc: '/img/Envios.png' },
    { id: 2, title: '10 días de garantía', imgSrc: '/img/Garantia.png' },
    { id: 3, title: 'Ofertas y regalos', imgSrc: '/img/GiftCard.png' },
    { id: 4, title: 'Pagos contra entrega', imgSrc: '/img/Pagos.png' },
  ];

  return (
    <section className="icons-container">
      {iconsData.map(icon => (
        <div className="icons" key={icon.id}>
          <img src={icon.imgSrc} alt={icon.title} />
          <div className="info">
            <h3>{icon.title}</h3>
          </div>
        </div>
      ))}
    </section>
  );
};

const Map = () => {
  return (
    <div className="mapa">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.9121749248006!2d-74.17444489031654!3d4.609740595345611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9e601037c9b3%3A0x14930679ef22ea64!2sCl.%2056a%20Sur%20%2378f14%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1697954227999!5m2!1ses!2sco"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="map"
      ></iframe>
    </div>
  );
};

const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>Enlaces rápidos</h3>
          <a href="#home">Inicio</a>
          <a href="#products">Productos</a>
          <a href="#about">Información</a>
        </div>
        <div className="box">
          <h3>Envíos</h3>
          <a href="#">Roma</a>
          <a href="#">1 Sector</a>
          <a href="#">2 Sector</a>
          <a href="#">3 Sector</a>
        </div>
        <div className="box">
          <h3>Contáctanos</h3>
          <a href="#">320 2164404</a>
          <a href="#">cibercopiascapital@hotmail.com</a>
          <a href="#">Nueva Roma</a>
          <div className="social-icons">
            <a href="https://www.facebook.com/">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://twitter.com/home">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.instagram.com/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
      <div className="credit">Created by <span>Sena</span> All rights reserved</div>
    </section>
  );
};

const App = () => {
  return (
    <div>
      <header>
        <input type="checkbox" id="toggler" />
        <label htmlFor="toggler" className="fas fa-bars"></label>
        <a href="#" className="logo">Cyber Copias<span>.</span></a>
        <nav className="navbar">
          <a href="#home">Inicio</a>
          <a href="#products">Productos</a>
          <a href="#about">Información</a>
          <a href="View/Login_And_Register_ajax.html">Login</a>
        </nav>
      </header>

      <Home />
      <Products />
      <About />
      <IconsContainer />
      <Map />
      <Footer />
    </div>
  );
};

export default App;
