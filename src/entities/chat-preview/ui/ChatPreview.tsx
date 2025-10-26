import "./ChatPreview.css";
import { IChatPreview } from "../model/IChatPreview";

export function ChatPreview({ chatPreview }: { chatPreview: IChatPreview }) {
    return (
        <div className="chat-preview">
            <div className="image"> {chatPreview.username[0]} </div>
            <div className="text">
                <div className="username"> {chatPreview.username}</div>
                <div className="last-message"> {chatPreview.lastMessage}</div>
            </div>
        </div>
    );
}
