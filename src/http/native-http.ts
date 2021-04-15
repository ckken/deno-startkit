const body = new TextEncoder().encode("Hello World");
for await (const conn of Deno.listen({ port: 3301 })) {
  (async () => {
    for await (const { respondWith, request } of Deno.serveHttp(conn)) {
      console.log(request.headers);
      respondWith(new Response(body));
    }
  })();
}
