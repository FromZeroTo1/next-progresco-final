export const API_URL = `${process.env.APP_URL}/api`

export const getAuthUrl = (string: string) => `/auth/${string}`
export const getSolutionsUrl = (string: string) => `/solutions/${string}`
export const getTasksUrl = (string: string) => `/tasks/${string}`
