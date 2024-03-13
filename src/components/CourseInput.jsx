import { useState } from "react";

const courses = ["Bouldering", "Top rope climbing", "Sport climbing", "Trad climbing"];

export const CourseInput = () => {
  const [course, setCourse] = useState("");

  return (
    <>
      <fieldset className="form-area">
        <legend>Which course did you take?</legend>
        {courses.map((group) => (
          <label className={`form-area radio-options ${course === group ? "selected" : ""}`} key={group}>
            <input
              type="radio"
              value={group}
              name="course"
              onChange={(event) => setCourse(event.target.value)}
              checked={course === group}
            />
            {group}
          </label>
        ))}
      </fieldset>
    </>
  );
};
