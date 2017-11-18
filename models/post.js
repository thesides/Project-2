module.exports = function (sequelize, DataTypes) {
	
	//This contains the text of the post
	var Post = sequelize.define("Post", {
		body: {
			type: DataTypes.TEXT,
			allowNull: false
		}
		
	});

	//This creates a column linking the post to the author
	Post.associate = function (models) {
		Post.belongsTo(models.User, {
			foreignKey: {
				allowNull: false
			}
		});

		Post.belongsTo(models.Story, {
			foreignKey: {
				allowNull: false
			}
		});
	}

	//This creates a column linking the post to the relevant story ID
	// Post.associate = function (models) {
		
	// }

	return Post;
};