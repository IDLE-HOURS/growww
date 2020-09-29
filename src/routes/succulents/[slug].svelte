<script context="module">
    import { client } from '../../modules/sanityclient.js';

    let plant = [];

	export async function preload(page, session) {
        
        const { slug } = page.params;
        const query = `*[slug.current == "${slug}"]`;
		const res = await client.fetch(query).then(data => {
            plant = data[0];
        });
        return { plant };
    }
</script>

<script>
    export let plant;

    const { name, description, pheonetic, image: { asset: { _ref: ref } } } = plant;

    let oldPath = 'https://cdn.sanity.io/images/a6uv2qns/production/' + ref;
    let imgPath = oldPath.replace(/-png/g, ".png").replace(/-jpg/g, ".jpg").replace(/image-/g, "");

    
</script>


<row>
    <img src="{ imgPath }" alt="">
    <div class="text">
            {#if name}
				<h1>{ name }</h1>
            {/if}
            {#if pheonetic}
				<h4>{ pheonetic }</h4>
            {/if}
            {#if description}
				<p>{ description }</p>
            {/if}
    </div>
</row>

<style>
   row{
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        grid-template-areas: "photo" "text"; 
        
   }
    img{
        max-width:80vw; 
        grid-area: photo;
        margin: 3rem auto;
    } 
    .text{
		
		margin:2rem;
		display:flex;
		flex-direction: column;
        grid-area: text;
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
    @media screen and (min-width:900px){
         row{
            grid-template-columns: auto 1fr;
            grid-template-rows: auto;
            grid-template-areas: "photo text";
            justify-items:end;
        }
        img{
            max-width:450px;
            margin-top:2rem;
        }
        .text{
            align-self:center;
            max-width:500px;
        }
    }
</style>