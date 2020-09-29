<script>
    import { client } from '../modules/sanityclient.js';

    const query = "*[_type=='siteSettings']";
    let settingsArr = [];
    let address;
    let gmaps;
    let hours;
    let phone;    
		client.fetch(query).then(data => {
            settingsArr = data[0];
            address = settingsArr.address;
            hours = settingsArr.hours;
            gmaps = settingsArr.gmaps;
            phone = settingsArr.phone;
        });
</script>

<footer>
    {#if address }
        <p><a href="{ gmaps }">{ address }</a></p>
    {/if}
    {#if hours }
        <p>{ hours }</p>
    {/if}
    {#if phone }
        <p><a href="tel:{ phone.replace(/[()]/g, '') }">{ phone }</a></p>
    {/if}
        <div class="small">
            <p>&copy; {new Date().getFullYear()} <a href="https://blkcatstudio.com" target="_blank">Black Cat Studio.</a></p>
            <p>Powered by <a href="https://www.sanity.io/" target="_blank">Sanity</a> & <a href="https://sapper.svelte.dev" target="_blank">Sapper</a>.</p>
        </div>
    
</footer>

<style>
    footer{
        margin:2rem;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    p{
        font-size:1.25rem;
        line-height:1.2;
        margin:.25rem;
    }
    .small > p{
        font-size:.75rem;
        
    }
    .small{
        margin-top: 1rem;
    }
</style>