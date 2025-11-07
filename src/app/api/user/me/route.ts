import { getToken } from "@/shared/cookies";
import { mapJSONtoUser } from "@/entities/user";

export async function GET() {
    const accessToken = await getToken("access");

    const response = await fetch("http:/localhost:8088/api/user/me", {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    const userJson: JSON = await response.json();
    const user = mapJSONtoUser(userJson);
    // console.log(userJson);
    if (!user) return new Response("Error with user recieving", { status: 500 });

    return new Response(JSON.stringify(userJson), { status: 202 });
}
