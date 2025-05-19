document.addEventListener('keydown', function(event) {
    switch (event.key.toUpperCase()) {
        case 'R':
            document.body.style.backgroundColor = 'red';
            break;
        case 'G':
            document.body.style.backgroundColor = 'green';
            break;
        case 'B':
            document.body.style.backgroundColor = 'blue';
            break;
        case 'W':
            document.body.style.backgroundColor = 'white';
            break;
    }
});

document.addEventListener('keyup', function(event) {
    document.body.style.backgroundColor = 'white';
});