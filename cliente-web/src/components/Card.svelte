<script>
    export let image;
    export let title;
    export let content;
</script>
<!-- Card -->
<div class="card">

  <!-- Card image -->
  <img class="card-img-top" src={image} alt="Card image cap">

  <!-- Card content -->
  <div class="card-body">

    <!-- Title -->
    <h4 class="card-title"><a>{title}</a></h4>
    <!-- Text -->
    <p class="card-text">{content}</p>
    <!-- Button -->
    <a href="#" class="btn btn-primary">Button</a>

  </div>

</div>
<!-- Card -->