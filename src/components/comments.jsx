import React, { useState } from "react";
import "./index.css";

export const Comment = ({ value, updateFormData }) => {
    const userComment = (e) => updateFormData("comment", e.target.value);
    return (
        <div className="commentInput">
            <h2>Do you have any comments?</h2>
            <label>Comments</label>
            <input type="text" value={value} onChange={userComment} />
        </div>
    );

};
