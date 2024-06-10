document.getElementById('home').addEventListener('click', function() {
    document.getElementById('content').innerHTML = `
        <h2>Welcome to Athletics Training</h2>
        <p>Select a category from the navigation to get started.</p>
    `;
});

document.getElementById('sprints').addEventListener('click', function() {
    document.getElementById('content').innerHTML = `
        <h2>Sprints Training</h2>
        <p>Here you can find information and exercises for sprint training.</p>
        <!-- Add sprint training content here -->
    `;
});

document.getElementById('jumps').addEventListener('click', function() {
    document.getElementById('content').innerHTML = `
        <h2>Jumps Training</h2>
        <p>Here you can find information and exercises for jumps training.</p>
        <!-- Add jumps training content here -->
    `;
});

document.getElementById('throws').addEventListener('click', function() {
    document.getElementById('content').innerHTML = `
        <h2>Throws Training</h2>
        <p>Here you can find information and exercises for throws training.</p>
        <!-- Add throws training content here -->
    `;
});
