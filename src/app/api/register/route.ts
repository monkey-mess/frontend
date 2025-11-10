import { backendApiUrl } from "../config";

export async function POST(req: Request, res: Response) {
    const data = await req.json();
    const newBody: BodyInit = data;
    const response = await fetch(backendApiUrl + "/register", {
        method: "POST",
        body: JSON.stringify(newBody),
        headers: { "Content-Type": "application/json" },
    });

    const responseJson = await response.json();
    console.log(responseJson);

    return response;
}
