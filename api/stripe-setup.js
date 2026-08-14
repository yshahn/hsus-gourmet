// api/stripe-setup.js - ONE TIME USE, DELETE AFTER!
const stripe = require('stripe')(process.env.PLATFORM_STRIPE_SECRET_KEY);

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const CONNECTED_ACCOUNT_ID = 'acct_1U3iR4IGS4LuRjms';
  try {
    const account = await stripe.accounts.update(CONNECTED_ACCOUNT_ID, {
      email: 'hsusp192@gmail.com',
      individual: {
        email: 'hsusp192@gmail.com',
      },
    });
    res.status(200).json({ 
      success: true, 
      email: account.email,
    });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ error: err.message });
  }
};
