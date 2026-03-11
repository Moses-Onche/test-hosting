const button = document.querySelector('button');

// create a container for messages so we can reuse it later
let messageContainer = null;

button.addEventListener("click", () => {
    // if we've already shown a message, don't add another
    if (!messageContainer) {
        messageContainer = document.createElement('div');
        messageContainer.id = 'welcome-message';
        messageContainer.innerText = 'Welcome!';
        // basic styles, we'll add animation via CSS class
        messageContainer.style.opacity = '0';
        messageContainer.style.transition = 'opacity 0.6s ease-in-out';

        // insert the container after the button
        button.insertAdjacentElement('afterend', messageContainer);

        // trigger reflow/repaint and then animate to full opacity
        requestAnimationFrame(() => {
            messageContainer.style.opacity = '1';
        });
    }
});