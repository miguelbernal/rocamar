<script>
	import NavBar from  './components/NavBar.svelte'
	import Carousel from  './components/Carousel.svelte'
	import Card from  './components/Card.svelte'
	import Footer from  './components/Footer.svelte'
	let productos = []
	fetch('http://localhost:3000/api/productos')
  	.then(response => response.json())
  	.then(json => {
		  productos = json;
		  console.log(json);
		  })
</script>

<style>

</style>

<main>
  <div class="container">
	<NavBar />
	<Carousel />
	<div class="row">
		{#each productos as producto}
		  <div class="col-4">
			<Card image={producto.image_producto} title={producto.nombre_producto} content={producto.descripcion_producto}/>
		  </div>
		{/each}
	</div>
	<Footer />

	
  </div>
</main>
