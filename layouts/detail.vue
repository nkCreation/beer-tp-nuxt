<template>
  <div>
    <section class="hero is-medium is-bold">
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <router-link to="/" class="navbar-item">
                <img src="@/assets/logo.svg" alt="MyBeer" />
              </router-link>

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
                      <router-link to="/" active-class="is-active">
                        Home</router-link
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </section>

    <section class="wrapper-content">
      <Nuxt />
    </section>

    <footer class="footer">
      <div class="container">
        <p class="has-text-centered">&copy; MyBeer 2021</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.wrapper-content {
  margin: 4rem 0;
}
</style>
