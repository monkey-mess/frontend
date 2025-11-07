import { cookies } from "next/headers";
import { IUser } from "@/entities/user";
import { setToken } from "../../../shared/cookies";
// import { jwtDecode } from "jwt-decode";
// import { mapJSONToUser } from "./mapJSONtoUser";

export async function POST(req: Request, res: Response) {
    const data = await req.json();
    const newBody: BodyInit = data;

    const response = await fetch("http:/localhost:8088/api/login", {
        method: "POST",
        body: JSON.stringify(newBody),
        headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
        return new Response(response.statusText, { status: response.status });
    }
    const responseJson = await response.json();

    const cookieStore = await cookies();

    const accessToken = responseJson["accessToken"];
    const refreshToken = responseJson["refreshToken"];

    // const decodedJwt = jwtDecode(accessToken);

    setToken("access", accessToken);
    setToken("refresh", refreshToken);

    return new Response(null, { status: 200 });
}
