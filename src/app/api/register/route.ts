export async function POST(req: Request, res: Response) {
    const data = await req.json();
    const newBody: BodyInit = data;

    const response = await fetch("http:/localhost:8088/api/register", {
        method: "POST",
        body: JSON.stringify(newBody),
        headers: { "Content-Type": "application/json" },
    });

    const responseJson = await response.json();
    console.log(responseJson);

    return response;
}
