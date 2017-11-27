module.exports = function (sequelize, DataTypes) {
	
	var User = sequelize.define("User", {
		userName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		password: {
			type: DataTypes.STRING
		}
	});

	//associating authors with their various story chains
	// User.associate = function (models) {
	// 	User.hasMany(models.Story);
	// };

	return User;
	
};