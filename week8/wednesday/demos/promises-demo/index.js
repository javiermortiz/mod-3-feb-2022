// V1 doesn't work
function openingCrawlBroken(time) {
    setTimeout(() => {
        console.log(`It is a period of civil war.
                     Rebel spaceships, striking
                     from a hidden base, have won
                     their first victory against
                     the evil Galactic Empire.`);
    }, time);
    setTimeout(() => {
        console.log(`During the battle, Rebel
                         spies managed to steal secret
                         plans to the Empire's
                         ultimate weapon, the DEATH
                         STAR, an armored space
                         station with enough power to
                         destroy an entire planet.`);
        
    }, time);
    setTimeout(() => {
        console.log(`Pursued by the Empire's
                             sinister agents, Princess
                             Leia races home aboard her
                             starship, custodian of the
                             stolen plans that can save
                             her people and restore
                             freedom to the galaxy....`);
    }, time);
}
// openingCrawlBroken(2000);
// V2 works but unreadable
function openingCrawlNested(time) {
    setTimeout(() => {
        console.log(`It is a period of civil war.
                     Rebel spaceships, striking
                     from a hidden base, have won
                     their first victory against
                     the evil Galactic Empire.`);
        setTimeout(() => {
            console.log(`During the battle, Rebel
                         spies managed to steal secret
                         plans to the Empire's
                         ultimate weapon, the DEATH
                         STAR, an armored space
                         station with enough power to
                         destroy an entire planet.`);
            setTimeout(() => {
                console.log(`Pursued by the Empire's
                             sinister agents, Princess
                             Leia races home aboard her
                             starship, custodian of the
                             stolen plans that can save
                             her people and restore
                             freedom to the galaxy....`);
            }, time);
        }, time);
    }, time);
    /*
     stack = [cb3]
     queue = []
    */
}
// openingCrawlNested(2000);
// Wraps setTimeout with a Promise
/*
function Promise(cb){
    res = function () {
        console.log('hello')
    }
    rej = function () {
        console.log('reject');
    }
    cb(res, rej)
}

new Promise((res, rej) => {
    res();
    rej();
})
*/

// function Promise(cb) {
//     res = function () {
//         console.log('resolve')
//     }
//     rej = function () {
//         console.log('reject');
//     }
//     cb(res, rej)
// }

// new Promise((res, rej) => {
//     res();
//     rej();
// })

function wait(ms, arg) {
    return new Promise((resolve, reject) => {
        if (ms < 2000) {
            reject('Not enough time');
        } else {
            setTimeout(() => {
                resolve('hello');
            }, ms);
        }
        
    });
}

// V3 with promise chaining
function openingCrawlChain(time) {
    wait(time)
        .then((phrase) => {
            console.log(phrase);
            console.log(`It is a period of civil war.
                     Rebel spaceships, striking
                     from a hidden base, have won
                     their first victory against
                     the evil Galactic Empire.`);
            return wait(time);
        })
        .then((phrase) => {
            console.log(phrase);
            console.log(`During the battle, Rebel
                         spies managed to steal secret
                         plans to the Empire's
                         ultimate weapon, the DEATH
                         STAR, an armored space
                         station with enough power to
                         destroy an entire planet.`)
            return wait(time);
        })
        .then(() => {
            console.log(`Pursued by the Empire's
                             sinister agents, Princess
                             Leia races home aboard her
                             starship, custodian of the
                             stolen plans that can save
                             her people and restore
                             freedom to the galaxy....`);
        });
}
// openingCrawlChain(2000);
openingCrawlAsync(2000);
// V4 with async and await
async function openingCrawlAsync(time) {

        let phrase = await wait(time);
        console.log(phrase);
        console.log(`It is a period of civil war.
                Rebel spaceships, striking
                from a hidden base, have won
                their first victory against
                the evil Galactic Empire.`);
        phrase = await wait(time);
        console.log(phrase);
        console.log(`During the battle, Rebel
                    spies managed to steal secret
                    plans to the Empire's
                    ultimate weapon, the DEATH
                    STAR, an armored space
                    station with enough power to
                    destroy an entire planet.`)
        await wait(time);
        console.log(`Pursued by the Empire's
                        sinister agents, Princess
                        Leia races home aboard her
                        starship, custodian of the
                        stolen plans that can save
                        her people and restore
                        freedom to the galaxy....`);
    
}

// openingCrawlAsync(2000);