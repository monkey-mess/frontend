import { getToken } from "@/shared/cookies";
import { mapJSONtoProfile } from "@/entities/profile";
import { backendApiUrl } from "../../config";

export async function GET() {
    const accessToken = await getToken("access");
    if (!accessToken) {
        return new Response(null, { status: 401 });
    }
    const response = await fetch(backendApiUrl + "/profile/me", {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    const profileJson: JSON = await response.json();
    const profile = mapJSONtoProfile(profileJson);
    if (!profile) return new Response("Error with profile recieving", { status: 500 });

    return new Response(JSON.stringify(profileJson), { status: 202 });
}
