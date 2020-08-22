<script>
import { onMount } from "svelte";
import slotify from '../lib/slotify/scripts/slotify';
let wrapper,header,body,footer;
onMount(()=>slotify(wrapper,{header,body,footer}));
</script>
<div bind:this={wrapper} class="grid">
    <div bind:this={body} class="body"></div>
    <div bind:this={footer} class="footer"></div>
    <div bind:this={header} class="header"></div>
    <slot />
</div>

<style>
    .header{
        grid-area: header;
        justify-self: center;
    }
    .body{
        grid-area: body;
        justify-self: center;
    }
    .footer{
        grid-area: footer;
        justify-self: center;
    }
    .grid{
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-areas: 
            "header header header"
            "body body body"
            "body body body"
            "body body body"
            "footer footer footer"
        ;
    }
</style>