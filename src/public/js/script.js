const contenedor = document.getElementById('container-row');
const btnCrear = document.getElementById('btn-new');
const myModal = new bootstrap.Modal(document.getElementById("myModal"));
const form= document.getElementById("formulario");
const btnSave = document.getElementById("btn-save");


let html ="";
let option= "";
let idForm="";

 const inputtitulo=document.getElementById('inputtitulo');
const inputcontenido=document.getElementById('inputcontenido');
const inputimagenurl= document.getElementById('inputimagenurl');




//CREA POSTs

btnCrear.addEventListener('click' , () => {
    option = "new";
    btnSave.textContent="Nuevo";
    inputtitulo.value ="";
    inputcontenido.value ="";
    inputimagenurl.value ="";
myModal.show()
});

form.addEventListener('submit', (event)=> {
    event.preventDefault();
    if(option==="new"){
        const newPost={
            title: inputtitulo.value,
            content: inputcontenido.value,
            imageUrl: inputimagenurl.value
        };
        fetch('http://localhost:3000/api/foro', {
            method: "POST",
            headers:{
                "content-Type": "application/json",
            },
            body: JSON.stringify(newPost)
        }).then(res =>{
            if(res.ok){
                Swal.fire({
                    
                  title:  'Post Creado con exito',
                  timer: 2000,
                  
                
                  }  )
                myModal.hide();
                location.reload();
            }
        } )
    }
    if(option==="Editar"){
        const newPost={
            title: inputtitulo.value,
            content: inputcontenido.value,
            imageUrl: inputimagenurl.value
        };
        fetch(`http://localhost:3000/api/foro/${idForm}`,{ 
            method: "PUT",
            headers:{
                "content-Type": "application/json",
            },
            body: JSON.stringify(newPost)
        }).then(res => {
            if(res.ok){
                Swal.fire({
                    
                    title:  'Post editado satifactorimente',
                    timer: 2000,
                    
                  
                    }  )
            
                myModal.hide();
                location.reload();
            }
        })
    }
})



//ELIMINA POSTS
document.addEventListener('click', (event) => {
    if(event.target.matches('#btn-elim')){
      const article= event.target.closest('.col-4')
      const idArticle=article.dataset.id


      Swal.fire({
        title: '¿Quiere eliminar el post?',
        text: "Esto no puede ser revertido",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar'
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:3000/api/foro/${idArticle}`,{
                method:'DELETE'
              }).then(res=> {
                if (res.ok){
                    article.remove()
                }
              }).catch(err=>{
                console.error(err)
              })
          Swal.fire(
            'Post eliminado',
            
          )
        }
      })
      
     
    }
} )

document.addEventListener('click', (event) => {
    if(event.target.matches('#btn-edit')){
      const article= event.target.closest('.col-4');
    
      const idArticle= article.dataset.id;
      const imagenUrl= article.children[0].children[2].src;
      const titulo= article.children[0].children[0].textContent;
      const contenido= article.children[0].children[1].textContent;
      idForm=idArticle;
      inputtitulo.value= titulo;
      inputcontenido.value=contenido;
      inputimagenurl.value=imagenUrl;
      option = "Editar";
      btnSave.textContent="Editar";
      myModal.show()
     
    }
} )

    
   

