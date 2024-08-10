document.getElementById('filterInput').addEventListener('keyup', function() {
    const filterValue = this.value.toLowerCase();
    const items = document.querySelectorAll('#itemsList li');

    items.forEach(function(item) {
        const text = item.textContent.toLowerCase();
        if (text.includes(filterValue)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});

  