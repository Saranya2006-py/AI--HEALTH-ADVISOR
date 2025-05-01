document.addEventListener("DOMContentLoaded", function() {
    const symptomsInput = document.getElementById("symptoms");

    // Example list of symptoms - this can be expanded dynamically from the backend if necessary
    const symptomsList = [
        "fever", "headache", "cough", "nausea", "fatigue", "chest pain", "shortness of breath",
        "sore throat", "runny nose", "rash", "itching", "swelling", "vomiting", "diarrhea", "dizziness",
        "abdominal pain", "weight loss", "joint pain", "stiffness", "swelling", "muscle weakness"
    ];

    // Function to filter symptoms from the list based on input
    symptomsInput.addEventListener("input", function() {
        const query = symptomsInput.value.toLowerCase();
        if (query.length === 0) {
            clearSuggestions();  // Clear suggestions if input is empty
        } else {
            const filteredSymptoms = symptomsList.filter(symptom => symptom.toLowerCase().includes(query));
            showSuggestions(filteredSymptoms);
        }
    });

    // Function to display the filtered symptoms as suggestions
    function showSuggestions(suggestions) {
        // Create a new <ul> element to display the suggestions
        const suggestionsList = document.createElement("ul");
        suggestionsList.setAttribute("id", "suggestions-list");

        suggestions.forEach(function(suggestion) {
            const listItem = document.createElement("li");
            listItem.textContent = suggestion;

            // Add click event to the suggestion item
            listItem.addEventListener("click", function() {
                symptomsInput.value = suggestion;  // Set the input field to the selected symptom
                clearSuggestions();  // Clear suggestions after selection
            });

            suggestionsList.appendChild(listItem);
        });

        // Clear existing suggestions before appending new ones
        clearSuggestions();

        // Only append suggestions if there are any
        if (suggestions.length > 0) {
            symptomsInput.parentElement.appendChild(suggestionsList);
        }
    }

    // Function to remove the suggestions list from the DOM
    function clearSuggestions() {
        const existingSuggestions = document.getElementById("suggestions-list");
        if (existingSuggestions) {
            existingSuggestions.remove();
        }
    }
});
