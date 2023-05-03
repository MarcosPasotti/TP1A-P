window.onload=Iniciar;
function Iniciar(){
    let SeguirPerfil =document.getElementById('btnSeguir');
    SeguirPerfil.addEventListener("click",SeguirUsuario);

    let AgregarComentario=document.getElementById('btnComentar');
    AgregarComentario.addEventListener("click",Comentar);

    let MeGusta=document.getElementById('btnLike');
    MeGusta.addEventListener("click",DarMeGusta);

    /*let QuitarMeGusta=document.getElementById('btnLike');   FALLA, HAY QUE ANALIZARLO MEJOR
    QuitarMeGusta.addEventListener("click",SacarMeGusta);*/
}
function SeguirUsuario(evento){
    evento.preventDefault();

    let SeguirPerfil=document.getElementById('btnSeguir');
    if (SeguirPerfil.textContent==='Seguir')
    {
        SeguirPerfil.textContent='Dejar de seguir';
        return;
    }
    else
    {
        SeguirPerfil.textContent='Seguir';
        return;
    }
}

function Comentar(evento){
    evento.preventDefault();
    
    let ingresarUsuario =document.getElementById('Usuario').value;
    let ingresarComentario=document.getElementById('Coment').value;
    let UltimoComentario=document.getElementById('UltiComent');

    if(ingresarUsuario===" "||ingresarUsuario== null||ingresarUsuario.length==0||ingresarUsuario.length>50)
    {
        //alert("Debe completar el Usuario");
        return false;
    }
    if(ingresarComentario===" "||ingresarComentario==null||ingresarComentario.length==0||ingresarComentario.length>1500)
    {
        //alert("Debe realizar un Comentario");
        return false;
    }
    
    let strong = document.createElement("strong");
    let ComentUsuario = document.createElement("p");
    var Textostrong = document.createTextNode(`${ingresarUsuario}: `);
    var mensaje = document.createTextNode(`${ingresarComentario}`);
    strong.appendChild(Textostrong);
    ComentUsuario.appendChild(strong);
    ComentUsuario.appendChild(mensaje);
 
    UltimoComentario.appendChild(ComentUsuario);
  

    document.getElementById('Usuario').value=" ";
    document.getElementById('Coment').value=" ";
    return;

}

function DarMeGusta(evento){
    evento.preventDefault();

    let MeGusta=document.getElementById('btnLike');
    if (MeGusta.textContent==='Me gusta')
    {
        let SumadorMegusta=document.getElementById('CantLikes');
        let CantMegusta= 3;
        CantMegusta++;
        SumadorMegusta.innerHTML= `${CantMegusta} Me gusta`;
        MeGusta.textContent='Quitar Me gusta';
        return;
    }
    else
    {
        MeGusta.textContent='Me gusta';
        return;
    }
    
          
}

/*function SacarMeGusta(evento){
    evento.preventDefault();
    let QuitarMegusta=document.getElementById('btnLike');
         if (QuitarMegusta.textContent==='Quitar Me gusta')
         {
            let RestarMegusta=document.getElementById('CantLikes');
            let CantMegusta= 4;
            CantMegusta--;
            RestarMegusta.innerHTML= `${CantMegusta} Quitar Me gusta`;
            QuitarMegusta.textContent='Me gusta';
            return;
        }
        else
        {
            QuitarMegusta.textContent='Quitar Me gusta';
            return;
        }
}*/

