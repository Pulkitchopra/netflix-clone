import {buffer} from 'micro';
import * as admin from 'firebase-admin';



const serviceAccount = require('../netflix-clone-b382f-firebase-adminsdk-9s39k-56ab6a535f.json');

const app = !admin.apps.length ? admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),

})


: admin.app();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

const subscriptions = async (session) => {

  return app.firestore().collection('subscription').doc().set({

      name: 'User'
    }).then(() => {


      console.log('Stripe')

    })
}


export default async (req, res) => {

    let event;

    if (req.method === 'POST') {
        const requestBuffer = await buffer(req);
        const payload = requestBuffer.toString();

        const signature = req.headers['stripe-signature'];
        try {
          event = stripe.webhooks.constructEvent(
            payload,
            signature,
            endpointSecret
          );
        } 
        
        
        catch (err) {
          console.log(`⚠️  Webhook signature verification failed.`, err.message);
          return res.status(400).send('Error');
        }
      }

      if(event.type === 'checkout.session.completed'){
        
        const session = event.data.object;


        return subscriptions(session).then(() => res.status(200))
        .catch((err) => res.status(400).send('Stripe Error'))
      }    
} 



