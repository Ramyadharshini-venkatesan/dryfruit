function handlechange() {
    event.preventDefault(); 
    
    const name = document.querySelector('input[type="text"]').value.trim();
    const email = document.querySelector('input[type="email"]').value.trim();
    const message = document.querySelector('textarea').value.trim();


    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    
    alert(`Thank you, ${name}! Your message has been sent.`);

    
    document.querySelector('.contact-form').reset();
}
