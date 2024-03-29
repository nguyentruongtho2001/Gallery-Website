<template>
  <nav class="navbar">
    <div class="navbar-left">
      <div class="logo">
        <span>Cloud Gallery</span>
      </div>
      <div class="menu-icon">
        <button id="nav" class="menu-button">
          <svg class="menu-svg" viewBox="0 0 20 20" xmlns="">
          </svg>
        </button>
      </div>
    </div>
    <div class="navbar-right">
      <div class="menu-items">
        <router-link to="/" class="nav-link">Gallery</router-link>
        <router-link to="/upload" class="upload-link">Upload</router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 1rem 3rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-top: 2px solid #4a90e2;
}

.navbar-left {
  display: flex;
  align-items: center;
}

.logo {
  margin-right: 1rem;
}

.logo span {
  font-weight: bold;
  font-size: 1.5rem;
  color: #2d3748;
}

.menu-icon {
  display: none;
}

.menu-button {
  display: flex;
  align-items: center;
  border: 2px solid #4a90e2;
  border-radius: 5px;
  padding: 0.5rem;
  cursor: pointer;
  background-color: transparent;
}

.menu-svg {
  fill: #4a90e2;
  width: 1.5rem;
  height: 1.5rem;
}

.navbar-right {
  display: flex;
  align-items: center;
}

.menu-items {
  display: flex;
}

.nav-link {
  margin-right: 1rem;
  padding: 0.5rem 1rem;
  color: #2d3748;
  text-decoration: none;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #fff;
  background-color: #4a90e2;
}

.upload-link {
  padding: 0.5rem 1rem;
  background-color: #4a90e2;
  color: #fff;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.upload-link:hover {
  background-color: #2c5282;
}
</style>
