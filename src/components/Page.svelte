<script>
import { onMount } from "svelte";
import slotify from '../lib/slotify/scripts/slotify';
</script>
<div use:slotify class="grid">
    <div _slot="body" class="body"></div>
    <div _slot="footer" class="footer"></div>
    <div _slot="header" class="header">
        <div _slot="menu"></div>
    </div>
    <div _slot="others" class="others"></div>
    <slot />
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