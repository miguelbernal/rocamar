<script>
	import NavBar from  './components/NavBar.svelte'
	import Carousel from  './components/Carousel.svelte'
	import Card from  './components/Card.svelte'
	let posts = []
	fetch('https://jsonplaceholder.typicode.com/posts')
  	.then(response => response.json())
  	.then(json => {
		  posts = json;
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
		{#each posts as post}
			<div class="col-4"><Card title={post.title} content={post.body}/></div>
		{/each}
		
	</div>
	
  </div>
</main>
