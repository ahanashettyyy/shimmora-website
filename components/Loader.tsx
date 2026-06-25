"use client";

import { useEffect, useState } from "react";

export default function Loader({

children,

}:{

children:React.ReactNode

}){

const [loading,setLoading]=useState(true);

useEffect(()=>{

const timer=setTimeout(()=>{

setLoading(false);

},1800);

return ()=>clearTimeout(timer);

},[]);

if(loading){

return(

<div className="fixed inset-0 bg-[#700342] flex flex-col items-center justify-center z-[9999] text-white">

<div className="text-5xl mb-6">

✨

</div>

<h1 className="text-5xl mb-4">

The Shimmora Bar

</h1>

<p className="tracking-[6px] uppercase">

Loading...

</p>

</div>

)

}

return children;

}