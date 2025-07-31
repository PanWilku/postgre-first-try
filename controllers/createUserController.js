const db = require("../db/queries");


const getPage = (req, res) => {
    res.render("createUser");
}


const createUser = async (req, res) =>{
    const { username } = req.body;
    console.log("Username received:", username);
try {
    if (!username) {
    res.status(400).send("Username is required");
    } else {
    await db.insertUsername(username);
    res.redirect("/");
    }
} catch (error) {
    console.error("Error inserting username: ", error);
    res.status(500).send("Failed to create user");
}
}



module.exports = {
    createUser,
    getPage,
};