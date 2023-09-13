submit_todo=()=>{
    const titt=document.getElementById("tittleentry").value;
    const desc=document.getElementById("descentry").value;
    var iscomplete=false;
    if(titt!=''){
        
        if(localStorage.getItem("todoitem")==null){
            var todoarr=[]
            todoarr.push([titt,desc,iscomplete])
            localStorage.setItem('todoitem',JSON.stringify(todoarr))
            console.log("new created, Done")
            
        }else{
            todoarr=JSON.parse(localStorage.getItem("todoitem"))
            todoarr.push([titt,desc,iscomplete])
            localStorage.setItem('todoitem',JSON.stringify(todoarr))
            console.log("Done")
        }
        update()
    }
    
}
update=()=>{
    todoarr=JSON.parse(localStorage.getItem("todoitem"))
    let tablebody=document.getElementById("tabe");
    let tablecomp=document.getElementById("tabe2");
    let str=""
    let completestr=""
    todoarr.forEach((element,index) => {
        console.log(element[0],element[2])
        if(element[2]==false){
            
            str+=`<tr>
            <th scope="row">${index+1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td> <button type="button" class="btn btn-success"  onclick="markcompleted(${index})">Mark Complete</button>
            </td>
            </tr>`
        }else{
            completestr+=`<tr>
            <th scope="row">${index+1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td> <button type="button" class="btn btn-danger"  onclick="deleteitem(${index})">Delete</button>
            </td>
            </tr>`
        }
    });
    tablebody.innerHTML=str;
    tablecomp.innerHTML=completestr;
    
}

deleteitem=(index)=>{
    todoarr=JSON.parse(localStorage.getItem("todoitem"))
    todoarr.splice(index,1)
    localStorage.setItem('todoitem',JSON.stringify(todoarr))
    update()
    console.log("Deleted") 
}
markcompleted=(index)=>{
    todoarr=JSON.parse(localStorage.getItem("todoitem"))
    todoarr[index][2]=true;
    localStorage.setItem('todoitem',JSON.stringify(todoarr))
    update()
    console.log("Completed") 
}
clearlist=()=>{
    localStorage.clear()
    location.reload();
    update()
}

window.onload(update())