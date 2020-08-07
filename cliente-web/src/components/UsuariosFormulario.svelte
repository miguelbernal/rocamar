<script>
  import { operacion } from '../stores/operacionStore.js';
  import { registro } from '../stores/registroStore.js';

  export let operacion_actual = '';
  export let registro_actual = {};
	
	const unsubscribe = operacion.subscribe(value => {
		operacion_actual = value;
  });

  const unsubscribe2 = registro.subscribe(value => {
		registro_actual = value;
  });

  function guardar(){
    if(operacion_actual == 'agregar'){
      console.log('agregar');
    } else if(operacion_actual == 'editar'){
      console.log('modificar ' + registro_actual.id);
    } else if(operacion_actual == 'eliminar'){
      console.log('eliminar ' + registro_actual.id);
    }
  }
  
</script>

<style>

</style>

<div class="modal fade" id="formularioModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            {#if operacion_actual == 'agregar' }
              Agregar
            {/if} 
            {#if operacion_actual == 'editar' }
              Editar
            {/if}
            {#if operacion_actual == 'eliminar' }
              Eliminar
            {/if} 
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="row">
              <div class="col col-md-2">
                  <label for="nombre">Nombre</label>
              </div>
              <div class="col col-md-10">
                  {#if operacion_actual == 'eliminar'}
                    <input type="text" 
                          id="nombre" name="nombre"
                          value={registro_actual.nombre}
                          readonly
                          class="form-control form-control-sm">
                  {/if}
                  {#if operacion_actual != 'eliminar'}
                    <input type="text" 
                          id="nombre" name="nombre"
                          value={registro_actual.nombre}
                          class="form-control form-control-sm">
                  {/if}  
              </div>
          </div>
          <div class="row">
            <div class="col col-md-2">
                <label for="usuario">Usuario</label>
            </div>
            <div class="col col-md-10">
              {#if operacion_actual == 'eliminar'}
                <input type="text" 
                       id="usuario" name="usuario"
                       value={registro_actual.usuario}
                       readonly
                       class="form-control form-control-sm"> 
              {/if}
              {#if operacion_actual != 'eliminar'}
                <input type="text" 
                       id="usuario" name="usuario"
                       value={registro_actual.usuario}
                       class="form-control form-control-sm"> 
              {/if}
            </div>
          </div>
          <div class="row">
            <div class="col col-md-2">
                <label for="clave">Clave</label>
            </div>
            <div class="col col-md-10">
              {#if operacion_actual == 'eliminar'}
                <input type="password" 
                       id="clave" name="clave"
                       value={registro_actual.clave}
                       readonly
                       class="form-control form-control-sm"> 
              {/if}
              {#if operacion_actual != 'eliminar'}
                <input type="password" 
                       id="clave" name="clave"
                       value={registro_actual.clave}
                       class="form-control form-control-sm"> 
              {/if}
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
          <button type="button" class="btn btn-primary" on:click={guardar}>
            {#if operacion_actual == 'agregar' }
              Agregar
            {/if} 
            {#if operacion_actual == 'editar' }
              Modificar
            {/if}
            {#if operacion_actual == 'eliminar' }
              Eliminar
            {/if} 
          </button>
        </div>
      </div>
    </div>
  </div>