<script>
let props = {...$$props};
delete props['$$slots'];
delete props['$$scope'];
delete props['name'];
function init(e){
    if($$props['name'])
        e._target_slot = $$props['name'];
}
</script>
<div use:init {...props}><slot/></div>