import React, {useState, useEffect} from 'react'

export default function ScrollHooks() {

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
            const detectarScroll = () => setScrollY(window.pageYOffset);
            
            window.addEventListener("scroll", detectarScroll)

            return () =>{
                window.removeEventListener("scroll", detectarScroll)
             }
    }, []);
  return (
    <div>
        <h2>Hooks-useEffect y los ciclos de vida</h2>
        <p>Scroll Y del navegador {scrollY}px</p>
    </div>
  )
}
