# Garuda Academy Website Frontend

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

2. place it in your page like `<Modal />`

3. Create an event that will trigger the modal to open. This event have to
contain two action calls:
```
handleCourseClick = (course) => {
  this.props._chooseCourse(course);
  this.props._openModal();
};
```

## Stripe Payment Documentation

- TODO: fill it

## How to use Stripe Payment

- TODO: fill it

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

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
