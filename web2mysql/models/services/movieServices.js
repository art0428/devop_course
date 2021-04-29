const { response } = require('express');
const db = require('../../connections/mysql');

const Movie = require('../objects/movie')(db.sequelize, db.Sequelize);

let create = async (movie_name, movie_description) => {
    try {

        return await Movie.create({
            name: movie_name,
            description: movie_description
        })
            .then(response => {
                return response;
            })


    } catch (e) {
        throw e;
    };
}


let build = async () => {
    try {
        return await Movie.sync({ alter: true })
            .then((response) => {
                return (new response).constructor.name;;
            })

    } catch (e) {
        throw e;
    };
}

let search = async () => {
    try {
        return await Movie.findAll()
        .then(response=>{
            return response
        })
    } catch (e) {
        throw e;
    };
}


module.exports = {
    create,
    build,
    search
}