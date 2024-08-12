import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import "./Style_Login_And_Register.css";

const LoginRegister = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        Nombre: '',
        TipoDoc: '',
        Documento: '',
        Direccion: '',
        Telefono: '',
        Correo: '',
        Usuario: '',
        Contraseña: ''
    });
    const [loginError, setLoginError] = useState('');

    const contenedorLoginRegisterRef = useRef(null);
    const formularioLoginRef = useRef(null);
    const formularioRegisterRef = useRef(null);
    const cajaTraseraRegisterRef = useRef(null);
    const cajaTraseraLoginRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 850) {
                // Pantalla grande
                if (cajaTraseraLoginRef.current && cajaTraseraRegisterRef.current) {
                    cajaTraseraLoginRef.current.style.display = "block";
                    cajaTraseraRegisterRef.current.style.display = "block";
                }
            } else {
                // Pantalla pequeña
                if (cajaTraseraRegisterRef.current) {
                    cajaTraseraRegisterRef.current.style.display = isLogin ? "none" : "block";
                }
                if (cajaTraseraLoginRef.current) {
                    cajaTraseraLoginRef.current.style.display = isLogin ? "block" : "none";
                }
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Ejecutar inmediatamente al cargar

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [isLogin]);

    useEffect(() => {
        if (window.innerWidth > 850) {
            // Pantalla grande
            if (formularioLoginRef.current) {
                formularioLoginRef.current.style.display = isLogin ? "block" : "none";
            }
            if (formularioRegisterRef.current) {
                formularioRegisterRef.current.style.display = isLogin ? "none" : "block";
            }
            if (contenedorLoginRegisterRef.current) {
                contenedorLoginRegisterRef.current.style.left = isLogin ? "0px" : "410px";
            }
            if (cajaTraseraLoginRef.current) {
                cajaTraseraLoginRef.current.style.opacity = isLogin ? "0" : "1";
            }
            if (cajaTraseraRegisterRef.current) {
                cajaTraseraRegisterRef.current.style.opacity = isLogin ? "1" : "0";
            }
        } else {
            // Pantalla pequeña
            if (formularioLoginRef.current) {
                formularioLoginRef.current.style.display = isLogin ? "block" : "none";
            }
            if (formularioRegisterRef.current) {
                formularioRegisterRef.current.style.display = isLogin ? "none" : "block";
            }
            if (contenedorLoginRegisterRef.current) {
                contenedorLoginRegisterRef.current.style.left = "0px";
            }
            if (cajaTraseraLoginRef.current) {
                cajaTraseraLoginRef.current.style.opacity = isLogin ? "0.5" : "0";
            }
            if (cajaTraseraRegisterRef.current) {
                cajaTraseraRegisterRef.current.style.opacity = isLogin ? "0" : "1";
            }
        }
    }, [isLogin]);
    

    

    const registerUser = async () => {
        try {
            const response = await axios.post('http://localhost:3000/Empleado', {
                ...formData,
                Id: Date.now(),
                Rol: "Empleado"
            });
            alert('Usuario registrado con éxito');
        } catch (error) {
            console.error(error);
        }
    };
    
    const loginUser = async () => {
        try {
            const { Usuario, Contraseña } = formData;
            if (!Usuario || !Contraseña) {
                setLoginError('Todos los campos son obligatorios.');
                return;
            }
    
            const [userRes, employeeRes, clientRes] = await Promise.all([
                axios.get(`http://localhost:3000/User?Usuario=${Usuario}`),
                axios.get(`http://localhost:3000/Empleado?Usuario=${Usuario}`),
                axios.get(`http://localhost:3000/Cliente?Usuario=${Usuario}`)
            ]);
    
            const user = userRes.data.find(u => u.Usuario === Usuario);
            const employee = employeeRes.data.find(e => e.Usuario === Usuario);
            const client = clientRes.data.find(c => c.Usuario === Usuario);
    
            if (user && user.Contraseña === Contraseña) {
                alert('Inicio de sesión exitoso como Administrador');
                localStorage.setItem('loggedIn', 'true');
                window.location.href = './homeU.jsx';
            } else if (employee && employee.Contraseña === Contraseña) {
                alert('Inicio de sesión exitoso como Empleado');
                localStorage.setItem('loggedIn', 'true');
                window.location.href = './homeA.jsx';
            } else if (client && client.Contraseña === Contraseña) {
                alert('Inicio de sesión exitoso como Cliente');
                localStorage.setItem('loggedIn', 'true');
                window.location.href = './homeU.jsx';
            } else {
                setLoginError('Usuario o contraseña incorrectos.');
            }
        } catch (error) {
            console.error(error);
            setLoginError('Error al iniciar sesión. Inténtalo de nuevo.');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            loginUser();
        } else {
            registerUser();
        }
    };





    return (
        <main>
    <div className="contenedor__todo">
        <div className="caja__trasera">
            <div className="caja__trasera-login" ref={cajaTraseraLoginRef}>
                <h3>¿Ya tienes Cuenta?</h3>
                <p>Inicia Sesión para entrar en la página</p>
                <button onClick={() => setIsLogin(true)}>Iniciar Sesión</button>
            </div>
            <div className="caja__trasera-register" ref={cajaTraseraRegisterRef}>
                <h3>¿Aún no tienes Cuenta?</h3>
                <p>Regístrate para que puedas iniciar sesión</p>
                <button onClick={() => setIsLogin(false)}>Registrarse</button>
            </div>
        </div>
        <div className="contenedor__Login-Register" ref={contenedorLoginRegisterRef}>
            {isLogin ? (
                <form onSubmit={handleSubmit} className="formulario__login" ref={formularioLoginRef}>
                    <h2>Iniciar Sesión</h2>
                    <input
                        type="text"
                        placeholder="Usuario"
                        name="Usuario"
                        value={formData.Usuario}
                        onChange={handleInputChange}
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        name="Contraseña"
                        value={formData.Contraseña}
                        onChange={handleInputChange}
                    />
                    <button type="submit">Iniciar Sesión</button>
                    <p style={{ color: 'red' }}>{loginError}</p>
                </form>
            ) : (
                <form onSubmit={handleSubmit} className="formulario__register" ref={formularioRegisterRef}>
                    <h2>Registrarse</h2>
                    <input
                        type="text"
                        required
                        placeholder="Nombre"
                        name="Nombre"
                        value={formData.Nombre}
                        onChange={handleInputChange}
                    />
                    <select
                        required
                        name="TipoDoc"
                        value={formData.TipoDoc}
                        onChange={handleInputChange}
                        style={{ width: '100%', padding: '10px 5px', background: '#f2f2f2', fontSize: '16px', outline: 'none', border: 'none',  marginTop: '20px' }}
                         className="desplegable"
                    >
                        <option value="" disabled>Selecciona el tipo de documento</option>
                        <option value="T.I">T.I</option>
                        <option value="C.C">C.C</option>
                        <option value="C.E">C.E</option>
                        
                    </select>
                    <input
                        type="text"
                        required
                        placeholder="Documento"
                        name="Documento"
                        value={formData.Documento}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        required
                        placeholder="Dirección"
                        name="Direccion"
                        value={formData.Direccion}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        required
                        placeholder="Teléfono"
                        name="Telefono"
                        value={formData.Telefono}
                        onChange={handleInputChange}
                    />
                    <input
                        type="email"
                        required
                        placeholder="Correo"
                        name="Correo"
                        value={formData.Correo}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        required
                        placeholder="Usuario"
                        name="Usuario"
                        value={formData.Usuario}
                        onChange={handleInputChange}
                    />
                    <input
                        type="password"
                        required
                        placeholder="Contraseña"
                        name="Contraseña"
                        value={formData.Contraseña}
                        onChange={handleInputChange}
                    />
                    <button type="submit">Registrarse</button>
                    <p style={{ color: 'red' }}>{loginError}</p>
                </form>
            )}
        </div>
    </div>
</main>

    );
};

export default LoginRegister;
