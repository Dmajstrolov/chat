

const socket = io();

function _id(id){
    return document.getElementById(id);
}

_id("message").addEventListener("keyup",typeMessage);

function typeMessage(){

    if(_id("name").value){

        // send name to server
        socket.emit("type",_id("name").value);

    }

}


/* socket.emit("data","Hello from client");


socket.on("serverData", serverData=> {
    console.log(serverData);
}); */

function sendChatMessage(){
    //Kod för att skicka ett meddelande från client

    const name = _id("name").value;
    const message = _id("message").value;
    const chatObj = {name,message};

    if(message.trim()){

        //Skicka till servern...
        socket.emit("chat",JSON.stringify(chatObj));

    }


}


//Lyssna efter chat events

socket.on("chat",data=>{

    _id("status").innerHTML = "";
    _id("message").value = "";

    msg = JSON.parse(data).message;
    name = JSON.parse(data).name;

    _id("chat").innerHTML += `

        <p><b>${name}</b>:<i>${msg}</i></p>
    
    `;
});

socket.on("type", name =>{

    _id("status").innerHTML = name;

});