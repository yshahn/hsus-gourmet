// api/stripe-setup.js - ONE TIME USE, DELETE AFTER!
const stripe = require('stripe')(process.env.PLATFORM_STRIPE_SECRET_KEY);

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const CONNECTED_ACCOUNT_ID = 'acct_1U3iR4IGS4LuRjms';
  try {
    // Enable transfers capability
    const account = await stripe.accounts.update(CONNECTED_ACCOUNT_ID, {
      capabilities: {
        card_payments: { requested: true },
        transfers: { requested: true },
      },
    });
    res.status(200).json({ 
      success: true, 
      capabilities: account.capabilities,
    });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ error: err.message });
  }
};
