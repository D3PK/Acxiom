// JavaScript to toggle sections
function showSection(sectionId) {
    var sections = document.getElementsByClassName('section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].classList.remove('active'); // Hide all sections
    }
    document.getElementById(sectionId).classList.add('active'); // Show the clicked section
}

// Login validation function
function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var role = document.querySelector('input[name="role"]:checked');
    
    if (username === "" || password === "") {
        alert("Username and Password cannot be empty!");
        return false;
    }
    if (!role) {
        alert("Please select a role (Admin/User)");
        return false;
    }
    
    // Check the role and handle navigation
    if (role.value === "admin") {
        // Admin has access to all sections
        alert("Welcome Admin!");
        showSection('dashboard');
    } else if (role.value === "user") {
        // User cannot access maintenance
        alert("Welcome User!");
        showSection('dashboard');
        document.querySelector('button[onclick="showSection(\'maintenance\')"]').disabled = true;
    }
    
    return false; // Prevent actual form submission
}

// Book form validation function (Maintenance Section)
function validateBookForm() {
    var bookName = document.getElementById("bookName").value;
    var author = document.getElementById("author").value;
    
    if (bookName === "" || author === "") {
        alert("Please fill out all fields.");
        return false;
    }
    alert("Book added successfully!");
    return true; // Allow form submission
}

// Transaction form validation function
function validateTransactionForm() {
    var bookId = document.getElementById("bookId").value;
    var transactionType = document.querySelector('input[name="transaction"]:checked');

    if (bookId === "") {
        alert("Please enter a Book ID.");
        return false;
    }
    if (!transactionType) {
        alert("Please select a transaction type (Borrow/Return).");
        return false;
    }
    alert("Transaction successful!");
    return true; // Allow form submission
}

// Access control: Only admins can view the Maintenance section
function restrictAccess() {
    var role = document.querySelector('input[name="role"]:checked');
    if (role.value === "user") {
        showSection('error');
        return false;
    }
    return true;
}
