import TelemetryReporter from "@vscode/extension-telemetry";

const INSTRUMENTATION_KEY = "7868ce95-465b-4f61-a5f9-99a12abfb3ad";

export function initializeReporter() {
  return new TelemetryReporter(INSTRUMENTATION_KEY);
}
