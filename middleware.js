const Listing = require("./models/listing");
const Review = require("./models/review")
const { listingSchema } = require("./schema.js")
const ExpressError = require('./utils/ExpressError')
const { reviewSchema } = require("./schema.js")

module.exports.isLoggedin = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.flash("error", "You need to be logged in first!")
        return res.redirect("/login");
    } else {
        next()
    }
}

module.exports.validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
    if (error) {
        throw new ExpressError(400, error)
    } else {
        next()
    }
}

module.exports.validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        throw new ExpressError(400, "Please enter something.")
    } else {
        next()
    }
}

module.exports.isOwner = async (req, res, next) => {
    const { id } = req.params;
    let listing = await Listing.findById(id);
    if (!listing.owner.equals(res.locals.currUser._id)) {
        req.flash("error", "You do not have the permission to perform this action.")
        res.redirect(`/listings/${id}`)
    }
    next()
}

module.exports.isAuthor = async (req, res, next) => {
    const { id, reviewId } = req.params;
    let review = await Review.findById(reviewId);
    if (!review.author.equals(res.locals.currUser._id)) {
        req.flash("error", "You do not have the permission to perform this action.")
        return res.redirect(`/listings/${id}`)
    }
    next();
}