export function boton_clarooscuro() {
    
    const boton_clarooscuro = document.getElementById("flexSwitchCheckDefault");

    boton_clarooscuro.onclick = () => {
        document.documentElement.classList.toggle('modo-alternativo');
}
}