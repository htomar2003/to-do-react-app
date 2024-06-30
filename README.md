
# Simple Todo List App

## Table of Contents

1. [Introduction](#introduction)
2. [Project Overview](#project-overview)
3. [Getting Started](#getting-started)
4. [Code Structure](#code-structure)
5. [Dependencies](#dependencies)
6. [Code Refactoring](#code-refactoring)
7. [Deployment](#deployment)
8. [Usage](#usage)
9. [License](#license)

## Introduction

Welcome to the documentation for the Simple Todo List App, a project designed to help users manage their tasks efficiently. This document provides an overview of the project, its code structure, refactoring details, clean code practices, design patterns, deployment information, and usage instructions.

## Project Overview

The Simple Todo List App is a web-based application developed to help users manage their tasks by providing a user-friendly interface for adding, editing, and deleting tasks. The app also supports task filtering based on status (All, Pending, Completed).

## Getting Started

To get started with the Simple Todo List App, follow these steps:

### Prerequisites

Make sure you have the following installed:

- Node.js and npm (Node Package Manager)
- A modern web browser (e.g., Chrome, Firefox, Safari)
- An internet connection (for fetching external dependencies)

### Installation

1. **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd todo
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

## Code Structure

The project follows a modular and organized structure to enhance readability, maintainability, and scalability. Key components include:

- **public/**: Contains the public assets and the main HTML file.
  - `index.html`: The main structure of the web page.
  - `manifest.json`: Metadata for the web app.
  - `favicon.ico`, `robots.txt`: Additional public files.
- **src/**: Contains the source code of the application.
  - **components/**: Contains React components.
    - `AddTask.js`, `DeleteTask.js`, `UpdateTask.js`, `DatePickerComponent.js`: Components for task management.
    - `App.css`: Styles for the application.
  - **images/**: Contains image assets.
  - `App.js`, `index.js`: Main application files.
  - `store.js`: State management.
- `.gitignore`: Specifies which files and directories Git should ignore.
- `package.json`, `package-lock.json`: Manage project dependencies and scripts.
- `README.md`: Project documentation.

## Dependencies

- **React**: A JavaScript library for building user interfaces.
- **React-DOM**: Serves as the entry point to the DOM and server renderers for React.
- **Redux**: A predictable state container for JavaScript apps.
- **Tailwind CSS**: Used for styling the components.
- **Daisy UI**: A CSS library for UI components.
- **Boxicons**: Icons library.
- **Google Fonts (Poppins)**: Font used for the app.

## Code Refactoring

### Code Smells Addressed:

- **Monolithic Structure**:
  - **Code Smell**: Original code had a monolithic structure, making it harder to maintain.
  - **Refactoring**: Introduced modularization through separate components and a centralized store.

- **Global Functions**:
  - **Code Smell**: Original code used global functions for event handling, reducing modularity.
  - **Refactoring**: Event handling encapsulated within specific React components.

- **HTML Manipulation in Multiple Places**:
  - **Code Smell**: Original code directly manipulated HTML in scattered locations.
  - **Refactoring**: Centralized HTML manipulation within React components for consistency.

- **Lack of Error Handling**:
  - **Code Smell**: Original code lacked proper error handling.
  - **Refactoring**: Introduced error handling within components for improved user experience and robustness.

### SOLID Violations Addressed:

- **Single Responsibility Principle (SRP)**:
  - **Violation**: Original code violated SRP by combining UI, business logic, and state handling.
  - **Refactoring**: Responsibilities separated into different components and state management in Redux, adhering to SRP.

- **Open/Closed Principle (OCP)**:
  - **Violation**: Original code was less extensible, requiring modifications for new features.
  - **Refactoring**: Designed for extensibility, allowing addition of new features without modifying existing components.

- **Dependency Inversion Principle (DIP)**:
  - **Violation**: Original code exhibited high coupling.
  - **Refactoring**: Followed DIP by depending on abstractions, enhancing flexibility and testability.

### Design Pattern Violations Addressed:

- **Observer Pattern for Event Handling**:
  - **Violation**: Original code used inline event listeners.
  - **Refactoring**: Employed Observer pattern by encapsulating event handling within React components.

- **Strategy Pattern for Task Management**:
  - **Violation**: Original code lacked a clear strategy for managing tasks.
  - **Refactoring**: Introduced separate components for different task operations, applying the Strategy pattern.

### Class Responsibilities:

- **AddTask Component**:
  - Responsible for adding new tasks.
- **DeleteTask Component**:
  - Responsible for deleting tasks.
- **UpdateTask Component**:
  - Responsible for updating tasks.
- **DatePickerComponent**:
  - Handles date input for tasks.
- **App Component**:
  - Main application component that integrates all functionalities.

## Deployment

The Simple Todo List App can be deployed using any static site hosting service. Here are the basic steps for deployment:

1. **Build the project**:
    ```bash
    npm run build
    ```
2. **Deploy the contents of the `build` directory to your static site host**.

## Usage

### Adding a Task

- Enter the task in the input field.
- Optionally, set a due date using the date input.
- Press Enter or click the "+" button to add the task.

### Editing a Task

- Click the "Edit" button on a task.
- Modify the task details.
- Click the "Check" button to save changes.

### Completing a Task

- Click the "Check" button on a task to toggle its completion status.

### Deleting a Task

- Click the "Trash" button on a task to delete it.

### Filtering Tasks

- Use the "Filter" dropdown to filter tasks by status (All, Pending, Completed).

### Clearing All Tasks

- Click the "Delete All" button to clear all tasks.

### Theme Switching

- Use the palette icon in the top-right corner to open the theme switcher.
- Select a theme from the available options.

