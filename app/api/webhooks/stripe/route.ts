// import { NextRequest, NextResponse } from 'next/server';
// import Stripe from 'stripe';

// const stripe = new Stripe(process.env.STRIPE_SECRET_API_KEY as string, {
//     apiVersion: '2024-06-20',
// });

// const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

// export const POST = async (req: NextRequest) => {
//     const rawBody = await req.text();
//     const sig = req.headers.get('stripe-signature');

//     let event;
//     let result = 'Webhook called.';

//     try {
//         event = stripe.webhooks.constructEvent(rawBody, sig!, endpointSecret!);
//     } catch (err: any) {
//         console.error(err);
//         return NextResponse.json({ error: err.message }, { status: 400 });
//     }

//     switch (event.type) {
//         case 'checkout.session.completed':
//             const savedSession = await handleCompletedCheckoutSession(event);
//             if (!savedSession)
//                 return NextResponse.json(
//                     { error: 'Unable to save checkout session' },
//                     { status: 500 }
//                 );
//             break;

//         default:
//             console.log('None');
//     }

//     return NextResponse.json({ recived: true, status: result });
// };

// async function handleCompletedCheckoutSession(
//     event: Stripe.CheckoutSessionCompletedEvent
// ) {
//     try {
//         const sessionWithLineItems = await stripe.checkout.sessions.retrieve(
//             (event.data.object as any).id,
//             {
//                 expand: ['line_items'],
//             }
//         );

//         const lineItems = sessionWithLineItems.line_items;
//         if (!lineItems) return false;

//         console.log(
//             'error fulfilling orders for',
//             JSON.stringify(lineItems),
//             JSON.stringify(event.data.object)
//         );
//         return false;
//     } catch (err: any) {
//         console.error('error hanglingCompletedCheckoutSession', err);
//         return false;
//     }
//     // throw new Error("Function not implemented.");
// }

// export const dynamic = 'force-dynamic';

// // Note: Node.js API does not throw exceptions, and instead prefers the
// // asynchronous style of error handling described below.
// //
// // An error from the Stripe API or an otherwise asynchronous error
// // will be available as the first argument of any Stripe method's callback:
// // E.g. stripe.customers.create({...}, function(err, result) {});
// //
// // Or in the form of a rejected promise.
// // E.g. stripe.customers.create({...}).then(
// //        function(result) {},
// //        function(err) {}
// //      );

// // switch (err.type) {
// //     case 'StripeCardError':
// //       // A declined card error
// //       err.message; // => e.g. "Your card's expiration year is invalid."
// //       break;
// //     case 'StripeRateLimitError':
// //       // Too many requests made to the API too quickly
// //       break;
// //     case 'StripeInvalidRequestError':
// //       // Invalid parameters were supplied to Stripe's API
// //       break;
// //     case 'StripeAPIError':
// //       // An error occurred internally with Stripe's API
// //       break;
// //     case 'StripeConnectionError':
// //       // Some kind of error occurred during the HTTPS communication
// //       break;
// //     case 'StripeAuthenticationError':
// //       // You probably used an incorrect API key
// //       break;
// //     default:
// //       // Handle any other types of unexpected errors
// //       break;
// //   }
