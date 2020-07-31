<script>

</script>

<style>

</style>

<div class="modal fade" id="formularioModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Agregar</h5>
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
                  <input type="text" 
                         id="nombre" name="nombre"
                         class="form-control form-control-sm"> 
              </div>
          </div>
          <div class="row">
            <div class="col col-md-2">
                <label for="usuario">Usuario</label>
            </div>
            <div class="col col-md-10">
                <input type="text" 
                       id="usuario" name="usuario"
                       class="form-control form-control-sm"> 
            </div>
          </div>
          <div class="row">
            <div class="col col-md-2">
                <label for="clave">Clave</label>
            </div>
            <div class="col col-md-10">
                <input type="password" 
                       id="clave" name="clave"
                       class="form-control form-control-sm"> 
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
          <button type="button" class="btn btn-primary">Guardar</button>
        </div>
      </div>
    </div>
  </div>