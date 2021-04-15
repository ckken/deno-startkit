const body = new TextEncoder().encode("Hello World");
for await (const conn of Deno.listen({ port: 3300 })) {
  (async () => {
    for await (const { respondWith } of Deno.serveHttp(conn)) {
      respondWith(new Response(body));
    }
  })();
}