module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define('Movies', { //movies is table name

        name: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.STRING }

    }, {
        indexes: [
            {
                name: 'index1',
                fields: ['name']
            }
        ]
    });
    return Movie;
};