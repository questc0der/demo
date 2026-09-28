export function fetchBookmarks() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: "React Docs",
          url: "https://react.dev",
          note: "official docs",
        },
        {
          id: 2,
          title: "MDN",
          url: "https://developer.mozilla.org",
          note: "JS reference",
        },
        {
          id: 3,
          title: "Vite Docs",
          url: "https://vite.dev",
          note: "build tool",
        },
      ]);
    }, 1000);
  });
}
