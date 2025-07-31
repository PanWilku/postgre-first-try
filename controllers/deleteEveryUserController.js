const db = require("../db/queries");

module.exports = {
    deleteEveryUser: async (req, res) => {
        try {
            await db.deleteEveryUser();
            console.log("All usernames deleted successfully.");
            res.redirect("/");
        } catch (error) {
            console.error("Error deleting all usernames: ", error);
            res.status(500).send("Failed to delete all users");
        }
    }
};