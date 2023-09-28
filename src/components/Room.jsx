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
                <option value="Room 1">Room 1</option>
                <option value="Room 2">Room 2</option>
                <option value="Room 3">Room 3</option>
            </select>
        </div>
    );
};
