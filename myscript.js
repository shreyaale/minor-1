<script>
        // Dark mode toggle functionality
        const darkModeToggle = document.getElementById('darkModeToggle');
        const footerDarkModeToggle = document.getElementById('footerDarkModeToggle');
        
        function toggleDarkMode() {
            document.body.classList.toggle('dark-mode');
            // Save preference to localStorage
            const isDarkMode = document.body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDarkMode);
            
            // Update button text
            const buttons = [darkModeToggle, footerDarkModeToggle];
            buttons.forEach(button => {
                button.textContent = isDarkMode ? '☀️ Toggle Light Mode' : '🌙 Toggle Dark Mode';
            });
        }
        
        // Check for saved dark mode preference
        if (localStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark-mode');
            darkModeToggle.textContent = '☀️ Toggle Light Mode';
            footerDarkModeToggle.textContent = '☀️ Toggle Light Mode';
        }
        
        // Add event listeners to both buttons
        darkModeToggle.addEventListener('click', toggleDarkMode);
        footerDarkModeToggle.addEventListener('click', toggleDarkMode);

<script>
        document.getElementById('feedbackForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your feedback! We appreciate your time.');
            this.reset();
        });
    </script>
    