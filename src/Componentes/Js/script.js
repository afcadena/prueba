document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar elementos
    const contenedorLoginRegister = document.querySelector(".contenedor__Login-Register");
    const formularioLogin = document.querySelector(".formulario__login");
    const formularioRegister = document.querySelector(".formulario__register");
    const cajaTraseraRegister = document.querySelector(".caja__trasera-register");
    const cajaTraseraLogin = document.querySelector(".caja__trasera-login");
    const btnRegistrarse = document.getElementById("btn__resgistrarse");
    const btnIniciarSesion = document.getElementById("btn__iniciar-sesion");
  
    // Verificar que los elementos existan antes de agregar event listeners
    if (btnRegistrarse && btnIniciarSesion) {
      // Agregar event listeners
      btnRegistrarse.addEventListener("click", register);
      btnIniciarSesion.addEventListener("click", iniciarSesion);
      window.addEventListener("resize", anchoPagina);
    } else {
      console.error("One or both of the buttons don't exist in the DOM");
    }
  
    // Funciones
    function anchoPagina() {
      if (window.innerWidth > 850) {
        cajaTraseraLogin.style.display = "block";
        cajaTraseraRegister.style.display = "block";
      } else {
        cajaTraseraRegister.style.display = "block";
        cajaTraseraRegister.style.opacity = "1";
        cajaTraseraLogin.style.display = "none";
        formularioLogin.style.display = "block";
        formularioRegister.style.display = "none";
        contenedorLoginRegister.style.left = "0px";
      }
    }
  
    function iniciarSesion() {
      if (window.innerWidth > 850) {
        formularioRegister.style.display = "none";
        contenedorLoginRegister.style.left = "10px";
        formularioLogin.style.display = "block";
        cajaTraseraRegister.style.opacity = "1";
        cajaTraseraLogin.style.opacity = "0";
      } else {
        formularioRegister.style.display = "none";
        contenedorLoginRegister.style.left = "0px";
        formularioLogin.style.display = "block";
        cajaTraseraRegister.style.display = "block";
        cajaTraseraLogin.style.display = "none";
      }
    }
  
    function register() {
        console.log("Register function called");
        if (window.innerWidth > 850) {
          formularioLogin.style.display = "none";
          formularioRegister.style.display = "block";
          contenedorLoginRegister.style.left = "410px";
          cajaTraseraLogin.style.opacity = "0";
          cajaTraseraRegister.style.opacity = "1";
        } else {
          formularioLogin.style.display = "none";
          formularioRegister.style.display = "block";
          contenedorLoginRegister.style.left = "0px";
          cajaTraseraLogin.style.display = "none";
          cajaTraseraRegister.style.display = "block";
          cajaTraseraRegister.style.opacity = "1";
        }
      }
  });