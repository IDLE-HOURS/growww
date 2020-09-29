<script>
	import Logo from '../components/Logo.svelte';
	import Footer from '../components/Footer.svelte'

</script>

<style>
	main {
		position: relative;
		max-width: 90vw;
		background-color: white;
		padding: 0.5rem;
		margin: 1rem auto;
		box-sizing: border-box;
	}
	@media screen and (min-width:900px){
		main{
			margin: 2rem auto;
			padding:2.5;
		}
	}            
</style>

<Logo />

<main>
	<slot></slot>
</main>

<Footer />