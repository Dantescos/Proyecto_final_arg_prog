const contenedor = document.getElementById("container-row");
const btnCrear = document.getElementById("btn-new");
const myModal = new bootstrap.Modal(document.getElementById("myModal"));
const btnSave = document.getElementById("btn-save");
let html ="";
let option= "";

const imputtitulo=document.getElementById('imputtitulo');
const imputcontenido=document.getElementById('imputcontenido');
const imputimagenurl= document.getElementById('imputimagenurl');

btncrear.addEventListener('click' , () => {
    option = "new";
    btnsave.textContent="new";
    imputtitulo.value ="";
    imputcontenido.value ="";
    imputimagenurl.value ="";
mymodal.show();
});



fetch('http://localhost:3000/api/foro')
.then(res => res.json())
.then(data => {
  data.forEach(post => {
    html += `
          <article class="col-4 d-flex justify-content-center mb-3" data-id="${post.id}">
              <div class="card" style="width: 18rem;">
                  <img src="${post.imageUrl}"
                      class="card-img-top" alt="nuevo titulo">
                  <div class="card-body">
                      <h5 class="card-title">${post.title}</h5>
                      <p class="card-text">${post.content}</p>
                      <div>
                          <button class="btn btn-secondary" id="btn-edit">Edit</button>
                          <button type="" class="btn btn-danger" id="btn-delete">Delete</button>
                      </div>
                  </div>
              </div>
          </article>
          `;

    contenedor.innerHTML = html;
  });
});

