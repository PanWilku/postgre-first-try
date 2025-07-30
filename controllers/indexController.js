const indexGet = (req, res) => {
    res.render("index", { data: "Home" });
}


module.exports = {
    indexGet
}