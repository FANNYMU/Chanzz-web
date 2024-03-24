document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const username = form.username.value;
        const password = form.password.value;

        // Contoh validasi sederhana
        if (username === "user" && password === "user") {
            // Jika login berhasil, Anda dapat melakukan redirect ke halaman lain
            window.location.href = "indexs.html";
        } else {
            // Jika login gagal, tampilkan pesan error
            errorMessage.textContent = "Username atau password salah.";
        }
    });
});
