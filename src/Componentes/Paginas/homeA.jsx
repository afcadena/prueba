import React from 'react';
import './style.css'; // Assuming you have this CSS file in the correct directory

function HomeAdmin() {
    return (
        <div>
            {/* Header */}
            <header style={styles.header}>
                <input type="checkbox" id="toggler" style={styles.toggler} />
                <label htmlFor="toggler" className="fas fa-bars"></label>
                <a href="#" className="logo" style={styles.logo}>Cyber Copias Admin<span>.</span></a>
                <nav className="navbar" style={styles.navbar}>
                    <a href="../View/Inventario.html" style={styles.navLink}>Inventario</a>
                    <a href="../View/Proveedores.html" style={styles.navLink}>Proveedores</a>
                    <a href="../View/Ventas.html" style={styles.navLink}>Ventas</a>
                </nav>
            </header>

            {/* Home Section */}
            <section className="home" id="home" style={styles.home}>
                <div className="content" style={styles.content}>
                    <h3>Bienvenido Administrador</h3>
                    <br />
                    <br />
                    <span>En el siguiente apartado veras una puequeña explicación de cada uno de los módulos</span>
                    <a href="#modules" className="btn" style={styles.btn}>Ver ahora</a>
                </div>
            </section>

            {/* Modules Section */}
            <section id="modules" className="modules" style={styles.modules}>
                {[
                    { id: 'inventory', title: 'Inventario', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque...' },
                    { id: 'providers', title: 'Proveedores', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque...' },
                    { id: 'sales', title: 'Ventas', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque...' },
                    { id: 'online-sales', title: 'Ventas en línea', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque...' }
                ].map((module, index) => (
                    <div key={index} className="module" id={module.id} style={styles.module}>
                        <h3>{module.title}</h3>
                        <p>{module.description}</p>
                    </div>
                ))}
            </section>

            {/* Footer Credit */}
            <div className="credit" style={styles.credit}>
                created by <span>Sena</span> All rights reserved
            </div>
        </div>
    );
}

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#fff',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        marginBottom: '20px'
    },
    toggler: {
        display: 'none'
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
    home: {
        display: 'flex',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'url(../img/wall_page-0001.jpg) no-repeat center center/cover',
        padding: '20px'
    },
    content: {
        textAlign: 'center',
        color: '#fff'
    },
    btn: {
        display: 'inline-block',
        marginTop: '20px',
        padding: '10px 20px',
        backgroundColor: '#000',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '5px'
    },
    modules: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        margin: '20px'
    },
    module: {
        background: 'rgba(255, 255, 255, 0.8)',
        padding: '20px',
        margin: '10px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        width: '45%'
    },
    credit: {
        textAlign: 'center',
        margin: '20px 0',
        fontSize: '14px'
    }
};

export default HomeAdmin;
