const db = require("../db/queries");



const indexGetPage = async(req, res) => {
    const { search } = req.query;
    console.log("received search query:", search);
    try {
        let usernames;
        if(search) {
            usernames = await db.getSearchUsernames(search);
        } else {
            usernames = await db.getAllUsernames();
        }
        res.render("index", { usernames, error: null });
    } catch (error) {
        console.error("Error fetching usernames: ", error);
        //have to pass an empty array of users in case of an error because ejs wont render
        res.render("index", { usernames: [],error: "Failed to fetch usernames" });
    }
}


module.exports = {
    indexGetPage
}