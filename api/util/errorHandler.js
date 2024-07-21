export const handleApiError = (error, message) => {
  console.error(message, error);
  throw error;
};
