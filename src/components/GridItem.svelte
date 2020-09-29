<script>
    export let name;
    export let slug;
    export let image;
    export let category;

    let ref = image.asset._ref;

    let oldPath = 'https://cdn.sanity.io/images/a6uv2qns/production/' + ref;
    let imgPath = oldPath.replace(/-png/g, ".png").replace(/-jpg/g, ".jpg").replace(/image-/g, "").replace(/-webp/g, ".webp");
</script>

<div class="grid-item">
    <a href="/{ category.replace(/ /g, "-").toLowerCase() }/{ slug.current }">
        <img src="{ imgPath }" alt="{ name }">
        <h1>{ name }</h1>
    </a>
</div>

<style>
    .grid-item{
        margin-bottom:1.25rem;
    }
    a{
        margin:0 auto;
        width: 100%;
        display:flex; flex-direction:column; align-items:center; justify-content:center;
    }
    img{
        width: 100%;
        height: auto;
        object-fit: cover;
    }
    img:hover{
        opacity:30%;
    }
    h1{
        margin:1rem 2rem;
        white-space: nowrap
    }
    a:hover > h1{
        cursor: pointer;
        scale:1;
        transform: translateX(0rem);
    }
    @media screen and (min-width:770px){
        img{
            width:300px;
            height:300px;
        }    
    }
    @media screen and (min-width:900px){
        img{
            width:375px;
            height:375px;
        }
    }
    @media screen and (min-width:1020px){
        img{
            width:400px;
            height:400px;
        }
    }
</style>