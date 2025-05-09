const inputs = {
  username: document.getElementById('username'),
  email: document.getElementById('email'),
  server: document.getElementById('server'),
  description: document.getElementById('description'),
  agreement: document.getElementById('agreement'),
};

const errors = {
  username: document.querySelector('.error-username'),
  email: document.querySelector('.error-email'),
  server: document.querySelector('.error-server'),
  description: document.querySelector('.error-description'),
  agreement: document.querySelector('.error-agreement'),
};

const form = document.getElementById('report-form');
const result = document.getElementById("result");
const limit = 10000;
result.textContent = "0/" + limit;

function setError(inputKey, message) {
  errors[inputKey].textContent = message;
  inputs[inputKey].classList.add("input-error");
}

function clearError(inputKey) {
  errors[inputKey].textContent = "";
  inputs[inputKey].classList.remove("input-error");
}

inputs.username.addEventListener("input", () => {
  const val = inputs.username.value.trim();
  if (val.length < 3) {
    setError("username", "Username must be at least 3 characters");
  } else {
    clearError("username");
  }
});

inputs.email.addEventListener("input", () => {
  const val = inputs.email.value.trim();
  if (!val.includes("@") || !val.endsWith(".com")) {
    setError("email", "Email must include '@' and end with '.com'");
  } else {
    clearError("email");
  }
});

inputs.server.addEventListener("change", () => {
  if (!inputs.server.value) {
    setError("server", "Please select a server");
  } else {
    clearError("server");
  }
});

inputs.description.addEventListener("input", () => {
  const val = inputs.description.value;
  const length = val.length;
  result.textContent = length + "/" + limit;

  if (length === 0) {
    setError("description", "Description is required");
    result.classList.add("text-error");
  } else if (length > limit) {
    setError("description", "Description must be 10,000 characters max");
    result.classList.add("text-error");
  } else {
    clearError("description");
    result.classList.remove("text-error");
  }
});

inputs.agreement.addEventListener("change", () => {
  if (!inputs.agreement.checked) {
    setError("agreement", "You must agree to the terms");
  } else {
    clearError("agreement");
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let isValid = true;

  Object.keys(errors).forEach(key => clearError(key));
  result.classList.remove("text-error");

  const username = inputs.username.value.trim();
  const email = inputs.email.value.trim();
  const server = inputs.server.value;
  const description = inputs.description.value;

  if (username.length < 3) {
    setError("username", "Username must be at least 3 characters");
    isValid = false;
  }

  if (email === '') {
    setError("email", "Email is required");
    isValid = false;
  } else if (!email.includes('@') || !email.endsWith('.com')) {
    setError("email", "Email must include '@' and end with '.com'");
    isValid = false;
  }

  if (!server) {
    setError("server", "Please select a server");
    isValid = false;
  }

  if (description.length === 0) {
    setError("description", "Description is required");
    result.classList.add("text-error");
    isValid = false;
  } else if (description.length > limit) {
    setError("description", "Description must be 10,000 characters max");
    result.classList.add("text-error");
    isValid = false;
  }

  if (!inputs.agreement.checked) {
    setError("agreement", "You must agree to the terms");
    isValid = false;
  }

  if (isValid) {
    const successBox = document.getElementById("success-message");
    successBox.style.display = "block";
  
    Object.values(inputs).forEach(input => input.disabled = true);
    form.querySelector('button[type="submit"]').disabled = true;

    form.querySelector('button[type="submit"]').classList.add('disabled');
  }
});
