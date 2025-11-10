import "./ChatPreview.css";
import { IChatPreview } from "../model/IChat";

export function ChatPreview({ chatPreview }: { chatPreview: IChatPreview }) {
    return (
        <div className="chat-preview">
            <div className="image"> {chatPreview.profilename[0]} </div>
            <div className="text">
                <div className="profilename"> {chatPreview.profilename}</div>
                <div className="last-message"> {chatPreview.lastMessage}</div>
            </div>
        </div>
    );
}
