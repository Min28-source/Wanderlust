const express = require('express');
const router = express.Router({ mergeParams: true });
const wrapAsync = require('../utils/wrapAsync')
const { isLoggedin, isAuthor, validateReview } = require('../middleware.js')
const reviewController = require('../controllers/review.js')

//review route
router.post("/", validateReview, isLoggedin, wrapAsync(reviewController.addReview))

//delete review
router.delete("/:reviewId", isLoggedin, isAuthor, wrapAsync(reviewController.deleteReview))

module.exports = router;