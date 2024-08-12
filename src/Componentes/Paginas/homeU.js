import React from 'react';
import './style.css';

// Importación de las imágenes y archivos
import prod1 from '../img/prod-1.png';
import prod2 from '../img/prod-2.png';
import prod3 from '../img/prod-3.png';
import enviosIcon from '../img/Envios.png';
import garantiaIcon from '../img/Garantia.png';
import giftCardIcon from '../img/GiftCard.png';
import pagosIcon from '../img/Pagos.png';

const HomeU = () => {
  return (
    <div>
      {/* Header */}
      <header>
        <a href="#" className="logo">Cyber Copias<span>.</span></a>
        <nav className="navbar">
          <a href="#home">Inicio</a>
          <a href="#products">Productos</a>
          <a href="#map">Mapa</a>
          <a href="./cuenta.html">Cuenta</a>
        </nav>
      </header>

      {/* Home Section */}
      <section className="home" id="home">
        <div className="content">
          <h3>Bienvenido Cliente</h3>
          <span>Gran variedad de materiales</span>
          <p>
            Somos tu destino para materiales de papelería de calidad. Ofrecemos una amplia gama de
            productos, atención personalizada y un compromiso con la sostenibilidad. Tu papelería de
            confianza.
          </p>
          <a href="#products" className="btn">Ver ahora</a>
        </div>
      </section>

      {/* Products Section */}
      <section className="products" id="products">
        <h1 className="heading">Lista <span>Productos</span></h1>
        <div className="box-container">
          {[
            { src: prod1, alt: 'Cuaderno tapa dura', title: 'Cuaderno tapa dura', price: '$12.99' },
            { src: prod2, alt: 'Lápiz H2', title: 'Lápiz H2', price: '$12.99' },
            { src: prod3, alt: 'Saca puntas', title: 'Saca puntas', price: '$12.99' }
          ].map((product, index) => (
            <div className="box" key={index}>
              <div className="image">
                <img src={product.src} alt={product.alt} />
                <div className="icons">
                  <a href="#" className="fas fa-heart"></a>
                  <a href="#" className="cart-btn btn-2">Individual</a>
                  <a href="#" className="fas fa-share"></a>
                </div>
              </div>
              <div className="content">
                <h3>{product.title}</h3>
                <div className="price">{product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Map Section */}
      <section className="map" id="map">
        <h1 className="heading"><span>Nuestra Ubicación</span></h1>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.3251850752267!2d-122.41724868468115!3d37.77557917975845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808a4c9b1a5d%3A0x8d6d8c98f8c35f4a!2s1%20Market%20St%2C%20San%20Francisco%2C%20CA%2094105%2C%20USA!5e0!3m2!1sen!2sin!4v1624548258975!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Icons Section */}
      <section className="icons-container">
        <div className="icons">
          <img src={enviosIcon} alt="Envios gratis" />
          <div className="info">
            <h3>Envios gratis</h3>
          </div>
        </div>
        <div className="icons">
          <img src={garantiaIcon} alt="10 días de garantía" />
          <div className="info">
            <h3>10 días de garantía</h3>
          </div>
        </div>
        <div className="icons">
          <img src={giftCardIcon} alt="Ofertas y regalos" />
          <div className="info">
            <h3>Ofertas y regalos</h3>
          </div>
        </div>
        <div className="icons">
          <img src={pagosIcon} alt="Pagos contra entrega" />
          <div className="info">
            <h3>Pagos contra entrega</h3>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>Enlaces rápidos</h3>
            <a href="#home">Inicio</a>
            <a href="#products">Productos</a>
            <a href="#map">Mapa</a>
          </div>
          <div className="box">
            <h3>Envios</h3>
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
            <a href="https://www.facebook.com/">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.309-3.275 3.239-3.275.927 0 1.726.069 1.961.1v2.276h-1.347c-1.051 0-1.254.499-1.254 1.22v1.593h2.514l-.327 2.599h-2.187V16c3.825-.605 6.75-3.934 6.75-7.951z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeU;
