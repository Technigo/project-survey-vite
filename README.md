# Spooky Autumn Story Survey

This group project aimed to create an engaging user experience with a spooky autumn-inspired story. We achieved this by integrating a series of questions and user responses into a cohesive, immersive story, allowing us to enhance our expertise in React state management and controlled forms.

## Project Development

We initiated the project by defining the theme, layout, and form strategy, opting for a multi-step form. We organized the project into feature-specific branches, focusing on distinct components, and later addressing the overall webpage styling. Effective communication played an important role in maintaining consistency throughout the development of the app. Collaborative discussions encompassed design choices and code-related matters, simplifying the merging process of the different branches.

The background image was created using Midjourney, a generative artificial intelligence program and service. We prompted it to generate a fairy-style illustration of a moonlit pumpkin patch. Additionally, the app's color palette was derived from this image using Adobe Color, ensuring a cohesive and harmonious visual theme.

## Challenges and Solutions

Dealing with the multi-step form presented challenges due to limited experience in state management and controlled forms. Concealing the input form until the last step while revealing the user's input within a compelling story was a primary challenge.

To address this, we created a separate component to render the story based on the form data. Integration into the parent component managing the multi-step form allowed for seamless user interaction and storytelling.

## Key Features
- **Multi-step Form**: Displayed each question on its own 'page,' enabling users to progress through the questions using a 'next choice' button. 
- **Input Types**: Utilized different input types (radio buttons, text input fields, select input) to gather user input.
- **Summary Page**: Concealed the input form at the end of the survey and presented a summary of the user's submissions in the form of an autumnal-themed story.
- **Accessibility**: Ensured accessibility by adding labels to the inputs.
- **User Experience Enhancements**: Incorporated hover effects on buttons and focused on maintaining readability of the text.

## View it live
To view the project, visit the following link:
[View it live](https://whispers-of-autumn.netlify.app/)