<script>
	import { pagina } from './stores/rocamarStore.js';
	import NavBar from  './components/NavBar.svelte'
	import Carousel from  './components/Carousel.svelte'
	import Card from  './components/Card.svelte'
	import Footer from  './components/Footer.svelte'
	import Admin from  './components/Admin.svelte'
	import Menu from  './components/Menu.svelte'

	export let pagina_actual = '';
	
	const unsubscribe = pagina.subscribe(value => {
		pagina_actual = value;
	});

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
	{#if pagina_actual == 'sitio' }
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
	{/if}
	{#if pagina_actual == 'admin' }
		<Admin/>
	{/if}
	{#if pagina_actual == 'menu' }
		<Menu/>
	{/if}
</main>
