// Initial quotes array with categories
// Load quotes from localStorage or use default
let quotes = JSON.parse(localStorage.getItem("quotes")) || [
    { text: "The journey of a thousand miles begins with one step", category: "Motivation" },
    { text: "Simplicity is the ultimate sophistication", category: "Design" }
];

// Saving quotes to local storage
function saveQuotes() {
    localStorage.setItem("quotes", JSON.stringify(quotes));
}
// DOM References
const categorySelect = document.getElementById("categorySelect");
const quoteDisplay = document.getElementById("quoteDisplay");


// Extracting unique categories and populate the dropdown.
function populateCategories() {
    // Get unique categories
    const categories = [...new Set(quotes.map(q => q.category))];

    // Clear existing options
    categorySelect.innerHTML = '<option value="">-- Select Category --</option>';

    // Add each category to dropdown
    categories.forEach(cat => {
        const option = document.createElement("option")
        option.value = cat;
        option.textContent = cat;
        categorySelect.appendChild(option);
    });
}

// Call this once on page load
populateCategories();


// Adding a function that selects and displays a random quote from the selected category.
function displayRandomQuote() {
    const selectedCategory = categorySelect.value;

    // Filter quotes by selected category
    const filteredQuotes = quotes.filter(q => q.category === selectedCategory);

    // Select a random quote
    const randomQuote = filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)];

    // Update the DOM & Display it
    quoteDisplay.textContent = randomQuote ? randomQuote.text : "No quotes available.";

    // Save last viewed quote in sessionStorage
    sessionStorage.setItem("lastQuote", randomQuote?.text || "");
}

// Optional: Load last quote on page load
window.addEventListener("load", () => {
    const lastQuote = sessionStorage.getItem("lastQuote");
    if (lastQuote) quoteDisplay.textContent = lastQuote;
});

// Adding New quote Dynamically
// This function would take user input and add a new quote to the array, then updadte the UI.
function addQuote() {
    const quoteText = document.getElementById("newQuoteText").value.trim();
    const quoteCategory = document.getElementById("newQuoteCategory").value.trim();

    // Basic validation
    if (!quoteText || !quoteCategory) {
        alert("Please enter both quote and category.");
        return;
    }
    
    // Add new quote to array
    quotes.push({ text: quoteText, category: quoteCategory });
    saveQuotes.push(); // Save to localStorage

    // Update dropdown and clear inputs
    populateCategories();
    // Clear input fields
    document.getElementById("newQuoteText").value = "";
    document.getElementById("newQuoteCategory").value = "";
}

// Add this once, after DOM references
 document.getElementById("newQuote").addEventListener("click", displayRandomQuote);

// Adding a button to download the quotes as a .json file
function exportToJson() {
    const dataStr = JSON.stringify(quotes, null, 2); //Pretty format
    const blob = new Blob([dataStr], { type: "application.json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "quotes.json";
    a.click();

    URL.revokeObjectURL(url); // Clean up
} 

// Adding a file input to upload a .json file
function importFromJsonFile(event) {
    const fileReader = new FileReader();

    fileReader.onload = function () {
        try {
            const importedQuotes = JSON.parse(fileReader.result);
            if (Array.isArray(importedQuotes)) {
                quotes = importedQuotes;
                saveQuotes(); //Save to localStorage
                populateCategories();
                alert("Quotes imported successfully!");
            } else {
                alert("Invalid JSON format.");
            }
        } catch (error) {
            alert("Error reading file: " + error.message);
        }
    };

    fileReader.readAsText(event.target.files[0]);
}