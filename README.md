# Garuda Academy Website Frontend

## Setting up environment variables

### Basics

- For `development` environment create `.env`, for `production` environment create `.env.production` file in the root of your application.

- `.env` will be used when you use `npm start` and `.env.production` will be used when you use `npm run build`.

- You must add all the properties from the example! Even if it's an empty string because an unset property becomes `undefined`!

### Example .env file
```
REACT_APP_STRIPE_LIVE_KEY=
REACT_APP_STRIPE_PAYMENT_INTENT_API=
REACT_APP_STRIPE_PAYMENT_INTENT_API_POSTFIX=
REACT_APP_BACK4APP_API_KEY=
REACT_APP_BACK4APP_API_ID=
```

## Course Card Documentation

### Basics

- All properties are optional, the card is completely modular.

- When you are adding a youtube link, you should add only the ID. Everything else will be filled by the component and itt will be autoplayed by `?autoplay=1` uri ending.

### Neccessary props

1. cardId
2. title
3. video (youtubeId, title, thumbnailCssId)
4. img (cssId)
5. classLength
6. classSchedule
7. ageGroup
8. groupSize
9. requirements
10. thematics
11. effects
12. others
13. price
14. highlightedInfo
15. course (name, amount, currency)

### Empty example component with all properties

```
<CourseCard 
  cardId=""
  title=""
  video={{
    url: "",
    title: "",
    thumbnailCssId: ""
  }}
  img={{
    cssId: ""
  }}
  classLength=""
  classSchedule=""
  ageGroup=""
  groupSize=""
  requirements=""
  thematics=''
  effects=''
  others=""
  price=""
  highlightedInfo=""
  course={{
    name: "",
    currency: "",
    amount: 0
  }} />
```

## Garuda Modal Documentation

### Basics

- Garuda modal had been implemented in **Modal.js**.

- The modal at the moment is only able to show forms. 

### Reducers and Actions

- By default the modal is closed. The state of the modal is stored in 
store under `store.modalState`. The modalState object has only one property
`opened` that can be `true` or `false`. You can find it in the corresponding
reducer called **ChooseCourseReducer.js**.

- For opening and closing the modal you can use `openModal` and `closeModal`
actions in **ModalStateActions.js**.

- The chosen course is kept in store under `store.chosenCourse`. The 
chosenCourse object must have a `currency`, an `amount` and a `name` property.
You can set the chosenCourse object through `chooseCourse` function in
**CourseActions.js** and the **ChooseCourseReducer.js** responsibility
to dispatch it to store.

- When you are closing the modal it has to drop all create responses.
(The responses of the backend, when saving a step). It is handled by
`dropCreateResponses()` action from **SignUpActions.js**. (Next point 
explains why)

- The forms are stored in the **forms** directory. Every form passing you
to the next one if there is a success response from the backend 
(`fetched && !error`). 

- The values of the form inputs are placed into the store and 
automatically loaded into the html page after reopening the modal. 
(for multiple kids it's already filled). It can be reached in 
`store.signUpInformation`. You can check that the form had been filled
before by checking `contactInfoFilled`, `participantInfoFilled` or 
`billingInfoFilled` property. These properties can be `true` or `false`.
You can see the full structure in **SignUpInformationReducer.js**.

- The functions for adding form state to store can be found in 
**SignUpActions.js**.

- All actions to save the state of the forms to backend is stored in 
**SignUpActions.js** with function name starting with `create`.

- All the reducers for the `create` actions has the following naming
convention **Create...js**. They all have a response object. The
response object usually contains an `objectId` and an `updatedAt`
property.

### Constants

- The forms are stored in **SignUpSteps.js**. Each element of the list
represents one step of the modal. They will be rendered in the modal in
the same order! Each object has a `title` and a `form` property.

- The error messages for the forms can be found in 
**ContactInformationFormErrorMessages.js**,
**ParticipantInformationFormErrorMessages.js**,
**BillingInformationFormErrorMessages.js**,
**CreateActionsErrorMessages.js** => for unsuccessful backend save

- For editing the message after successful application (and payment)
just open **FormSuccessMessages.js**.

- The titles of the forms (that are show in the header next to the close
button), can be found in **FormTitleConstants.js**, and imported into
**SignUpSteps.js**.

### Css
- The `z-index` of the modal is `1031`. You can set it in **modal.css** under
`.garuda-modal` class. The reason behind it is that bootstrap's `fixed-bottom`
class has a `z-index` of `1030`.

- Every element can close the modal that is inside the `garuda-modal` div
and has a `modal-closer` class.

## How to use Garuda Modal

1. import **Modal.js**

2. place it in your page like in the below example. This way you force the modal
to start from step 1 and check that you did choose course.
```
{ this.props.modalState.opened ? <Modal /> : null }
```

3. Create an event that will trigger the modal to open. This event have to
contain two action calls:
```
handleCourseClick = (course) => {
  this.props._chooseCourse(course);
  this.props._openModal();
};
```

## Stripe Payment Documentation

### Basics

- **PaymentFormContainer.js** is a container that creates a Stripe form with the public key that had been set in environment variables. (todo: add anchor here). This class doesn't contains the actual form with the credit card credentials, only sets the public key and then injecting the form with the card credentials.

- **PaymentForm.js** is the form that contains the credit card credentials. When it gets mounted it is creating a payment intent by our API that contains the secret key. This class's responsibility is to confirm the payment intent, and handling the stripe result. In case of an error response (when the response has an `error` attribute), it will show an alert with the Hungarian translation of the error message. If the error doesn't have a translation it will show the original english one. If you have a success response (response with a `paymentIntent` attribute) it will show only an `alert-success` div that the payment was successful. If for some reason we get back a success response with a status attribute (`response.paymentIntent.status`) that's value is not `succeeded` we send the response to our backend for analysis and show an `alert-warning` that the payment was probably successful but we will get in touch in the next 24 hours.

### Reducers and actions

- **StripePaymentAction.js** contains the function that creates a payment intent with our API (that contains the secret key). It needs a `paymentDetails` object that has to contain a `currency` and an `amount` attribute.

- **PaymentFailureActions.js** contains the function that sends Stripe response for analysis if it has `response.paymentIntent.status` attribute but it's value is not `succeeded`. It sends the application's `objectId` (from back4app) and the full Stripe response.

## How to use Stripe Payment

1. Set up environment variables with stripe keys and api urls. (todo: add anchor here)

2. You must have a `chosenCourse` object in store. (todo: add anchor here)

## Alert messages

- TODO: fill it

## Services in the App

- **FormatNumberService.js** has two nice features. The first is made by
`addSpacesToNumber` function, and it's job is to format a number to have
separation spaces (ex: 10000 -> 10 000). You can pass the number in a
Number or String type. The second is `calculatePercentage`. This function 
requires an `originalNumber` (in any parseable type), and a `percentage`
(Number) parameter.

- **ReferenceCreatorService.js**: This service had been made mainly for
creating bank transfer references for a payment. By calling 
`generateReference` method you can get rid of all hungarian special 
letters and replace it with an english one, and changing all spaces into
a hypen. The passed string will be converted to lower case letters as well.
(example: Molnár Manó -> molnar-mano).

## Globally usuable CSS

- TODO: fill it

## Other conventions.
### Import order:
1. React
2. React libs
3. External libs
4. Components
5. Actions
6. Services
7. Factories
8. Constants
9. Images
10. CSS

## How to run the app:

- set up environment variables

- for local development use `npm start`

- for deployment use `npm run build`
