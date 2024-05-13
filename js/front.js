document.addEventListener('DOMContentLoaded', function() {
    const panicButton = document.getElementById('panicButton');
    const popupButtons = document.getElementById('popupButtons');

    // Event listener for clicking the panic button
    panicButton.addEventListener('click', () => {
        // Show the popup buttons
        popupButtons.style.display = 'block';
    });

    // Event listener for clicking on buttons inside the popup
    popupButtons.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') { // Check if the clicked element is a button
            const buttonText = e.target.textContent;
            if (buttonText === 'E-Connect') {
                // Call a function to perform E-Connect action
                performEConnectAction();
            } else {
                // Handle other button clicks as needed
            }
        }
    });

    // Other code for saving and loading contacts...
});

// Function to perform action for E-Connect button
function performEConnectAction() {
    // Retrieve saved contact numbers from local storage
    const savedContact1 = localStorage.getItem('contact1');
    const savedContact2 = localStorage.getItem('contact2');
    const savedContact3 = localStorage.getItem('contact3');

    // Construct the emergency message
    const emergencyMessage = "Emergency! Please help!";

    // Send emergency messages to each saved contact
    sendEmergencyMessage(savedContact1, emergencyMessage);
    sendEmergencyMessage(savedContact2, emergencyMessage);
    sendEmergencyMessage(savedContact3, emergencyMessage);
}

// Function to send emergency message to a contact
function sendEmergencyMessage(contactNumber, message) {
    // Construct the URI for sending SMS
    const smsURI = `sms:${contactNumber}?body=${encodeURIComponent(message)}`;

    // Open the default messaging app with the prepared SMS
    window.location.href = smsURI;
}

// You might have this code to handle receiving emergency alerts
// This is just a placeholder, actual implementation may vary
function handleEmergencyAlert(message) {
    alert(`Emergency Alert: ${message}`);
    // You can add more actions here, like contacting emergency services
}

// Example: Listen for incoming emergency alerts from front.html
window.addEventListener('message', function(event) {
    if (event.origin !== window.location.origin) return; // Check origin for security
    const data = event.data;
    if (data.type === 'emergency') {
        handleEmergencyAlert(data.message);
    }
});
