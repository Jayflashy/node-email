// Homecontroller
const index = (req, res) => {
    res.render('index', {title: "Index Page"})
}
const about = (req, res) => {
    res.render('about',{title: "About Page"})
}
module.exports = {
    index, about
}