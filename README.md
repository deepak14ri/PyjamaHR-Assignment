**PyjamaHR Assignment**

## Getting Started

This document guides you through setting up and running the project.

### Prerequisites

Ensure you have the following installed:

- **Node.js** (LTS version recommended): [https://nodejs.org/en](https://nodejs.org/en)
- **npm** (bundled with Node.js) or **yarn**: [https://www.npmjs.com/](https://www.npmjs.com/), [https://classic.yarnpkg.com/lang/en/docs/install/](https://classic.yarnpkg.com/lang/en/docs/install/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/deepak14ri/PyjamaHR-Assignment.git
   cd PyjamaHR-Assignment
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   This initiates the Vite development server and opens your application in the default web browser.
## Previews
# 1
<img width="943" alt="image" src="https://github.com/user-attachments/assets/158a8f5e-f032-4528-87aa-6b74dbd79ba1">

# 2
<img width="931" alt="image" src="https://github.com/user-attachments/assets/e46322dc-a7e1-432c-8e68-da3e6aaa319e">


## About the CreateArea Component

The `CreateArea` component in this project offers a user interface for creating and managing notes. It includes functionalities like image uploads and background color customization.

### Features and Functionalities

**Note Interface:**

- Defines the structure of a note with properties like:
    - `title`: The note's title.
    - `content`: The note's content.
    - `pinned`: Boolean indicating if the note is pinned.
    - `image`: URL or base64 encoded string of the image.
    - `backgroundColor`: The background color of the note.

**State Management:**

- Utilizes `useState` to manage the component's local state:
    - `note`: Object representing the current note being edited or created.
    - `isExpanded`: Boolean indicating whether the note input area is expanded.
    - `isEditModalOpen`: Boolean indicating whether the edit modal is open.
    - `currentNoteIndex`: Index of the note currently being edited.

**Redux Integration:**

- Employs `useDispatch` to dispatch actions to the Redux store.
- Utilizes `useSelector` to select notes from the store.

**Handle Change:**

- Updates the note state when the title or content input fields are modified.

**Handle Expanded:**

- Expands the note input area upon clicking the textarea.

**Submit Button:**

- Manages the submission of a note:
    - Dispatches an `addNote` action to add the new note to the Redux store.
    - Resets the note state and collapses the input area after submission.

**Handle Image Change:**

- Processes the uploaded image file:
    - Reads the file using a FileReader and updates the note state with the image data.

**Handle Background Color Change:**

- Updates the note state with the chosen background color.

**Handle Edit Save:**

- Saves the edited note:
    - Updates the note state with the new values while preserving the pinned state.
    - Dispatches an `updateNote` action to update the note in the Redux store.
    - Resets the `currentNoteIndex` and closes the edit modal after saving.

**Form and Input Elements:**

- Renders the form with input fields for title and content:
    - Displays the image if it exists.
    - Provides file input for image upload and color input for background color selection.

**CSS Classes:**

- Applies CSS classes for styling the form and input elements:
    - Ensures that the image width is limited to 200px with auto height for maintaining aspect ratio.

