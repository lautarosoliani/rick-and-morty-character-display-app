# Jr. Advanced Front End Developer (NextJS | Reactjs) - Character Display App
![7](https://github.com/lautarosoliani/moviesReact/assets/72751465/6af8fb01-9614-46d5-a626-acd6a07c8992)

## The web has been deployed in Netlify
https://lautaro-conexa.netlify.app/

## Description
This project is a web application that utilizes the Rick and Morty API to display character information and episodes dynamically. Developed with Next.js and React.js, it features a responsive design and utilizes server-side rendering for improved performance and SEO benefits.

## Technologies Used
- **Next.js**: A React framework for server-rendered applications, which helps in achieving faster page loads and a seamless user experience.
- **React.js**: Used for building the user interface with state management and component-based architecture.
- **React Query**: Utilized for managing server state in the application, enabling efficient data fetching, caching, and synchronization. It simplifies building complex user interfaces that depend on real-time data, reducing the need for boilerplate code and improving performance.
- **Tailwind CSS**: Applied for styling the application, providing a utility-first approach that accelerates the development process.
- **Rick and Morty API**: Integrates this third-party API to fetch and display data about characters and episodes, showcasing asynchronous data fetching techniques.

## Key Features
- **Dynamic Data Fetching**: Characters and episodes are fetched in real-time from the Rick and Morty API. The use of React Query's `keepPreviousData` feature ensures that data transitions are seamless, maintaining previous page data visible while new data is being fetched, thus enhancing user experience during pagination.
- **Skeleton Screens**: Implementation of skeleton screens provides a visual placeholder while data is loading, significantly enhancing the user experience by reducing the perceived wait times and keeping the interface responsive.

## Project Screenshots
*Home page showing character cards with skeleton screens.*
![1](https://github.com/lautarosoliani/moviesReact/assets/72751465/cc79b4e4-e816-404f-8d93-9ae391d77c4b)

*Character List Page displaying paginated character cards from the Rick and Morty API. Added 'Go to Page' functionality for enhanced user navigation.*
![6](https://github.com/lautarosoliani/moviesReact/assets/72751465/40d458ba-0245-457d-9625-52e560c36f33)

*Episode Details Sections showing exclusive episodes for Character #1, shared episodes between Character #1 and Character #2, and exclusive episodes for Character #2. Implemented React Select library for character selection via dropdown or search input.*
![3](https://github.com/lautarosoliani/rick-and-morty-character-display-app/assets/72751465/c3f6a5ce-587a-4782-8629-98877b125198)

## Testing
Comprehensive testing has been conducted to ensure the reliability and functionality of the application. This includes:
- **Component Tests**: Verifying that each component renders correctly and interacts properly with user inputs.
- **Hook Tests**: Ensuring that custom hooks manage state and side effects as expected, maintaining application integrity.

## How to Run the Project
Follow these instructions to get the project up and running on your local machine.

### Prerequisites
- Node.js
- npm

### Installation
```bash
npm install

### Getting Started

First, run the development server:


```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

# For Testing
npm test

