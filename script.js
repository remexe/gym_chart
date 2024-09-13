function filterSchedule(category) {
    const rows = document.querySelectorAll('tbody tr');
    rows.forEach(row => {
        if (category === 'all') {
            row.style.display = '';
        } else if (!row.classList.contains(category)) {
            row.style.display = 'none';
        } else {
            row.style.display = '';
        }
    });
}
