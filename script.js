function generatePassword() {
    const length = document.getElementById("length").value;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let password = "";
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById("generatedPassword").value = password;
}

function copyToClipboard() {
    const passwordField = document.getElementById("generatedPassword");
    passwordField.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}

function savePassword() {
    const label = document.getElementById("label").value;
    const password = document.getElementById("generatedPassword").value;
    if (label && password) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `${label}: ${password} <button onclick="deletePassword(this)">Delete</button>`;
        document.getElementById("passwordList").appendChild(listItem);
        document.getElementById("label").value = "";
    } else {
        alert("Enter a label and generate a password first!");
    }
}

function deletePassword(button) {
    button.parentElement.remove();
}
