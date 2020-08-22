<script>
import { onMount } from "svelte";
import slotify from '../lib/slotify/scripts/slotify';
let wrapper,header,body,footer,menu,others;
onMount(()=>{
    slotify(wrapper,{
        body,
        footer,
        header,
        menu,
        others
    },false); 
});
</script>
<div bind:this={wrapper} >
    <slot/>
</div>
<div class="grid">
    <div bind:this={body} class="body"></div>
    <div bind:this={footer} class="footer"></div>
    <div bind:this={header} class="header">
        <div bind:this={menu}></div>
    </div>
    <div bind:this={others} class="others"></div>
</div>

<style>
    .header{
        grid-area: header;
        justify-self: center;
        border-bottom: 1px solid #333;
        width: 100%;
    }
    .body{
        grid-area: body;
        justify-self: start;
        border-bottom: 1px solid #333;
        width: 100%;
    }
    .footer{
        grid-area: footer;
        justify-self: center;
        border-bottom: 1px solid #333;
        width: 100%;
    }
    .others{
        grid-area: others;
        justify-self: center;
        border-bottom: 1px solid #333;
        border-right: 1px solid #333;
        width: 100%;
    }
    .grid{
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-areas: 
            "header header header"
            "others body body"
            "others body body"
            "others body body"
            "footer footer footer"
        ;
        grid-template-columns: 1fr 3fr 3fr;
    }
</style>