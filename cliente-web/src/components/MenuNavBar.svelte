<script>
  import { pagina } from '../stores/rocamarStore.js';
  function usuarios() {
		pagina.set('usuarios');
	}
</script>

<style>

</style>

<nav class="navbar navbar-expand-lg navbar-light warning-color lighten-5">

  <a class="navbar-brand" href="#">Navbar</a>

  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#basicExampleNav"
    aria-controls="basicExampleNav"
    aria-expanded="false"
    aria-label="Toggle navigation">
    <span class="navbar-toggler-icon" />
  </button>

  <div class="collapse navbar-collapse" id="basicExampleNav">

    <ul class="navbar-nav mr-auto">
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          id="navbarDropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false">
          Archivos
        </a>
        <div
          class="dropdown-menu dropdown-primary"
          aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" on:click={usuarios} href="#">Usuarios</a>
        </div>
      </li>

    </ul>

  </div>
</nav>
