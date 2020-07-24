<script>
    import { pagina } from '../stores/rocamarStore.js';
    function sitio() {
		pagina.set('sitio');
    }
    function menu() {
		pagina.set('menu');
	}
</script>
<div class="panel-admin">
    <img src="http://localhost:5000/img/logo.jpg" alt="Rocamar" width="350">
    <div class="input-group mb-1">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon-usuario">
            <i class="fas fa-user"></i>
          </span>
        </div>
        <input type="text" class="form-control" placeholder="Usuario" aria-label="Username" aria-describedby="basic-addon-usuario">
    </div>

    <div class="input-group mb-1">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon-usuario">
            <i class="fas fa-key"></i>
          </span>
        </div>
        <input type="password" class="form-control" placeholder="Contraseña" aria-label="Username" aria-describedby="basic-addon-usuario">
    </div>

    <div class="btn-group d-flex" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-primary btn-sm" on:click={menu}>
            <i class="fas fa-sign-in-alt"></i> Ingresar
        </button>
        <button type="button" class="btn btn-danger btn-sm" on:click={sitio}>
            <i class="fas fa-sign-out-alt"></i> Salir
        </button>
    </div>
</div>
<style>
    .panel-admin{
        width: 350px;
        height: 480px;
        /*background-color: rgba(255, 50, 50, .5);*/
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -240px;
        margin-left: -175px;
    }
</style>