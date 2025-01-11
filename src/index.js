
const request= obj=>{
    return new Promise((resolve,reject)=>{
    const xhr= new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();


    xhr.addEventListener('load', ()=>{
        if(xhr.status>=200 && xhr.status<300){
            resolve(xhr.responseText)}
        else{
            reject(({
                code:xhr.status,
                msg: xhr.statusText
            }));

        }     
        });     
    }
)};

document.addEventListener('click', (e)=>{
    e.preventDefault();
    const el=e.target;
    if(el.localName==='a'){
        loadPage(el);
    }
    
})
async function loadPage(link){
    const href=link.getAttribute("href");
    try{
    const response= await request({
        method: 'GET',
        url:href,   
    })
    loadResult(response);
}
catch(e){
    console.log('erro');
}
}

function loadResult(response){
    const resultado=document.querySelector('.resultado');
    resultado.innerHTML=response;
}
