import React, { useState } from 'react';
import axios from 'axios'; // Usamos axios para hacer las peticiones AJAX

const LoginRegister = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [loginError, setLoginError] = useState('');
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

    const registerUser = async () => {
        try {
            const response = await axios.post('http://localhost:5000/Empleado', {
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
                axios.get(`http://localhost:5000/User?Usuario=${Usuario}`),
                axios.get(`http://localhost:5000/Empleado?Usuario=${Usuario}`),
                axios.get(`http://localhost:5000/Cliente?Usuario=${Usuario}`)
            ]);

            const user = userRes.data.find(u => u.Usuario === Usuario);
            const employee = employeeRes.data.find(e => e.Usuario === Usuario);
            const client = clientRes.data.find(c => c.Usuario === Usuario);

            if (user && user.Contraseña === Contraseña) {
                alert('Inicio de sesión exitoso como Administrador');
                localStorage.setItem('loggedIn', 'true');
                window.location.href = 'homeA.html';
            } else if (employee && employee.Contraseña === Contraseña) {
                alert('Inicio de sesión exitoso como Empleado');
                localStorage.setItem('loggedIn', 'true');
                window.location.href = 'homeA.html';
            } else if (client && client.Contraseña === Contraseña) {
                alert('Inicio de sesión exitoso como Cliente');
                localStorage.setItem('loggedIn', 'true');
                window.location.href = 'homeU.html';
            } else {
                setLoginError('Usuario o contraseña incorrectos.');
            }
        } catch (error) {
            console.error(error);
            setLoginError('Error al iniciar sesión. Inténtalo de nuevo.');
        }
    };

    return (
        <main>
            <div className="contenedor__todo">
                <div className="caja__trasera">
                    <div className="caja__trasera-login">
                        <h3>¿Ya tienes Cuenta?</h3>
                        <p>Inicia Sesión para entrar en la página</p>
                        <button onClick={() => setIsLogin(true)}>Iniciar Sesión</button>
                    </div>
                    <div className="caja__trasera-register">
                        <h3>¿Aún no tienes Cuenta?</h3>
                        <p>Regístrate para que puedas iniciar sesión</p>
                        <button onClick={() => setIsLogin(false)}>Registrarse</button>
                    </div>
                </div>
                <div className="contenedor__Login-Register">
                    {isLogin ? (
                        <form onSubmit={handleSubmit} className="formulario__login">
                            <h2>Iniciar Sesión</h2>
                            <h5>Usuario</h5>
                            <input
                                type="text"
                                placeholder="Usuario"
                                name="Usuario"
                                value={formData.Usuario}
                                onChange={handleInputChange}
                            />
                            <h5>Contraseña</h5>
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
                        <form onSubmit={handleSubmit} className="formulario__register">
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
                                className="desplegable"
                                required
                                name="TipoDoc"
                                value={formData.TipoDoc}
                                onChange={handleInputChange}
                            >
                                <option value="">Selecciona tu tipo de documento</option>
                                <option value="T.I">T.I</option>
                                <option value="C.C">C.C</option>
                                <option value="E.E">E.E</option>
                            </select>
                            <input
                                type="text"
                                required
                                placeholder="Número de Identificación"
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
                                type="text"
                                required
                                placeholder="Correo Electrónico"
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
                        </form>
                    )}
                </div>
            </div>
        </main>
    );
};

export default LoginRegister;
