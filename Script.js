function showFeatures(productType) {
    const infoPanel = document.getElementById('info-panel');
    const infoTitle = document.getElementById('info-title');
    const infoText = document.getElementById('info-text');

    switch(productType) {
        case 'dish':
            infoTitle.innerText = "Dish washing Liquid Advantages";
            infoText.innerText = "Formulated with ultra-grease stripping agents, eco-friendly ingredients, and lemon extract for a fresh scent.";
            break;
        case 'laundry':
            infoTitle.innerText = "Laundry Detergent Advantages";
            infoText.innerText = "Contains color-safe brighteners and active enzymes that target tough organic stains without damaging fabric structures.";
            break;
        case 'floor':
            infoTitle.innerText = "Floor Cleaner Advantages";
            infoText.innerText = "Quick-drying, no-rinse formula designed to leave a streak-free shine and a lingering pine freshness across all hard surfaces.";
            break;
        default:
            infoTitle.innerText = "Product Details";
            infoText.innerText = "";
    }

    infoPanel.classList.remove('hidden');
}

function handleAIChat() {
    const chatInput = document.getElementById('chat-input');
    const message = chatInput.value.trim();
    if (!message) return;

    appendChat('user', message);
    const reply = getAIResponse(message);
    appendChat('bot', reply);
    chatInput.value = '';
}

function appendChat(sender, text) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.className = 'chat-message ' + (sender === 'user' ? 'user-message' : 'bot-message');
    messageElement.innerText = text;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getAIResponse(message) {
    const normalized = message.toLowerCase();
    const greetingPatterns = ['hello', 'hi', 'hey', 'welcome'];
    const soapPatterns = ['soap', 'service', 'manufacturing', 'use', 'usage', 'laundry', 'dishes', 'floor', 'cleaner'];

    for (const greeting of greetingPatterns) {
        if (normalized.includes(greeting)) {
            return 'Hello 😊 Welcome! I can help you with soap services, manufacturing, and how to use soap.';
        }
    }

    for (const soapWord of soapPatterns) {
        if (normalized.includes(soapWord)) {
            if (normalized.includes('use') || normalized.includes('usage') || normalized.includes('apply')) {
                return 'Our soap is suitable for dishes, laundry, and floors. Use it with clean water for best results.';
            }
            if (normalized.includes('manufacture') || normalized.includes('make') || normalized.includes('how to')) {
                return 'Our soaps are made with clean ingredients and a quality process. We can prepare custom soap orders for you.';
            }
            return 'Our soap services include dish soap, laundry detergent, and floor cleaner. Ask more and I will answer quickly.';
        }
    }

    return 'Please contact me directly at 0748654693 for any other questions or special service requests.';
}

function openChatPanel() {
    const chatPanel = document.getElementById('ai-chat-panel');
    chatPanel.classList.remove('hidden');
}

function closeChatPanel() {
    const chatPanel = document.getElementById('ai-chat-panel');
    chatPanel.classList.add('hidden');
}

function showOrderForm() {
    const orderSection = document.getElementById('order-form-section');
    orderSection.classList.remove('hidden');
    orderSection.scrollIntoView({ behavior: 'smooth' });
}

function submitOrder() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!username || !password || !email) {
        alert('Please fill out the entire form before proceeding.');
        return;
    }

    alert('Thank you! We have received your details. We will contact you shortly.');
    document.getElementById('order-form').reset();
}
