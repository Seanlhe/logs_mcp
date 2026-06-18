import { McpServer } from "@modelcontextprotocol/server";
import { registerGetLogsTool } from "./get-logs.js";


export const registerTools = (server: McpServer) => {
  registerGetLogsTool(server);
};