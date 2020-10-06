const functions = require('firebase-functions');
const express = require('express')
const cors = require('cors')
const stripe = require('stripe')('sk_test_51HYyKtG3acrIAEXlEUlO57clRSnXFeTE3IdB0XZEdRZHiNJWhGfq8lxuocofuMjbsBTSmyFVUAiwlWOc2vb34NH700Quwl2A9j')


// API


// - App config
const app = express()

// - Middlewares
app.use(cors({ origin: true }))
app.use(express.json())

// - API routes
app.get('/', (resquest, response) => response.status(200).send('heelo world'))
app.post('/payments/create', async (resquest, response) => {
    const total = request.query.total;
    console.log('Payment Request received', total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd'
    })

    // OK - everything was good
    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

// - Listen command
exports.api = functions.https.onRequest(app)