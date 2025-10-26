import Chatting from "@/pages/chatting/ui/Chatting";

import { createApi } from "@reduxjs/toolkit/query";

export default async function ChattingSlug({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const slug = await params;

    // console.log(slug.slug);
    return (
        <>
            <div className="app">
                <Chatting />
            </div>
        </>
    );
}
