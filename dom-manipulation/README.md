##  Dynamic Quote Generator

A beginner-friendly web application that allows users to view, add, filter, and manage motivational and design quotes. Built with vanilla JavaScript, and HTML, this project demonstrates advanced DOM manipulation, web storage, and JSON handling.

---

### 🚀 Features

- View quotes by category
- Add new quotes and categories dynamically
- Filter quotes using a dropdown menu
- Persist quotes and filter preferences using **localStorage**
- Export and import quotes via **JSON files**
- Simulate server syncing and resolve data conflicts

---

### 🛠️ Technologies Used

- HTML5
- JavaScript (ES6+)
- Web Storage API (localStorage, sessionStorage)
- JSONPlaceholder (for mock server interaction)
---

###  Usage

- **Add a Quote**: Enter text and category, then click "Add Quote".
- **Filter Quotes**: Use the dropdown to view quotes by category.
- **Export Quotes**: Click "Export Quotes" to download a JSON file.
- **Import Quotes**: Upload a `.json` file to load new quotes.
- **Sync with Server**: Quotes are periodically synced with a mock server.

---

###  Simulated Server Sync

Uses [JSONPlaceholder](https://jsonplaceholder.typicode.com/) to simulate fetching and merging quotes. Server data takes precedence during conflicts.

---

###  Testing

- Verify quote persistence across sessions
- Test import/export with valid and invalid JSON
- Confirm filtering and category updates work in real-time
- Simulate sync and conflict resolution

---

###  Future Enhancements

- Add search functionality
- Implement pagination
- Integrate real backend (e.g., Firebase or Express)
- Add user authentication and favorites

---

### Credits

Built with ❤️ by Ben, powered by curiosity and community impact.
