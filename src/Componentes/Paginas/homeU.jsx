import React from 'react';
import './style.css';

const Homeu = () => {
  return (
    <div>
      {/* Header */}
      <header>
        <a href="#" className="logo">Cyber Copias<span>.</span></a>
        <nav className="navbar">
          <a href="#home">Inicio</a>
          <a href="#products">Productos</a>
          <a href="#about">Información</a>
          <a href="./cuenta.html">Cuenta</a>
        </nav>
      </header>

      {/* Home Section */}
      <section className="home" id="home">
        <div className="content">
          <h3>Bienvenido Cliente</h3>
          <br />
          <span>Gran variedad de materiales</span>
          <br />
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
            { id: 1, image: '../img/prod-1.png', title: 'Cuaderno tapa dura', price: '$12.99' },
            { id: 2, image: '../img/prod-2.png', title: 'Lapiz H2', price: '$12.99' },
            { id: 3, image: '../img/prod-3.png', title: 'Saca puntas', price: '$12.99' },
          ].map(product => (
            <div className="box" key={product.id}>
              <span className="discount"></span>
              <div className="image">
                <img src={product.image} alt={product.title} />
                <div className="icons">
                  <a href="#" className="fas fa-heart"></a>
                  <a href="#" className="cart-btn btn-2" data-id={product.id}>Individual</a>
                  <a href="#" className="fas fa-share"></a>
                </div>
              </div>
              <div className="content">
                <h3>{product.title}</h3>
                <div className="price">{product.price} <span></span></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <h1 className="heading"><span>Sobre</span> Nosotros</h1>
        <div className="raw">
          <div className="video-container">
            <video src="../img/Shotgun Willy – Oreo.mp4" loop autoPlay muted></video>
            <h3>La mejor papeleria</h3>
          </div>
          <div className="content">
            <h3>¿Por qué escogernos?</h3>
            <p>
              Nuestra papelería es la elección principal cuando se trata de comprar materiales de papelería.
              Nos enorgullece ofrecer una amplia gama de productos de alta calidad a precios competitivos.
              Nuestra atención al cliente es insuperable, brindando asesoramiento personalizado y un servicio
              rápido y eficiente. Además, estamos comprometidos con la sostenibilidad, promoviendo productos
              ecológicos. En tu búsqueda de materiales de papelería, confía en nosotros como tu opción número uno.
            </p>
          </div>
        </div>
      </section>

      {/* Icons Section */}
      <section className="icons-container">
        {[
          { img: '../img/Envios.png', text: 'Envios gratis' },
          { img: '../img/Garantia.png', text: '10 dias de garantia' },
          { img: '../img/GiftCard.png', text: 'Ofertas y regalos' },
          { img: '../img/Pagos.png', text: 'Pagos contra entrega' },
        ].map((icon, index) => (
          <div className="icons" key={index}>
            <img src={icon.img} alt={icon.text} />
            <div className="info">
              <h3>{icon.text}</h3>
            </div>
          </div>
        ))}
      </section>

      {/* Map Section */}
      <h1 className="heading">Donde <span>Encontrarnos</span></h1>
      <div className="mapa">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.9121749248006!2d-74.17444489031654!3d4.609740595345611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9e601037c9b3%3A0x14930679ef22ea64!2sCl.%2056a%20Sur%20%2378f14%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1697954227999!5m2!1ses!2sco"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Footer */}
      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>Enlaces rapidos</h3>
            <a href="#home">inicio</a>
            <a href="#products">productos</a>
            <a href="#about">Informacion</a>
          </div>
          <div className="box">
            <h3>Envios</h3>
            <a href="#">Roma</a>
            <a href="#">1 Sector</a>
            <a href="#">2 Sector</a>
            <a href="#">3 Sector</a>
          </div>
          <div className="box">
            <h3>Contactanos</h3>
            <a href="#">320 2164404</a>
            <a href="#">cibercopiascapital@hotmail.com</a>
            <a href="#">Nueva Roma</a>
            <a href="https://www.facebook.com/">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
              </svg>
            </a>
            <a href="https://twitter.com/home">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 7.366v.041a3.288 3.288 0 0 0 2.636 3.224 3.275 3.275 0 0 1-.865.115c-.212 0-.421-.021-.626-.06a3.29 3.29 0 0 0 3.073 2.283A6.586 6.586 0 0 1 0 13.043a9.308 9.308 0 0 0 5.026 1.472"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homeu;
