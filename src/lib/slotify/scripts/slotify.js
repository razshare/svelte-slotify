function map(e,targets,depth){
    if(depth >= 3000){
        console.error("Slotify depth exceeded (",depth,").");
        return;
    }
    for(let child of e.children){
        if(child.hasAttribute("_slot")){
            let attr = child.getAttribute("_slot");
            if(!targets[attr])
            targets[attr] = child;
        }
        if(child.children.length > 0){
            map(child,targets,++depth);
        }
    }
}

/**
 * Find all Slotify components or components with a "slot" attribute and
 * append them according to the given map of targets.
 * @param {Element} e a wrapper Element containing Slotify components
 * or components with a "slot" property.
 * @param {Object} targets an object that maps slot name (keys) to target Elements (values).
 * If the object is not passed or is passed as null or "scan" is True, the function will try find the targets
 * inside the given wrapper by looking for the "_slot" attribute.
 * @param {boolean} scan specifies wether or not to scan the wrapper Element for "_slot" attributes.
 * NOTE: if "targets" is not passed or is passed as null, the scan process will occour regardles if 
 * this argument is True or False.
 */
export default function slotify(e,targets=null,scan=true){
    if(targets === null){
        targets = {};
        map(e,targets,0);
    }else
        if(scan)
            map(e,targets,0);
    
    for(let key in targets){
        let elements = new Array();
        for(let child of e.children){
            if(child._target_slot === key){
                elements.push([child,targets[key]]);
            }
        }
        elements.forEach((element)=>{
            element[1].appendChild(element[0]);
        });
    }
}