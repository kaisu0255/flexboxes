document.addEventListener("DOMContentLoaded", function() {
    const box5 = document.querySelector('.box5');
    const box6 = document.querySelector('.box6');
    const box7 = document.querySelector('.box7');
    const box8 = document.querySelector('.box8');

    box5.addEventListener('mouseover', function() {
        this.textContent = 'Hello, I am Box 5';
    });


    box5.addEventListener('mouseout', function() {
        this.textContent = 'Box 5';
    });

    box6.addEventListener('mouseover', function() {
        this.textContent = 'Hello, I am Box 6';
    });

    box6.addEventListener('mouseout', function() {
        this.textContent = 'Box 6';
    });

    box7.addEventListener('mouseover', function() {
        this.textContent = 'Hello, I am Box 7';
    });

    box7.addEventListener('mouseout', function() {
        this.textContent = 'Box 7';
    });

    box8.addEventListener('mouseover', function() {
        this.textContent = 'Hello, I am Box 8';
    });

    box8.addEventListener('mouseout', function() {
        this.textContent = 'Box 8';
    });
});
