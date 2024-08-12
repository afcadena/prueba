import React from 'react';
import './style.css';

function AccountPage() {
    return (
        <div>
            {/* Header */}
            <header style={styles.header}>
                <a href="#" className="logo">Cyber Copias<span>.</span></a>
                <nav className="navbar" style={styles.navbar}>
                    <a href="#" style={styles.navLink}>Ajustes</a>
                    <a href="./homeU.html" style={styles.navLink}>Volver</a>
                </nav>
            </header>

            {/* Products Section */}
            <section id="products" className="products" style={styles.products}>
                <h1 className="heading" style={styles.heading}>Lista De<span> Deseos</span></h1>
                <div className="box-container" style={styles.boxContainer}>
                    {[
                        { imgSrc: "../img/prod-1.png", name: "Cuaderno tapa dura", price: "$12.99" },
                        { imgSrc: "../img/prod-2.png", name: "Lapiz H2", price: "$12.99" },
                        { imgSrc: "../img/prod-3.png", name: "Saca puntas", price: "$12.99" }
                    ].map((product, index) => (
                        <div key={index} className="box" style={styles.box}>
                            <span className="discount"></span>
                            <div className="image" style={styles.image}>
                                <img src={product.imgSrc} alt={product.name} />
                            </div>
                            <div className="content" style={styles.content}>
                                <h3>{product.name}</h3>
                                <div className="price">{product.price}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Modules Section */}
            <section id="modules" className="modules" style={styles.modules}>
                <div className="module" id="online-sales" style={styles.module}>
                    <h1>Pedidos</h1>
                    <p>Aún no ha realizado pedidos</p>
                </div>
            </section>
        </div>
    );
}

const styles = {
    header: {
        padding: '10px 20px',
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        marginBottom: '20px'
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
    products: {
        padding: '20px'
    },
    heading: {
        textAlign: 'center',
        margin: '20px 0'
    },
    boxContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    },
    box: {
        background: 'rgba(255, 255, 255, 0.8)',
        padding: '20px',
        margin: '10px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        width: 'calc(100% / 3 - 40px)',
        boxSizing: 'border-box'
    },
    image: {
        textAlign: 'center',
        marginBottom: '10px'
    },
    content: {
        textAlign: 'center'
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
        width: '100%'
    }
};

export default AccountPage;
