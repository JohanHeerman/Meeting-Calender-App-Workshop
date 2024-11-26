import { useState } from "react";

function MeetingForm({ onAddMeeting}) {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const handleSummit = (e) => {
        e.preventDefault();
        onAddMeeting({title,date,time});
        setTitle("");
        setDate("");
        setTime("");
    
    };
    return (
        <form onSubmit={handleSummit}>
            <input
            type="text"
            placeholder="Meeting title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
            <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            />
            <input 
            type="time" 
            value={time} 
            onChange={(e) => setTime(e.target.value)} 
            />
            <button type="submit">Add Meeting</button>
        </form>
    )
}