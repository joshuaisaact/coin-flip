$(document).ready(() => {

    let wins = 0;
    let losses = 0;
    let result;

    function updateTally() {
        $('#tally').text(`Wins: ${wins} | Losses: ${losses}`)
    }

    function scrollBackground() {
        $('.background').css({ left: '0%' }).animate({ left: '-100%' }, 20000, 'linear', scrollBackground);
    }

    scrollBackground();
    
    

    $('#flipCoin').on('click', () => {
        result = Math.random() < 0.5 ? 'heads' : 'tails';
        $('#flipCoin, #result').hide()
        $('#flipped').text('The coin has been flipped! Pick a side!');
        $('#flipped, #heads, #tails').show();
    })

    $('#tails').on('click', () => {
        if (result === 'tails') {
            $('#result').text(`Congratulations, you won! The result was ${result}.`)
            wins++;
        } else {
            $('#result').text(`Sorry, you lost! The result was ${result}.`)
            losses++;
        }
        updateTally();
        $('#flipCoin, #result').show();
        $('#flipped, #heads, #tails').hide();
    })

    $('#heads').on('click', () => {
        if (result === 'heads') {
            $('#result').text(`Congratulations, you won! The result was ${result}.`)
            wins++;
        } else {
            $('#result').text(`Sorry, you lost! The result was ${result}.`)
            losses++;
        }
        updateTally();
        $('#flipCoin, #result').show();
        $('#flipped, #heads, #tails').hide();
    });

});