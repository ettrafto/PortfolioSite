# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Cal.com Consult Onboarding (Zero-DB)

This adds a minimal, production-ready Cal.com integration:

- Frontend: `/consult` (Cal embed), `/admin/bookings` (password-protected admin list)
- Backend: Express webhook receiver and bookings proxy (no database)

### Environment Variables

Frontend (CRA):

- `REACT_APP_CAL_EVENT_URL` — your Cal.com event link

Backend (`server/.env`):

- `PORT`, `NODE_ENV`
- `CAL_API_BASE`, `CAL_API_KEY`
- `WEBHOOK_SHARED_SECRET`
- `ADMIN_SHARED_PASSWORD`
- optional SMTP + Slack vars

### Cal.com Setup

1. Create an Event Type and add intake questions.
2. Copy your event URL and set `REACT_APP_CAL_EVENT_URL`.
3. Create a Webhook in Cal.com → URL: `https://YOUR_DOMAIN/api/cal/webhook`.
   - Add custom header: `x-webhook-secret: <WEBHOOK_SHARED_SECRET>`.

### Hostinger Deploy

- Client: build CRA `npm run build` and serve the `build` folder.
- Server: set up Node app in hPanel in `/server` directory with `npm start`.
- Configure all env vars in hPanel.

### End-to-End Test Checklist

- Open `/consult`, book a slot.
- Confirm Cal.com email/calendar invite.
- Check server logs for webhook receipt.
- If Slack/email configured, confirm alert.
- Open `/admin/bookings`, enter admin password, load 30-day window. See booking.
- Reschedule/cancel in Cal.com → webhook fires; Admin reflects changes on reload.