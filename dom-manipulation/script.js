// Initial quotes array with categories
let quotes = [
    { text: "The journey of a thousand miles begins with one step", category: "Motivation" },
    { text: "Simplicity is the ultimate sophistication", category: "Design" }
];


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
};

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

    // Update dropdown and clear inputs
    populateCategories();
    // Clear input fields
    document.getElementById("newQuoteText").value = "";
    document.getElementById("newQuoteCategory").value = "";
}

// Add this once, after DOM references
 document.getElementById("newQuote").addEventListener("click", displayRandomQuote);