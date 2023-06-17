const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatBox = document.querySelector(".chatbox");
const chatToggler = document.querySelector(".chatbot-toggler")
const chatbotCloseBtn = document.querySelector(".close-btn")

let userMessage;
const API_KEY = "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";
const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message,className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat",className);
    let chatContent = className === "outgoing" ? ` <p></p>` : `       <span class="material-symbols-outlined"><i class="fa-solid fa-robot"></i></span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector('p').textContent = message;
    return chatLi;
}

const generateResponse = (incomingChatLi) => {
    const API_URL ="https://api.openai.com/v1/chat/completions";
    const messageElement = incomingChatLi.querySelector('p');

    const requestOptions = {
        method: "POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [ {"role": "user", "content": userMessage}]
        })
    }
    fetch(API_URL,requestOptions).then(res => res.json()).then(data => {
        messageElement.textContent = data.choices[0].message.content;
    }).catch((error) =>{
        messageElement.classList.add('error');
        messageElement.textContent = "Oops! Something went wrong. Please try again.";
    }).finally(() =>  chatBox.scrollTo(0, chatBox.scrollHeight));

}
const handleChat = () => {
    userMessage = chatInput.value.trim();
    // console.log(userMessage);
    if(!userMessage) return;
    chatInput.value = '';
    chatInput.style.height = `${inputInitHeight}px`;

    chatBox.appendChild(createChatLi(userMessage, "outgoing"));
    chatBox.scrollTo(0, chatBox.scrollHeight);
    setTimeout(() => {
        const incomingChatLi = createChatLi('Thinking...', "incoming");
        chatBox.appendChild(incomingChatLi);
        chatBox.scrollTo(0, chatBox.scrollHeight);
        generateResponse(incomingChatLi);
    }, 600);

}
chatInput.addEventListener("input",() =>{
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});
chatInput.addEventListener("keydown",(e) =>{
    if(e.key === "Enter" && !e.shiftkey && window.innerWidth > 800){
        e.preventDefault();
        handleChat();
    }
});
sendChatBtn.addEventListener('click', handleChat);
chatbotCloseBtn.addEventListener('click', () =>
document.querySelector('.main').classList.remove("show-chatbot")
);
chatToggler.addEventListener('click', () =>
document.querySelector('.main').classList.toggle("show-chatbot")
);