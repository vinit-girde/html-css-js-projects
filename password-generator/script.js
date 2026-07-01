const output = document.getElementById("passwordOutput");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const clearBtn = document.getElementById("clearBtn");
const status = document.getElementById("status");

function generatePassword(length = 14) {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+";
  let password = "";

  for (let i = 0; i < length; i += 1) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
}

function showStatus(message) {
  status.textContent = message;
  setTimeout(() => {
    status.textContent = "";
  }, 1400);
}

generateBtn.addEventListener("click", () => {
  const password = generatePassword();
  output.value = password;
  showStatus("New password generated");
});

copyBtn.addEventListener("click", async () => {
  if (!output.value) {
    showStatus("Generate a password first");
    return;
  }

  try {
    await navigator.clipboard.writeText(output.value);
    showStatus("Password copied");
  } catch (error) {
    showStatus("Copy failed");
  }
});

clearBtn.addEventListener("click", () => {
  output.value = "";
  showStatus("Password cleared");
});

output.value = generatePassword();
