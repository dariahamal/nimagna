// Custom error handling function
function error(message) {
    throw new Error(message);
}

// Sample schema object (assuming it has a 'type' property)
let schema = { type: 'CSV' };

// Check if 'reader' is not defined and throw an error
let reader = null;
if (!reader) {
    error('Unknown data format type: ' + schema.type);
}

// This code will throw an error with the message "Unknown data format type: CSV"
