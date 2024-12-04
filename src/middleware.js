// middleware.js
import { middleware } from './app/api/hello/route';

export { middleware };

// Match only the `/api/hello` route
export const config = {
  matcher: '/api/hello',
};
