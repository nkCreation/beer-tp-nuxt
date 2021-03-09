<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link to="/" class="navbar-item">
          <img src="@/assets/logo.svg" alt="MyBeer" />
        </nuxt-link>

        <span class="navbar-burger burger" data-target="navbarMenu">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div id="navbarMenu" class="navbar-menu">
        <div class="navbar-end">
          <div class="tabs is-right">
            <ul>
              <li>
                <nuxt-link to="/" active-class="is-active"> Home</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/favorite" active-class="is-active"
                  >Favorites</nuxt-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
