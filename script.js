    var addInput = document.querySelector('.addInput');
         var addBtn = document.querySelector('.addBtn');
         var whiteList = document.querySelector('.whiteList');
         var blackList = document.querySelector('.blackList')

         addBtn.addEventListener('click', function(){
            if(addInput.value !=""){
            var contEl = document.createElement('li');
            contEl.classList.add('contEl');
            whiteList.appendChild(contEl);
            var box = document.createElement('input');
            box.type="checkbox"
            box.className="box1"
            
             
         box.addEventListener('click', function(){

            if(box.checked){
            whiteList.removeChild(contEl);
            blackList.appendChild(contEl);
           edit.style.display="none"
           delet.style.display="none"
            elInput.className='sel'
            }
            else{
                blackList.removeChild(contEl);
            whiteList.appendChild(contEl);
            edit.style.display="block"
           delet.style.display="block"
            elInput.className="newInput"
            }
         })
            
            contEl.appendChild(box);
            var elInput = document.createElement('input');
            elInput.type="text"
            elInput.className="newInput"
            elInput.value=addInput.value;
            elInput.readOnly=true;
            contEl.appendChild(elInput);
            var edit = document.createElement('button');
            edit.innerText='Edit';
            edit.classList.add('edit');
            contEl.appendChild(edit);
            var delet = document.createElement('button');
            delet.innerText ='Delete';
            delet.classList.add('delet');
            contEl.appendChild(delet);

            delet.addEventListener('click', function(){
            contEl.style.opacity="0";
            setTimeout(function(){
                contEl.style.display="none"
            }, 1000)
            
        })

            edit.addEventListener('click', function(){
                if(elInput.readOnly===true){
                    elInput.readOnly=false;
                    edit.innerText="Save"
                    elInput.style.cursor="auto"
                }
                else{
                    elInput.readOnly=true;
                    edit.innerText="Edit"
                }
                
            })

        }
         

         })
        
