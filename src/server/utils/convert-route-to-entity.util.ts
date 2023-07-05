const mapping: Record<string, string> = {
  contents: 'content',
  studios: 'studio',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
