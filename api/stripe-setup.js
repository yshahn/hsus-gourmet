// api/stripe-setup.js
// ONE-TIME USE: Prefill connected account info and generate onboarding link
// DELETE THIS FILE after onboarding is complete!

const stripe = require('stripe')(process.env.PLATFORM_STRIPE_SECRET_KEY);

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  const CONNECTED_ACCOUNT_ID = 'acct_1U3iR4IGS4LuRjms';

  try {
    // Step 1: Prefill basic info
    await stripe.accounts.update(CONNECTED_ACCOUNT_ID, {
      business_profile: {
        url: 'https://hsusgourmet.com',
        mcc: '5812',
        product_description: 'Restaurant online ordering and reservations',
        support_phone: '+14046592788',
      },
      individual: {
        first_name: 'Yong',
        last_name: 'Hahn',
        email: 'hsusb192@gmail.com',
        phone: '+17705008420',
      },
      email: 'hsusb192@gmail.com',
    });

    // Step 2: Generate fresh account link
    const accountLink = await stripe.accountLinks.create({
      account: CONNECTED_ACCOUNT_ID,
      refresh_url: 'https://hsusgourmet.com',
      return_url: 'https://hsusgourmet.com',
      type: 'account_onboarding',
    });

    res.status(200).json({ 
      success: true, 
      onboarding_url: accountLink.url,
    });

  } catch (err) {
    console.error('Stripe setup error:', err);
    res.status(500).json({ error: err.message });
  }
};
