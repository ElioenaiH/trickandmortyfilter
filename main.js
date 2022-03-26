

   function cargarTabla() {
      let tbody = document.querySelector("#bodyData")

      let status = document.getElementById('vive').value;
      console.log(status);
      if(status == ''){
          console.log("vacio");
      }else{

          fetch(`https://rickandmortyapi.com/api/character?status=${status}`)
          .then(res => res.json())
          .then(data => {
              
              let rowData = data.results.map(item => {
                  
        return `<tr>
                  <td>${item.name}</td>
                  <td>${item.status}</td>
                  <td>${item.gender}</td>
                  <td><img src="${item.image}"></td>
                  </tr>`
                }).join('')
                
                tbody.innerHTML = rowData
            })
            .catch(fun => {
                alert("No se encontraron datos.");
                
            });
        }
    }

    
    function pasarDato() {
        let tbody = document.querySelector("#bodyData")
     let nombre = document.getElementById('nombre').value;
        console.log(nombre);
        if(nombre == ''){
            console.log("vacio");
        }else{
  
            fetch(`https://rickandmortyapi.com/api/character?gender=${nombre}`)
            .then(res => res.json())
            .then(data => {
                
                let rowData = data.results.map(item => {
                    
          return `<tr>
                    <td>${item.name}</td>
                    <td>${item.status}</td>
                    <td>${item.gender}</td>
                    <td><img src="${item.image}"></td>
                    </tr>`
                  }).join('')
                  
                  tbody.innerHTML = rowData
              })
              .catch(fun => {
                  alert("No se encontraron datos.");
                  
              });
          }
      }
  