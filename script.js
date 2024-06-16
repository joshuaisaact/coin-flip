$(document).ready(() => {
    
    let result

    $('#flipCoin').on('click', () => {
        result = Math.random() < 0.5 ? 'heads' : 'tails';
        $('#result').hide()
        $('#flipCoin').toggle()
        $('#flipped').text('The coin has been flipped! Pick a side!');
        $('#flipped').show();
        $('#heads').show();
        $('#tails').show();
    })

    $('#tails').on('click', () => {
        if (result === 'tails') {
            $('#result').text(`Congratulations, you won!, the result was ${result}`)
            $('#result').show();
            $('#flipCoin').toggle();
            $('#flipped').hide();
            $('#heads').toggle();
            $('#tails').toggle();
        } else {
            $('#result').text(`Sorry, you lost! The result was ${result}`)
            $('#result').show();
            $('#flipCoin').toggle();
            $('#flipped').hide();
            $('#heads').toggle();
            $('#tails').toggle();
        }
    })

    $('#heads').on('click', () => {
        if (result === 'heads') {
            $('#result').text(`Congratulations, you won!, the result was ${result}`)
            $('#result').show();
            $('#flipCoin').toggle();
            $('#flipped').hide();
            $('#heads').toggle();
            $('#tails').toggle();
        } else {
            $('#result').text(`Sorry, you lost! The result was ${result}`)
            $('#result').show();
            $('#flipCoin').toggle();
            $('#flipped').hide();
            $('#heads').toggle();
            $('#tails').toggle();
        }
    })
});