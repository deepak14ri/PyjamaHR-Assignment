## Getting Started

Follow these steps to set up and start the project.

### Prerequisites

Make sure you have the following installed:
- Node.js (LTS version recommended)
- npm or yarn (npm is bundled with Node.js)

### Installation

1. **Clone the repository**

```sh
git clone https://github.com/deepak14ri/PyjamaHR-Assignment.git
cd PyjamaHR-Assignment

# What I have done in this assignment?

# CreateArea Component

The `CreateArea` component in this project provides a user interface for creating and editing notes with various features such as image uploads and background color customization.

## Features and Functionalities

### Note Interface
- **Description**: Defines the structure of a note with the following properties:
  - `title`: The title of the note.
  - `content`: The content of the note.
  - `pinned`: Boolean indicating whether the note is pinned.
  - `image`: URL or base64 encoded string of the image.
  - `backgroundColor`: The background color of the note.

### State Management
- **Description**: Uses `useState` to manage the component's local state:
  - `note`: Object representing the current note being edited or created.
  - `isExpanded`: Boolean indicating whether the note input area is expanded.
  - `isEditModalOpen`: Boolean indicating whether the edit modal is open.
  - `currentNoteIndex`: Index of the note currently being edited.

### Redux Integration
- **Description**: Uses `useDispatch` to dispatch actions to the Redux store and `useSelector` to select notes from the store.

### Handle Change
- **Description**: Updates the note state when the input fields for `title` or `content` change.

### Handle Expanded
- **Description**: Expands the note input area when the textarea is clicked.

### Submit Button
- **Description**: Handles the submission of the note:
  - Dispatches an `addNote` action to add the new note to the Redux store.
  - Resets the note state and collapses the input area after submission.

### Handle Image Change
- **Description**: Processes the uploaded image file:
  - Reads the file using a `FileReader` and updates the note state with the image data.

### Handle Background Color Change
- **Description**: Updates the note state with the selected background color.

### Handle Edit Save
- **Description**: Saves the edited note:
  - Updates the note state with the new values while retaining the pinned state.
  - Dispatches an `updateNote` action to update the note in the Redux store.
  - Resets the `currentNoteIndex` and closes the edit modal after saving.

### Form and Input Elements
- **Description**: Renders the form with input fields for `title` and `content`:
  - Displays the image if it exists.
  - Provides file input for image upload and color input for background color selection.

### CSS Classes
- **Description**: Applies CSS classes for styling the form and input elements:
  - Ensures that the image width is constrained to 200px with auto height for maintaining aspect ratio.

## Summary of Added Features
1. **Note Interface**: Ensures the note object has a defined structure.
2. **State Management**: Manages the state locally within the component.
3. **Redux Integration**: Connects the component to the Redux store for state management.
4. **Handle Change**: Handles input changes for title and content.
5. **Handle Expanded**: Expands the note input area when interacted with.
6. **Submit Button**: Adds a new note and resets the input fields.
7. **Handle Image Change**: Processes the image file and updates the note state.
8. **Handle Background Color Change**: Updates the note state with the chosen background color.
9. **Handle Edit Save**: Updates the note details and dispatches the update action.
10. **Form and Input Elements**: Renders the form and input fields with necessary attributes and event handlers.
11. **CSS Classes**: Applies styles to ensure proper layout and responsiveness.

## Usage

To use the `CreateArea` component, import it into your React application and render it within your desired component or page.

```jsx
import CreateArea from './components/CreateArea';

function App() {
  return (
    <div className="App">
      <CreateArea />
    </div>
  );
}

export default App;
