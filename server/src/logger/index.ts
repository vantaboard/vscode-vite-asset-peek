import { RemoteConsole } from "vscode-languageserver/node";

export let console: RemoteConsole = null;
export function create(nConsole: RemoteConsole) {
  console = nConsole;
}
