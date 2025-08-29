document.addEventListener('DOMContentLoaded', () => {
    const partials = [
        { id: 'header-placeholder', path: 'partials/header.html' },
        { id: 'footer-placeholder', path: 'partials/footer.html' }
    ];

    const loadPartial = (id, path) => {
        fetch(path)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load ${path}: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                const placeholder = document.getElementById(id);
                if (placeholder) {
                    placeholder.innerHTML = data;
                }
            })
            .catch(error => console.error(error));
    };

    partials.forEach(partial => {
        loadPartial(partial.id, partial.path);
    });
});