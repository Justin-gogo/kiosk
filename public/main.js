const lottoNumbersContainer = document.getElementById('lotto-numbers');
const generateBtn = document.getElementById('generate-btn');
const themeToggle = document.getElementById('theme-toggle');

// Theme Management
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateToggleIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateToggleIcon(newTheme);
}

function updateToggleIcon(theme) {
    themeToggle.textContent = theme === 'light' ? '🌙' : '☀️';
}

themeToggle.addEventListener('click', toggleTheme);

// Lotto Logic
function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

function displayNumbers(numbers) {
    lottoNumbersContainer.innerHTML = '';
    numbers.forEach(number => {
        const numberElement = document.createElement('div');
        numberElement.classList.add('number');
        numberElement.textContent = number;
        lottoNumbersContainer.appendChild(numberElement);
    });
}

generateBtn.addEventListener('click', () => {
    const newNumbers = generateLottoNumbers();
    displayNumbers(newNumbers);
});

// Initialize
initTheme();
const initialNumbers = generateLottoNumbers();
displayNumbers(initialNumbers);
