export const ROUTES = {
    HOME: "/",
    FAQ: "/faq",
    SINGLE_BOOK: {
      STATIC: "/book/:bookId",
      DYNAMIC: (bookId) => `/book/${bookId}`,
    },
  };
  