<script>
    import { fade } from 'svelte/transition';
    import { client } from '../../modules/sanityclient';
    import GridItem from '../../components/GridItem.svelte';

    const query = "*[_type=='plant' && category == 'Succulents' && available]"

    //empty arr to push our sanity content 
        let itemsArr = [];

    // fetching from sanity 
        client.fetch(query).then(items => {
			itemsArr = items;
		});
</script>

<div id="headline">
    <h2>current succulents available...</h2>
</div>
<div id="grid">
    {#each itemsArr as item}
        <GridItem {...item}/>
    {/each}
</div>

<style>
    #headline{
        width:100%;
        display:flex;
        justify-content: end;
    }
    #grid{
        margin: 2rem auto 0 auto;
    }
    @media screen and (min-width:770px){
        #grid{
            columns:2;
            gap:2rem;
        }
    }
    
</style>