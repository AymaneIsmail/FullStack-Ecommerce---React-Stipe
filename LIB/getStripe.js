import { loadStripe } from '@stripe/stripe-js'

let stripePromise
const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe('pk_test_51KtWVkILbmxbqlqTYsRJrSejvQuch1ja0UnQj1BmIaL0I0f3gCKHhVF4JLHc8inSOaFrEKPIIbXtwRIQSNkr8gj7002Ipx7FLb')
    }

    return stripePromise
}

export default getStripe