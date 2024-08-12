import React from 'react';
import './style.css'; // Import the custom CSS file

function SalesPage() {
    const salesData = [
        { producto: "Lápiz H2", cantidad: 2, valor: 3400 },
        { producto: "Ejemplo", cantidad: 2, valor: 3400 },
        { producto: "Ejemplo", cantidad: 2, valor: 3400 },
        { producto: "Ejemplo", cantidad: 2, valor: 3400 },
        { producto: "Ejemplo", cantidad: 2, valor: 3400 },
        { producto: "Ejemplo", cantidad: 2, valor: 3400 },
        { producto: "Ejemplo", cantidad: 2, valor: 3400 },
        { producto: "Ejemplo", cantidad: 2, valor: 3400 }
    ];

    return (
        <div style={styles.body}>
            <header style={styles.header}>
                <input type="checkbox" id="toggler" style={styles.checkbox} />
                <label htmlFor="toggler" className="fas fa-bars" style={styles.label}></label>
                <a href="#" style={styles.logo}>Ventas<span>.</span></a>
                <nav style={styles.navbar}>
                    <a href="#" style={styles.navLink}>Reportes</a>
                    <a href="./homeA.html" style={styles.navLink}>Volver</a>
                </nav>
            </header>

            <section style={styles.sales} id="sales">
                <div className="container" style={styles.container}>
                    <div className="search-bar" style={styles.searchBar}>
                        <input type="text" placeholder="Busca el producto vendido, ejemplo: Lápiz 2H" style={styles.searchInput} />
                        <button style={styles.searchButton}><i className="fas fa-search"></i></button>
                    </div>
                    <table style={styles.table}>
                        <thead>
                            <tr>
                                <th style={styles.th}>Producto</th>
                                <th style={styles.th}>Cantidad</th>
                                <th style={styles.th}>Valor total de la compra</th>
                            </tr>
                        </thead>
                        <tbody>
                            {salesData.map((item, index) => (
                                <tr key={index}>
                                    <td style={styles.td}>{item.producto}</td>
                                    <td style={styles.td}>
                                        <select value={item.cantidad} style={styles.select}>
                                            <option value={item.cantidad}>{item.cantidad}</option>
                                        </select>
                                    </td>
                                    <td style={styles.td}>{item.valor}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button style={styles.button}>Terminar el día</button>
                </div>
            </section>
        </div>
    );
}

const styles = {
    body: {
        fontFamily: 'Arial, sans-serif',
        background: 'url(../img/FondoSimple.png) no-repeat center center/cover',
        margin: 0,
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
    },
    header: {
        width: '100%',
        padding: '10px 20px',
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        marginBottom: '20px'
    },
    checkbox: {
        display: 'none'
    },
    label: {
        fontSize: '1.5em',
        cursor: 'pointer'
    },
    logo: {
        fontSize: '1.5em',
        fontWeight: 'bold',
        color: '#000',
        textDecoration: 'none'
    },
    navbar: {
        display: 'flex',
        alignItems: 'center'
    },
    navLink: {
        marginLeft: '20px',
        color: '#000',
        textDecoration: 'none',
        fontSize: '1em'
    },
    sales: {
        width: '100%'
    },
    container: {
        backgroundColor: '#fff',
        padding: '20px',
        width: '100%',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
    },
    searchBar: {
        width: '100%',
        marginBottom: '20px',
        display: 'flex'
    },
    searchInput: {
        flex: '1',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '5px 0 0 5px'
    },
    searchButton: {
        width: '30px',
        padding: '10px',
        border: '1px solid #ddd',
        borderLeft: 'none',
        backgroundColor: '#c7a16e',
        color: 'white',
        borderRadius: '0 5px 5px 0',
        cursor: 'pointer'
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        margin: '20px 0'
    },
    th: {
        padding: '12px',
        textAlign: 'center',
        border: '1px solid #ddd',
        backgroundColor: '#c7a16e',
        color: '#fff'
    },
    td: {
        padding: '12px',
        textAlign: 'center',
        border: '1px solid #ddd',
        backgroundColor: '#f9f9f9'
    },
    select: {
        padding: '5px',
        borderRadius: '5px',
        border: '1px solid #ddd'
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
        ':hover': {
            backgroundColor: '#b5895a'
        }
    }
};

export default SalesPage;
    