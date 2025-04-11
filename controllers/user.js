const User = require('../models/user')
const passport = require('passport')

module.exports.showSignupPage = (req, res) => {
    res.render("signup.ejs")
}

module.exports.sendSignupData = async (req, res, next) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ username, email });
        await User.register(newUser, password);

        req.login(newUser, (err) => {
            if (err) return next(err);
            req.flash("success", "You have been registered successfully.");
            res.redirect("/listings");
        });
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
}

module.exports.showLoginPage = (req, res) => {
    res.render("login.ejs")
}

module.exports.logout = (req, res) => {
    req.logout((err) => {
        if (err) {
            next(err)
        }
        req.flash("success", "Logged out successfully!")
        res.redirect("/listings")
    })

}
module.exports.postLoginData = [
    passport.authenticate("local", {
        failureRedirect: "/login",
        failureFlash: true
    }),
    (req, res) => {
        req.flash("success", "Logged in successfully!");
        let redirectUrl = res.locals.redirectUrl || "/listings";
        res.redirect(redirectUrl);
    }
];
