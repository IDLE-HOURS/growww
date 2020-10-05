<svelte:head>
	<title>growww - a fictional plant shop</title>
</svelte:head>

<script>
    import { fade } from 'svelte/transition';
    import { client } from '../modules/sanityclient';

    const query = "*[_type=='category']"

    //empty arr to push our sanity content 
        let itemsArr = [];

    // fetching from sanity 
        client.fetch(query).then(items => {
			itemsArr = items;
		});
</script>


	{#each itemsArr as item}
	<row>
			<a rel=prefetch href="/{item.slug.current}" class="img-wrap">
				<img src="https://cdn.sanity.io/images/a6uv2qns/production/{item.image.asset._ref.replace(/-png/g, ".png").replace(/-jpg/g, ".jpg").replace(/image-/g, "")}" alt="{ item.name }" transition:fade>
			</a>
			<div class="text">
				<a rel=prefetch href="/{item.slug.current}">
					<h1>{ item.name }</h1>
				</a>
				<h4>{ item.pheonetic }</h4>
				<p>{ item.description }</p>
			</div>
	</row>
	{:else}
		<p id="loading">loading...</p>
	{/each}

<style>
	
	img{
		width:100%;
		margin-bottom:2rem;
	}
	.text{
		max-width:500px;
		margin:2rem;
		display:flex;
		flex-direction: column;
		
	}
	.text:nth-child(odd){
		align-items: flex-end;
		text-align: right;
	}
	h1{
		font-size:4rem;
		text-transform:lowercase;
	}
	h4{
		font-size:1.5rem;
	}
	p{
		font-size:1.2rem;
	}
	#loading{
		position:fixed;
		top:50%;
		right:50%;
	}
	row{
		display:flex;
		align-items: center;
		justify-content: space-around;
		
	}
	row:nth-child(even){
		flex-direction: row-reverse;
	}
	row:first-child{
		margin-top:2rem;
	}
	img{
		max-width:600px;
	}
	@media screen and (max-width:770px){
		h1{
			font-size:3rem;
		}
		h4{
			font-size:1rem
		}
		p{
			font-size:.8rem;
		}
	}
	@media screen and (max-width:900px){
		row{
			position:relative;
			text-align:center;
		}
		.img-wrap{
			width:100%;
		}
		img{
			opacity: 30%;
		}
		
		.text{
			margin:0;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}
</style>