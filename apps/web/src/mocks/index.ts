async function initMocks() {
  if (process.env.NODE_ENV === "development") {
    if (typeof window === "undefined") {
      const { server } = await import("./server");
      server.listen({
        onUnhandledRequest: "bypass",
      });
    } else {
      const { worker } = await import("./browser");
      worker.start();
    }
  }
}

initMocks();

export {};
