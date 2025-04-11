const express = require('express');
const router = express.Router({ mergeParams: true });
const wrapAsync = require('../utils/wrapAsync');
const { isLoggedin, isOwner, validateListing } = require('../middleware.js');
const listingsController = require('../controllers/listings.js');
const { storage } = require('../cloudConfig.js');
const multer = require('multer');
const upload = multer({ storage });

// Index and Create New Listing
router.route('/')
    .get(wrapAsync(listingsController.index))
    .post(isLoggedin,
        validateListing,
        upload.single("listing[image]"),
        wrapAsync(listingsController.saveListing))

// New Listing Form
router.get('/new', isLoggedin, listingsController.newListing);

// Show, Edit, Update, and Delete Specific Listing
router.route('/:id')
    .get(wrapAsync(listingsController.showListing))
    .delete(isOwner, isLoggedin, wrapAsync(listingsController.deleteListing));

router.route('/:id/edit')
    .get(isLoggedin, wrapAsync(listingsController.editListingPage))
    .put(isOwner, isLoggedin, validateListing, upload.single('image'), wrapAsync(listingsController.saveEditData));

module.exports = router;
