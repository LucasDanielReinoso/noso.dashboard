import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { 
  getAuth, 
  onAuthStateChanged, 
  signOut 
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Configuración de tu proyecto NOSO Pro
const firebaseConfig = {
  apiKey: "AIzaSyCxGfy4Y4F4C3dPoXUOuXoxZfAfX7ljY2w",
  authDomain: "noso-pro.firebaseapp.com",
  projectId: "noso-pro",
  storageBucket: "noso-pro.firebasestorage.app",
  messagingSenderId: "801843860180",
  appId: "1:801843860180:web:bc166745f954eb080e6141"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Guardián: Verifica si el usuario está autenticado
onAuthStateChanged(auth, (user) => {
  if (!user) {
    // Si no hay usuario activo, bloquea el acceso y redirige al login
    window.location.href = "login.html";
  } else {
    console.log("Usuario autenticado correctamente:", user.email);
  }
});

// Función global para cerrar sesión cuando el usuario haga clic en un botón
window.logoutUser = async function() {
  try {
    await signOut(auth);
    window.location.href = "login.html";
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
  }
};