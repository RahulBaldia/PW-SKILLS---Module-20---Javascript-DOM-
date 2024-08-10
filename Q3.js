let counter = 0;

document.getElementById('increment-btn').addEventListener('click', function() {
    counter++;
    document.getElementById('counter-value').textContent = counter;
});

document.getElementById('decrement-btn').addEventListener('click', function() {
    if (counter > 0) {
        counter--;
        document.getElementById('counter-value').textContent = counter;
    } else {
        alert("Counter is going below 0.");
    }
});
