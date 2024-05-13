document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const contactsList = document.getElementById('contactsList');

    // Load saved contacts when the page loads
    loadContacts();

    // Event listener for form submission
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get values from form inputs
        const contact1 = '+91' + document.getElementById('contact1').value; // Adding Indian country code
        const contact2 = '+91' + document.getElementById('contact2').value; // Adding Indian country code
        const contact3 = '+91' + document.getElementById('contact3').value; // Adding Indian country code

        // Save contacts to local storage
        saveContacts(contact1, contact2, contact3);

        // Display saved contacts
        loadContacts();

        // Clear form inputs
        contactForm.reset();
    });

    // Function to save contacts to local storage
    function saveContacts(contact1, contact2, contact3) {
        localStorage.setItem('contact1', contact1);
        localStorage.setItem('contact2', contact2);
        localStorage.setItem('contact3', contact3);
    }

    // Function to load saved contacts from local storage
    function loadContacts() {
        const savedContact1 = localStorage.getItem('contact1');
        const savedContact2 = localStorage.getItem('contact2');
        const savedContact3 = localStorage.getItem('contact3');

        // Display saved contacts
        contactsList.innerHTML = `
            <li>Contact 1: ${savedContact1}</li>
            <li>Contact 2: ${savedContact2}</li>
            <li>Contact 3: ${savedContact3}</li>
        `;
    }
});
