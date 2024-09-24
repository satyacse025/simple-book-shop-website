export const ROUTES = {
    HOME: "/",
    FAQ: "/faq",
    Not_Found: '*',
    SINGLE_BOOK: {
      STATIC: "/book/:bookId",
      DYNAMIC: (bookId) => `/book/${bookId}`,
    },
  };
  