// import * as Sentry from "@sentry/node";
// import { nodeProfilingIntegration } from "@sentry/profiling-node";

// Sentry.init({
//   dsn: "https://2a41f491bc3656031a68eb5ed7895e6e@o4509736204828672.ingest.us.sentry.io/4509736211382272",
//   integrations: [
//     nodeProfilingIntegration()
//     Sentry.mongooseIntegration(),
//   ],
//   tracesSampleRate: 1.0,
//   sendDefaultPii: true,
// });



import * as Sentry from "@sentry/node";
import { nodeProfilingIntegration } from "@sentry/profiling-node";
import mongoose from "mongoose";

Sentry.init({
  dsn: "https://2a41f491bc3656031a68eb5ed7895e6e@o4509736204828672.ingest.us.sentry.io/4509736211382272",
  integrations: [
    nodeProfilingIntegration(),
  ],
  // tracesSampleRate: 1.0,
  sendDefaultPii: true,
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB Connection Error:", err);
  Sentry.captureException(err);
});



