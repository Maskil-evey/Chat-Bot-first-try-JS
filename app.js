let chatBody = document.querySelector('.chat-body');
let txtInput = document.getElementById('txtinput');
let send= document.getElementById('send');
let form = document.getElementById('form');
let input2 = document.getElementById('txtinput-2');
let send2 = document.getElementById('send2');
let notCurrentUser = document.getElementById('notUser');



//function to get User's Name; and render out chatbot Welcome Message
send2.addEventListener('click',function(){
    if(input2.value){
        localStorage.setItem('user',input2.value);
    const userName = localStorage.getItem('user');
    let welcomeMessage = "Hi There!" + ' '+ userName + ". I'm Karen";
    let seondWecomeMessage = 'Im Here to Guide you in your new journey with us'
    let thirdWelcmeMessage = ' But Personally...I dont give a "FUCK!!!"😒😒'
    renderUserMessage(welcomeMessage, 'chatbot');
    setTimeout(() => {
        renderUserMessage(seondWecomeMessage, 'chatbot');
        renderUserMessage(botHead, "chat");
    }, 2400);
    setTimeout(() => {
        renderUserMessage(thirdWelcmeMessage, 'chatbot');
        renderUserMessage(botHead, "chat");
        send.style.display = 'flex';
    }, 5800);
    let botHead = '🤖';
    renderUserMessage(botHead, "chat");
    form.style.display = 'none';
    }
    else{
        let italic = document.createElement('em');
        let txtNode = document.createTextNode('Pls Enter Name!!!');
        italic.append(txtNode);
        italic.classList.add('nate');
        chatBody.append(italic);
        setTimeout(() => {
            chatBody.removeChild(italic);
        }, 600);
    };
})




// get and render out user input
send.addEventListener('click', renderMessages);
// function to render users input when user hits enter 
txtInput.onkeypress = function clickEnter(event){
    let x = event.which;
    if(x===13){
        renderMessages();
    };
}

function renderMessages(){
    let userInput = txtInput.value;
    renderUserMessage(userInput, "user");
    txtInput.value = '';
    let botHead = '🤖';
    //delay chatbot message by 600 milliseconds
    setTimeout(() => {
        renderChatbotResponse(userInput,"chatbot");
        renderUserMessage(botHead, "chat");
        scrollPosition();
    }, 600);
    scrollPosition();
}







// render message element and call it in the above function to render out user message
function renderUserMessage(userInput,type){
    let className = 'user-message';
    if(type !== "user"){
        className = 'chatbot'
    };
    if(type ==='chat'){
        className = 'chat'
    };
    let messageEle = document.createElement('div');
    let txtNode = document.createTextNode(userInput);
    messageEle.classList.add(className);
    messageEle.append(txtNode);
    chatBody.append(messageEle); 
}





// Create Chatbot response object
let responseObj = {
    check: localStorage.getItem('user'),
    hi:'Hello',
    sup: 'Am i your Mate' + ' ' + (localStorage.getItem('user')) + '. How old are u sef?',
    help: 'I look like Bank or Your Bf',
    hey:'Hey! How are you',
    name:'Na me born you',
    ok: 'What? You Think youre better than me!!!',
    today: new Date().toDateString(),
    time: new Date().toLocaleTimeString()
};




// get and render Chatbot response
function renderChatbotResponse(userInput){
    let res = getChatbotResponse(userInput);
    renderUserMessage(res);
};


function getChatbotResponse(txt){
    responseObj.sup =  'Am i your Mate' + ' ' + (localStorage.getItem('user')) + '. How old are u sef?';
    return responseObj[txt] === undefined?'I cant Answer that! Pls go away':responseObj[txt];
};




// Function to render out Welome back message
let b = document.createElement('div');
let g = document.createElement('div');
 function show(){
    let txtnode = document.createTextNode('Welcome Back' + ' ' + (localStorage.getItem('user')) + '. Y are U back?')
    g.append(txtnode);
    g.classList.add('chatbot');
    g.setAttribute('id', 'main');
    chatBody.append(g)
 } 
 function showBothead(){
    let txtnode = document.createTextNode('🤖')
    b.append(txtnode);
    b.classList.add('chat');
    b.setAttribute('id', 'main');
    chatBody.append(b)
 }




// function to render !user
function renderU(){
    let u = document.createTextNode('Not '+ localStorage.getItem('user') + '?');
    notCurrentUser.classList.add('mine')
    notCurrentUser.append(u);
}

//function to clear out chatbody if not same user
function notCurrentUserClicked(){

    chatBody.removeChild(g);
    chatBody.removeChild(b);
    notCurrentUser.style.display = 'none';
    form.style.display = 'block'
    localStorage.clear();
}
send.style.display = 'none';






// funtion to always keep screen fixed on current input

function scrollPosition(){
    if(chatBody.scrollHeight > 0){
        chatBody.scrollTop = chatBody.scrollHeight;
    }
};

//Chat box animation
function shrink(){
    let x = document.getElementById('chat-header');

    if(x.attributes.getNamedItem('data-toggle').value == "1"){
        x.attributes.getNamedItem('data-toggle').value = "0";
        openChatbot();
    }
 else if(x.attributes.getNamedItem('data-toggle').value == "0"){
        x.attributes.getNamedItem('data-toggle').value = "1";
        closeChatbot();
    };
};

// function to render our welcomeBack message when user clicks on lets chat
//and also a function for chatbotanimation 

// notCurrentUser.style.display = 'none';
function openChatbot(){
    document.getElementById('container').style.width = '350px';
    document.getElementById('container').style.height = '420px';
    document.getElementById('chat-body').style.display = 'flex';
    document.getElementById('input').style.display = 'flex';
    if(localStorage.getItem('user')){
            ifUserAlreadySubmittedName();
    }
    // document.getElementById('chat-body').style.transitionDelay = '2s';
};

function closeChatbot(){
    document.getElementById('container').style.width = '150px';
    document.getElementById('container').style.height = '50px';
    document.getElementById('chat-body').style.display = 'none';
    document.getElementById('input').style.display = 'none';
};

function ifUserAlreadySubmittedName(){
    form.style.display = 'none';
          setTimeout(() => {
            show();
            showBothead();        
          send.style.display = 'flex';
          }, 1000);
          setTimeout(() => {
            renderU();    
        }, 1500);
};
