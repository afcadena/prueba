import React from 'react';
import './style.css'; 

const Inventario = () => {
  return (
    <div style={styles.body}>
      {/* header start */}
      <header style={styles.header}>
        <input type="checkbox" id="toggler" />
        <label htmlFor="toggler" className="fas fa-bars"></label>
        <a href="#" style={styles.logo}>Inventario<span>.</span></a>
        <nav style={styles.navbar}>
          <a href="#" style={styles.navLink}>Crear</a>
          <a href="#" style={styles.navLink}>Actualizar</a>
          <a href="#" style={styles.navLink}>Habilitar/Deshabilitar</a>
          <a href="./homeA.html" style={styles.navLink}>Volver</a>
        </nav>
      </header>
      {/* header ends */}

      {/* products start */}
      <section style={styles.products}>
        <div style={styles.container}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Producto</th>
                <th style={styles.th}>Precio</th>
                <th style={styles.th}>Cantidad</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.td}>Lapiz</td>
                <td style={styles.td}>1.700</td>
                <td style={styles.td}>23</td>
              </tr>
              <tr>
                <td style={styles.td}>Borrador</td>
                <td style={styles.td}>1.700</td>
                <td style={styles.td}>23</td>
              </tr>
              <tr>
                <td style={styles.td}>Cuaderno</td>
                <td style={styles.td}>1.700</td>
                <td style={styles.td}>23</td>
              </tr>
              <tr>
                <td style={styles.td}>Ejemplo</td>
                <td style={styles.td}>1.700</td>
                <td style={styles.td}>23</td>
              </tr>
              {/* Más filas de ejemplo pueden ser añadidas aquí */}
            </tbody>
          </table>
          <button style={styles.button}>Agregar Producto</button>
        </div>
      </section>
      {/* products ends */}
    </div>
  );
};

const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    background: 'url(../img/FondoSimple.png) no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  header: {
    position: 'fixed',
    top: 0,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
    padding: '10px 0',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    padding: '10px',
    display: 'inline-block',
  },
  navbar: {
    display: 'inline-block',
    marginLeft: '20px',
  },
  navLink: {
    margin: '0 10px',
    textDecoration: 'none',
    color: '#333',
    fontSize: '16px',
  },
  container: {
    backgroundColor: '#fff',
    padding: '20px',
    width: '100%',
    maxWidth: '1200px',
    marginTop: '80px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    margin: '20px 0',
  },
  th: {
    padding: '12px',
    textAlign: 'center',
    border: '1px solid #ddd',
    backgroundColor: '#c7a16e',
    color: '#fff',
  },
  td: {
    padding: '12px',
    textAlign: 'center',
    border: '1px solid #ddd',
    backgroundColor: '#f9f9f9',
  },
  button: {
    backgroundColor: '#c7a16e',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    borderRadius: '5px',
    marginTop: '20px',
    transition: 'background-color 0.3s',
  },
  products: {
    width: '100%',
  }
};

export default Inventario;
