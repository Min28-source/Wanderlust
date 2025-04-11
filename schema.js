const Joi = require("joi");

const listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        image: Joi.string().allow("", null).min(0),
        country: Joi.string().required(),
        location: Joi.string().required(),
        price: Joi.number().required()
    })
}).required()

const reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required(),
        comment: Joi.string().required()
    })
}).required()

module.exports = { listingSchema, reviewSchema };