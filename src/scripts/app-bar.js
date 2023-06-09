class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  render() {
    this.innerHTML = `
      <!-- Navbar Mobile -->
      <div class="mobilemenu">
        <div class="logo">
        <picture>
        <source media="(max-width: 600px)" type="image/webp" srcset="./images/Logo.webp">
        <source media="(max-width: 600px)" type="image/jpeg" srcset="./images/Logo.jpg">
          <img src="./images/Logo.jpg" width="10%" alt="Logo">
          </picture>
        </div>
        <div class="iconmenu" id="menu">
          <a href="#" style="font-size:30px;">&#9776;</a>
        </div>
      </div>

      <nav id="drawer" class="navmobile">
        <ul class="navlistmobile">
          <li class="navitemsmobile"><a href="#/main-menu">Home</a></li>
          <li class="navitemsmobile"><a href="#/favorite">Favorite</a></li>
          <li class="navitemsmobile"><a href="https://github.com/daffanaufal/Restaurant-apps3" target="_blank">About Us</a></li>
        </ul>
      </nav>

      <!-- Navbar Desktop -->
      <nav class="nav">
        <a class="logo" href="">
        <picture>
        <source type="image/webp" srcset="./images/Logo.webp">
        <source type="image/jpeg" srcset="./images/Logo.jpg">
          <img src="./images/Logo.jpg" width="8%" alt="Logo">
          </picture>
        </a>
        <ul class="navlist">
          <li class="navitems"><a href="#/main-menu">Home</a></li>
          <li class="navitems"><a href="#/favorite">Favorite</a></li>
          <li class="navitems"><a href="https://github.com/daffanaufal/Restaurant-apps3" target="_blank">About Us</a></li>
        </ul>
      </nav>

      <!-- Jumbotron -->
      <div class="hero">
        <div class="inner-hero">
          <h1 class="judul-hero">Resto finder <span style="font-size: 12px;">by Mangan</span></h1>
          <p class="subjudul-hero">Temukan restoran terbaik di kota anda.</p>
        </div>
      </div>

        `;
  }
}

customElements.define('app-bar', AppBar);
