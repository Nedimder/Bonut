fetch("navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;

    // 🔥 navbar yüklendikten sonra
    const ball = document.querySelector(".toggle-ball");

    const items = document.querySelectorAll(
      ".main-navbar, \
       .nut-list-container, \
       .card, \
       .card h3, \
       .card a, \
       .Description-two-div, \
       .container, \
       .main-navbar-wrapper-menu-list-item a, \
       body, \
       .main-navbar-wrapper-menu-list-item, \
       .nut-list-container-two, \
       .main-sidebar, \
       .main-sidebar i, \
       .main-navbar-wrapper-toggle, \
       .toggle-ball, \
       .nut-list-title, \
       .nut-list-wrapper, \
       .nut-list"
    );

    if (!ball) {
      console.error("toggle-ball bulunamadı");
      return;
    }

    ball.addEventListener("click", () => {
      items.forEach(item => item.classList.toggle("active"));
    });
  });
