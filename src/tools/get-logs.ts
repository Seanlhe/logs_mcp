import { McpServer } from "@modelcontextprotocol/server";
import { CallToolResult } from "@modelcontextprotocol/server";
import z from "zod";

const getLogsRequest = z.object({
    service: z.string().describe("The name of the service to get logs for."),
    env: z.enum(["dev1", "dev2", "sit1", "sit2", "sit3", "uat1", "uat2", "uat3"]),
    executionTime: z.string,
    pipelineSearchInput: z.string(),
    searchFilter: z.array(z.string())
});

const name = "get-logs";

const config = {
  title: "Get Logs Tool",
  description: "Returns logs from shopee platform based on specified criteria.",
  inputSchema: getLogsRequest,
  annotations: {
    readOnlyHint: true,
    destructiveHint: false,
  },
};

export const registerGetLogsTool = (server: McpServer) => {
  server.registerTool(name, config, async (args): Promise<CallToolResult> => {
    const request = getLogsRequest.parse(args);
    const sum = request.service + request.env;
    return {
      content: [
        {
          type: "text",
          text: `The sum of ${request.service} and ${request.env} is ${sum}.`,
          
        },
      ],
    };
  });
};