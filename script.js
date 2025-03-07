const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');

let player1Position = { left: 50, bottom: 50 };
let player2Position = { left: 400, bottom: 50 };
let player1Jumping = false;
let player2Jumping = false;

function updatePlayerPosition(player, position) {
    player.style.left = position.left + 'px';
    player.style.bottom = position.bottom + 'px';
}

function jump(player, position) {
    if (!playerJumping) {
        playerJumping = true;
        let jumpHeight = 0;
        const jumpInterval = setInterval(() => {
            if (jumpHeight < 100) {
                position.bottom += 5;
                jumpHeight += 5;
            } else {
                clearInterval(jumpInterval);
                const fallInterval = setInterval(() => {
                    if (position.bottom > 50) {
                        position.bottom -= 5;
                    } else {
                        clearInterval(fallInterval);
                        playerJumping = false;
                    }
                    updatePlayerPosition(player, position);
                }, 20);
            }
            updatePlayerPosition(player, position);
        }, 20);
    }
}

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'a':
            player1Position.left -= 5;
            break;
        case 'd':
            player1Position.left += 5;
            break;
        case 'w':
            jump(player1, player1Position);
            break;
        case 'j':
            // Attack logic for player 1
            console.log('Player 1 attacks!');
            break;
        case 'ArrowLeft':
            player2Position.left -= 5;
            break;
        case 'ArrowRight':
            player2Position.left += 5;
            break;
        case 'ArrowUp':
            jump(player2, player2Position);
            break;
        case 'l':
            // Attack logic for player 2
            console.log('Player 2 attacks!');
            break;
    }
    updatePlayerPosition(player1, player1Position);
    updatePlayerPosition(player2, player2Position);
});
