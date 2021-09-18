let todos=[];
let show=()=>
{
      let localtodolist=localStorage.getItem('todos');
      if(localtodolist==null)
      {
        let div=document.createElement("div");
        let h2=document.createElement("h2");
        div.appendChild(h2);
        let body=document.body;
        body.appendChild(div);
        h2.className=h2.className+"h2";
        let titlenode=document.createTextNode("No Content Available");
        h2.appendChild(titlenode);  
      }
 else
 {
   todos=JSON.parse(localtodolist);
for(let todo1 of todos.reverse())
{
   let div=document.createElement("div");
   let h2=document.createElement("h2");
   div.appendChild(h2);
   let p=document.createElement("p");
   div.appendChild(p);
   let body=document.body;
   body.appendChild(div);
   h2.className=h2.className+"h2";
   p.className=p.className+"p"; 
let titlenode=document.createTextNode(todo1.Title);
let descriptionnode=document.createTextNode(todo1.Description);
h2.appendChild(titlenode);
p.appendChild(descriptionnode);
}
}
}

//remove Todo list one by one
const tododelete=()=>
{
   let localtodolist=localStorage.getItem('todos');
   if(localtodolist==null)
   {
      alert("Notes are not Available");
   }
   else{
      localStorage.clear();
      show();
   }
    
}

// check here any data are store or not in localstorage
// if data are stored already then retreave and store in todos array  
 const todomake=()=>
 {    
   
     if(document.getElementById("titlefield").value=="" || document.getElementById("description").value=="" )
     {
        alert("Please enter Some text then Add TODO");
     }
   else
     {
        let title=document.getElementById("titlefield").value;
        let Description=document.getElementById("description").value;
        let localtodolist=localStorage.getItem('todos');
        if(localtodolist!=null)
        {
           //it changes the string to object
           todos=JSON.parse(localtodolist);
        }
        let todoobject={
            Title: title,
            Description: Description,
            Id: Math.floor(Math.random()*1000)
        }
        todos.push(todoobject);
        //it change the object to String
        localStorage.setItem("todos",JSON.stringify(todos));
    let div=document.createElement("div");
    let h2=document.createElement("h2");
    div.appendChild(h2);
    let p=document.createElement("p");
    div.appendChild(p);
    let body=document.body;
    body.appendChild(div);
    h2.className=h2.className+"h2";
    p.className=p.className+"p"; 
 let titlenode=document.createTextNode(todoobject.Title);
 let descriptionnode=document.createTextNode(todoobject.Description);
h2.appendChild(titlenode);
p.appendChild(descriptionnode);
     }
}
show();
