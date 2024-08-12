const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const user = {
        ...registerData,
        Id: Date.now(),
        Rol: "Empleado" // Assign employee role
    };
    fetch("http://localhost:3000/Empleado", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .then(data => {
            console.log("Usuario registrado:", data);
            alert("Usuario registrado con éxito");
        })
        .catch(err => console.error(err));
};

const handleLoginSubmit = (e) => {
    e.preventDefault();
    setLoginError(''); // Clear error message

    const { Usuario, Contraseña } = loginData;

    if (!Usuario || !Contraseña) {
        setLoginError("Todos los campos son obligatorios.");
        return;
    }

    const checkUser = (url) => {
        return fetch(`${url}?Usuario=${Usuario}`)
            .then(res => res.json())
            .catch(err => {
                console.error(err);
                throw err;
            });
    };

    Promise.all([
        checkUser("http://localhost:3000/User"),
        checkUser("http://localhost:3000/Empleado"),
        checkUser("http://localhost:3000/Cliente")
    ]).then(([userRes, employeeRes, clientRes]) => {
        const user = userRes.find(u => u.Usuario === Usuario);
        const employee = employeeRes.find(e => e.Usuario === Usuario);
        const client = clientRes.find(c => c.Usuario === Usuario);

        if (user && user.Contraseña === Contraseña) {
            alert("Inicio de sesión exitoso como Administrador");
            localStorage.setItem("loggedIn", true);
            window.location.href = "homeA.html";
        } else if (employee && employee.Contraseña === Contraseña) {
            alert("Inicio de sesión exitoso como Empleado");
            localStorage.setItem("loggedIn", true);
            window.location.href = "homeA.html";
        } else if (client && client.Contraseña === Contraseña) {
            alert("Inicio de sesión exitoso como Cliente");
            localStorage.setItem("loggedIn", true);
            window.location.href = "homeU.html";
        } else {
            setLoginError("Usuario o contraseña incorrectos.");
        }
    }).catch((err) => {
        setLoginError("Error al iniciar sesión. Inténtalo de nuevo.");
    });
};
