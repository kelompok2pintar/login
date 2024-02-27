// Fungsi untuk memvalidasi inputan pengguna
function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Contoh validasi, Anda dapat mengubahnya sesuai kebutuhan
    if (username === "admin" && password === "password") {
        alert("Anda berhasil login!");
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("message").textContent = "Username atau password salah!";
    }

    return false;
}

// Tambahkan event listener pada formulir login
const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", validateForm);