const Listing = require("../models/listing");
const axios = require('axios');
const api_key = process.env.MAPTILER_API_KEY

module.exports.index = async (req, res) => {
    const allListings = await Listing.find({})
    res.render("index.ejs", { allListings })
}

module.exports.newListing = (req, res) => {
    res.render("new.ejs")
}

module.exports.showListing = async (req, res) => {
    const { id } = req.params;
    const found = await Listing.findById(id).populate(
        {
            path: "reviews",
            populate: { path: "author" }
        }
    ).populate("owner");
    if (!found) {
        req.flash("error", "The listing which you are trying to access does not exist.")
        res.redirect("/listings")
    }
    res.render("show.ejs", { found })
}

module.exports.saveListing = async (req, res) => {
    const url = req.file.path
    const filename = req.file.filename
    const newListing = new Listing(req.body.listing)

    const result = await axios.get(`https://api.maptiler.com/geocoding/${newListing.location}.json?proximity=7.658000%2C46.838000&autocomplete=false&fuzzyMatch=true&limit=1&key=${api_key}`)
    console.log(result.data.features[0].geometry)
    const answer = result.data.features[0].geometry
    newListing.image = { url, filename };
    newListing.owner = req.user._id;
    newListing.geometry = answer
    const saved = await newListing.save()
    console.log(saved)
    req.flash("success", "New listing saved!");
    res.redirect("/listings")
}

module.exports.editListingPage = async (req, res) => {
    const { id } = req.params;
    const found = await Listing.findById(id);
    if (!found) {
        req.flash("error", "The listing you are trying to reach does not exist!");
        res.redirect("/listings");
    }
    let originalUrl = found.image.url
    originalUrl = originalUrl.replace("/upload", "/upload/h_300,w_500")
    res.render("edit.ejs", { found, originalUrl });
}

module.exports.saveEditData = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

    if (typeof req.file != 'undefined') {
        const url = req.file.path
        const filename = req.file.filename
        listing.image = { url, filename }
    }
    await listing.save()
    res.redirect(`/listings/${id}`);
}

module.exports.deleteListing = async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing has been permanently deleted!")
    res.redirect("/listings");
}