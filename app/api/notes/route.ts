import getConfig from "next/config";
const { serverRuntimeConfig } = getConfig();

export async function GET() {
    return Response.json({ NOTES: serverRuntimeConfig?.NOTES });
  }