import React from "react";

export const Room = ({ value, updateFormData }) => {
    const handleRoomChange = (e) => {
        updateFormData("room", e.target.value);
    };

    return (
        <div>
            <h2>which room did you stay in?</h2>
            <select value={value} onChange={handleRoomChange}>
                <option value="">Select a room</option>
                <option value="Superior Suite">Superior Suite</option>
                <option value="Deluxe Room">Deluxe Room</option>
                <option value="Superior Room">Superior Room</option>
                <option value="Dubble Room">Dubble Room</option>
                <option value="Single Room">Single Room</option>
            </select>
        </div>
    );
};
