import React from 'react';
import './style.css'; // Assuming you have this CSS file in the right directory

function AdminPage() {
    return (
        <div style={styles.body}>
            <header style={styles.header}>
                <a href="#" style={styles.logo}>Proveedores<span>.</span></a>
                <nav style={styles.navbar}>
                    <a href="./homeA.html" style={styles.navLink}>Volver</a>
                </nav>
            </header>
            
            <div className="container" style={styles.container}>
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={styles.th}>Ingresa tu pedido, ejemplo: Pedido Norma 1 (Detalles)</th>
                            <th style={styles.th}>Recibido</th>
                            <th style={styles.th}>Hora/Dia/Mes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            "Pedido Norma ...",
                            "Pedido ejemplo ...",
                            "Pedido ejemplo ...",
                            "Pedido ejemplo ...",
                            "Pedido ejemplo ...",
                            "Pedido ejemplo ...",
                            "Pedido ejemplo ..."
                        ].map((pedido, index) => (
                            <tr key={index}>
                                <td style={styles.td}>{pedido}</td>
                                <td style={styles.td}>X</td>
                                <td style={styles.td}>✓</td>
                                <td style={styles.td}>12/05/2024</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button style={styles.button}>Agregar Pedido</button>
            </div>
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
    container: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        marginBottom: '20px'
    },
    th: {
        padding: '10px',
        textAlign: 'left',
        borderBottom: '1px solid #ddd',
        backgroundColor: '#c7a16e',
        color: '#fff'
    },
    td: {
        padding: '10px',
        textAlign: 'left',
        borderBottom: '1px solid #ddd'
    },
    button: {
        backgroundColor: '#c7a16e',
        color: '#fff',
        border: 'none',
        padding: '10px 20px',
        cursor: 'pointer',
        borderRadius: '5px',
        transition: 'background-color 0.3s',
        ':hover': {
            backgroundColor: '#b5895a'
        }
    }
};

export default AdminPage;
