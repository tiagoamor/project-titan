import { getStore } from "@netlify/blobs";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json"
};

export default async (req) => {
  if (req.method === "OPTIONS") return new Response("", { headers: CORS });
  const url = new URL(req.url);
  const code = (url.searchParams.get("code") || "").trim();
  if (code.length < 6)
    return new Response(JSON.stringify({ error: "code" }), { status: 400, headers: CORS });

  const store = getStore("titan");
  const key = "u_" + code;

  if (req.method === "GET") {
    const data = await store.get(key, { type: "json" });
    return new Response(JSON.stringify(data ?? null), { headers: CORS });
  }
  if (req.method === "POST") {
    let body;
    try { body = await req.json(); }
    catch { return new Response(JSON.stringify({ error: "json" }), { status: 400, headers: CORS }); }
    await store.setJSON(key, body);
    return new Response(JSON.stringify({ ok: true }), { headers: CORS });
  }
  return new Response(JSON.stringify({ error: "method" }), { status: 405, headers: CORS });
};
