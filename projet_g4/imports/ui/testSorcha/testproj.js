let stat="";
              function setpink(){
                stat="pink";
                document.getElementById("pink");
                pink.style.backgroundColor="pink";
                blue.style.backgroundColor="";
              }
              function setblue(){
                stat="blue";
                document.getElementById("blue");
                blue.style.backgroundColor="aqua";
                pink.style.backgroundColor="";
              }
          let message=document.getElementById("message");
        for (i=8 ; i<23 ; i++){
          for (j=0 ; j<7 ; j++){
            let cell=document.createElement("TD");
            message.appendChild(cell);
            cell.innerHTML+=(`${i}:00`);
            //fonction incrémenter cellule dans BDD quand cliqué, pour l'instant ça change simplement la couleur.
            let count=0;
            function inc(){
              count++
            if (stat==="pink"){
            this.style.backgroundColor = "pink";
            if (count%2===0){
              this.style.backgroundColor="";
            }
            }
            if (stat==="blue"){
              this.style.backgroundColor="aqua";
              if (count%2!==0){
              this.style.backgroundColor="";
            }
            }
            
          }
            cell.addEventListener("click",inc)
          }
          let tr=document.createElement("TR");
          message.appendChild(tr);
        }
        document.getElementById("pink")
        pink.addEventListener("click",setpink);
        
        document.getElementById("blue");
        blue.addEventListener("click",setblue)