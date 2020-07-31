<script>
    import UsuariosFormulario from "./UsuariosFormulario.svelte";
    let usuarios = []
	fetch('http://localhost:3000/api/usuarios')
  	.then(response => response.json())
  	.then(json => {
		  usuarios = json;
		  console.log(json);
          })
    function agregar(){
        console.log('agregar');
        jQuery('#formularioModal').modal('show');
    }

    function editar(){
        console.log('editar');
        jQuery('#formularioModal').modal('show');
    }

    function eliminar(){
        console.log('eliminar');
        jQuery('#formularioModal').modal('show');
    }
</script>
<div class="card">
    <div class="card-header text-center">
        Usuarios
    </div>
    <div class="card-body">
        <table class="table table-striped table-bordered table-hover">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Usuario</th>
                    <th>Clave</th>
                    <th class="text-center" style="width:200px">
                        <button class="btn btn-primary btn-sm" on:click={agregar}>
                            <i class="fas fa-plus"></i>
                        </button>
                    </th>
                </tr>
            </thead>
            <tbody>
                {#each usuarios as usuario}
                <tr>
                    <td>{usuario.id_usuario}</td>
                    <td>{usuario.nombre_usuario}</td>
                    <td>{usuario.usuario_usuario}</td>
                    <td>{usuario.clave_usuario}</td>
                    <td class="text-center">
                        <button class="btn btn-success btn-sm" on:click={editar}>
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-danger btn-sm" on:click={eliminar}>
                            <i class="fas fa-trash"></i>
                        </button>
                    </td>
                </tr>
                {/each}
            </tbody>
            
        </table>
    </div>
    <div class="card-footer text-center">
        <button class="btn btn-warning btn-sm">
            Salir
        </button>
    </div>
</div>

<UsuariosFormulario/>

<style>

</style>