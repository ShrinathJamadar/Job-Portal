import * as Sentry from "@sentry/node";
import { nodeProfilingIntegration } from "@sentry/profiling-node";

Sentry.init({
  dsn: "https://2a41f491bc3656031a68eb5ed7895e6e@o4509736204828672.ingest.us.sentry.io/4509736211382272",
  integrations: [nodeProfilingIntegration()],
  tracesSampleRate: 1.0,
  sendDefaultPii: true,
});
