const backendApiUrl = process.env.API_URL;
if (!backendApiUrl) {
    throw new Error("error with .env file (API_URL)");
}
export { backendApiUrl };
