const box = document.getElementById('box');

// 1. Animation au clic
box.addEventListener('click', function() {
    anime({
        targets: '#box',
        translateX: 2000,
        duration: 2000,
        direction: 'alternate',
        easing: 'easeInOutQuad',
        loop: 3
    });
});

// 2. Animation au double clic
box.addEventListener('dblclick', function() {
    anime({
        targets: '#box',
        translateX: {
            value: 3000,
            duration: 2000
          },
          rotate: {
            value: 180,
            duration: 1000,
            easing: 'easeInOutSine'
          },
          scale: {
            value: 2,
            duration: 1000,
            delay: 500,
            easing: 'easeInOutQuart'
          },
          delay: 1250
    });
});

// 3. Changement de taille, de forme et de couleur au survol
box.addEventListener('mouseover', function() {
    anime({
        targets: '#box',
        width: '200px',
        height: '800px',
        backgroundColor: '#FF2103',
        borderRadius: ['0%', '50%'],
        duration: 1500,
        easing: 'easeInOutQuad'
    });
});

// 4. Revenir à l'état initial quand la souris sort
box.addEventListener('mouseout', function() {
    anime({
        targets: '#box',
        width: '400px',
        height: '300px',
        backgroundColor: '#ff6755',
        borderRadius: ['50%', '0%'],
        duration: 1500,
        easing: 'easeInOutQuad'
    });
});

// 5. Animation lors de l'appui d'une touche du clavier
document.addEventListener('keydown', function() {
    anime({
        targets: '#box',
        keyframes: [
            {translateY: -300},
            {translateX: 3000},
            {translateY: 500},
            {translateX: 0},
            {translateY: 0}
          ],
        duration: 3000,
        easing: 'easeOutElastic(1, .8)',
        loop: 1
    });
});
