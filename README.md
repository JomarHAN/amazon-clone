## How to use Stripe in the project

1. npm i @stripe/stripe-js
   npm i @stripe/react-stripe-js
   
2. in app.js 
    import {loadStripe} from '@stripe/stripe-js'
    import {Elements} from '@stripe/react-stripe-js'
    
    const promise = loadStripe("Stripe Publish Key")
    
    ==> wrap Payment component inside <Elements>
      <Elements stripe={promise}>
        <Payment />
      </Elements>
  
3. In Payment component:
  import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
  
  inside function Payment {...}
    const [disabled, setDisabled] = useState(true);
    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();
    
    const handleChange = (e) => {
      setError(e.error ? e.error.message : "");
      setDisabled(e.empty);
    };
    
    <div className="payment__detail">
        <form onSubmit={handleSubmit}>
          <CardElement onChange={handleChange} />
          <div className="payment__priceContainer">
            <CurrencyFormat
              renderText={(value) => (
                <>
                  <p>
                    Total: <strong>{`${value}`}</strong>
                  </p>
                </>
              )}
              decimalScale={2}
              value={getBasketTotal(basket)}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
            <button disabled={processing || disabled || succeeded}>
              <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
            </button>
          </div>
          {error && <div>{error.message}</div>}
        </form>
      </div>
 
 4. Create axios.js file  ---> npm i axios
     import axios from 'axios'

      const instance = axios.create({
          baseURL: "..." //API cloud function
      })

      export default instance
      
 5. inside Payment component
    const [clientSecret, setClientSecret] = useState(true);
    
    useEffect(() => {
      const getClientSecret = async () => {
        const response = await axios({
          method: "post",
          url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
        });
        setClientSecret(response.data.clientSecret);
      };
      getClientSecret();
    }, [basket]);

    const handleSubmit = async (e) => {
      e.preventDefault();
      setProcessing(true);
      const payload = await stripe
        .confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement),
          },
        })
        .then(({ paymentIntent }) => {
          setSucceeded(true);
          setError(null);
          setProcessing(false);
          history.replace("/orders");
          dispatch({
            type: "EMPTY_BASKET",
          });
          
        });
    };
    
  6. Cloud Function
    - firebase init --> Functions ... --> ESlint...: Y --> install dependencies...: Y
    - cd functions 
    - npm i express , npm i cors , npm i stripe
    const express = require('express')
    const cors = require('cors')
    const stripe = require('stripe')('sk_test_51HYyKtG3acrIAEXlEUlO57clRSnXFeTE3IdB0XZEdRZHiNJWhGfq8lxuocofuMjbsBTSmyFVUAiwlWOc2vb34NH700Quwl2A9j')
    
    //App Configuration
    const app = express()

    //Middlewares
    app.use(express.json())
    app.use(cors({ origin: true }))
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    })

    //API routes
    app.get('/', (req, res) => {
        res.status(200).send('Hello there')
    })
    
    //Listen Command
    exports.api = functions.https.onRequest(app)
    
    in terminal: firebase emulators:start --> click functions api https://localhost:50001...
    
    in API routes:
    app.post('/payments/create', async (req, res) => {
        const total = req.query.total
        const paymentIntent = await stripe.paymentIntents.create({
            amount: total,
            currency: 'usd'
        })
        res.status(201).send({
            clientSecret: paymentIntent.client_secret
        })
    })
    
10. inside axios.js: paste api Endpoint just got into baseURL
    inside Payment.js: test how payment works
    
11. Inside Payment:
      - inside handleSubmit():
          .then(({ paymentIntent }) => {
              db.collection("users")
                .doc(user?.uid)
                .collection("orders")
                .doc(paymentIntent.id)
                .set({
                  amount: paymentIntent.amount,
                  basket: basket,
                  created: paymentIntent.created,
                });
            });
 
 12. Create Orders component
    useEffect(() => {
        if (user) {
          db.collection("users")
            .doc(user?.uid)
            .collection("orders")
            .orderBy("created", "desc")
            .onSnapshot((snapshot) =>
              setOrders(
                snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
              )
            );
        } else {
          setOrders([]);
        }
      }, []);
      
13. Create OrderItem component:
     npm i moment
     <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
     
14. Deploy cloud functions
    - cut cloud fuction off
    - firebase deploy --only functions

15. Deploy app:
    - firebase deploy --only hosting
          
