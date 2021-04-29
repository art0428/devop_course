var movieService = require('../models/services/movieServices')

let main = async () => {
    try {
        await movieService.build();
    } catch (e) {
        console.error(e)
    };
    process.exit();
}


main();




