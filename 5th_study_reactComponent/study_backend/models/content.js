module.exports = (sequelize, DataTypes) => {
    const Content = sequelize.define('Content', {
        title: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
    }, {
        charset: 'utf8mb4', // 한글+이모티콘
        collate: 'utf8mb4_general_ci',
        timestamps: true,
    });

    Content.associate = (db) => {
        // db.Content.belongsTo(db.User); // belongsTo가 있는 테이블에 다른 테이블의 id를 저장한다. ex) Post 테이블에 UserId 저장
    };

    return Content;
}