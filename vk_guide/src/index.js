import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing/esm/browser/index.js";
import {platform, IOS} from '@vkontakte/vkui';
import {store} from "./store"
import mVKMiniAppsScrollHelper from '@vkontakte/mvk-mini-apps-scroll-helper';


if(process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: "https://21b801093187435293cfb5803aa4103a@o461731.ingest.sentry.io/6374576",
    integrations: [new BrowserTracing()],
  
    tracesSampleRate: 1.0,
  });
}

const root = document.getElementById('root');
if(platform() === IOS) {
    mVKMiniAppsScrollHelper(root); 
}
if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}
const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)
ReactDOM.render(<ReduxApp/>, root);