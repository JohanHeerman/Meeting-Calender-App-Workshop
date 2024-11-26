import React, { useState } from "react";

function App() {
    const [meetings, setMeeting] = useState([]);
    const addMeeting = (newMeeting) => {
        setMeetings([meetings, newMeeting])
    };
    return(
        <div>
            <h1>Meeting Calender</h1>
            <MeetingForm onAddMeeting={addMeeting} />
            <MeetingList meetings ={meetings} />
        </div>
    )
}

export default App;