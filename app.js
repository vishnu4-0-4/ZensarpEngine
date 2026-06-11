

const API_KEY ="";

//`https://app.zenserp.com/api/v2/search?q=${searchTerm}&apikey=${API_KEY}`;

const base ="https://app.zenserp.com/api/v2/search?q=";
let input=document.querySelector(".inpt");
let button=document.querySelector("#btn");
let grid=document.querySelector(".Result");

input.value="";

let update= async ()=>{
    let url=`${base}${input.value}&apikey=${API_KEY}`;
    try{
        let response=await fetch(url);
        if(response.ok){
            let data= await response.json();
            gridupdate(data);
        }

    }catch(error)
    {

    }
}
button.addEventListener("click",update);
function gridupdate(data){
    grid.innerHTML = "";
    let list=data.organic;
    
    for(let item of list){
        let div=document.createElement("div");
       let a=document.createElement("a");
       let tit=document.createElement('p');

        div.classList.add("card");

        a.href=item["url"];
        a.innerText = "Visit Website";
        a.target = "_blank"; 
        tit.innerText=item["title"];

         div.append(tit);
         div.append(a);
         grid.append(div);
    }
    console.log(Headers);
    
   
}