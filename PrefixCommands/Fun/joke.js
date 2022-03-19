const request = require('superagent');

module.exports = {
    name: 'joke',
    description: 'tells a joke about someone',
    usage: '[Name of the person you want to make fun of]',
    execute(message, args, commandName, client, Discord) { 
        let firstName = args[0];
        let lastName = args[1];

        if (!firstName) firstName = 'Jeff';
        if (!lastName) lastName = 'Bezos';

        request.get('http://api.icndb.com/jokes/random')
            .query({escape: 'javascript'})
            .query({firstName: firstName})
            .query({lastName: lastName})
            .end((err, res) => {
                if (!err && res.status === 200) {
                    message.channel.send(res.body.value.joke)
                } else {
                    console.error(`REST call failed: ${err}`)
                }
            });
    }

}