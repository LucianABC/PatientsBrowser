# My Patients Browser

This is a mock app to browser patients

## To run the app

### `git clone https://github.com/LucianABC/PatientsBrowser.git`

Clones this repository locally


### `npm start`
Run this script from the project's folder.
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## What did I use?

### Typescript

To me, there's no chance to go back to plain ReactJS after using TypeScript. If JS has a flaw, is being a weakly typed language and TS fixes that for you. Having all you props with their proper typing really saves a lot of debugging time and a lot of headaches as well. It helps to keep me organized.

### Zustand (state manager)

I used this library to manage the patients fetched from the API in a local store that can be accessed anywhere in the code. I update this state via a hook (*usePatients*) where I  fetched the patients on mount and trigger side effects when updating patients (refetching data so the UI stays updated). I could've  used something like React Query to manage the requests but since this is a small app with just one global state I thought it was a bit of an overkill.

### CSS modules

Since the challenge's acceptance criteria requested not to use UI libraries such as MaterialUI, I wanted to take it a step further and not use any styling libraries at all and use plain CSS. I like CSS modules because I find it's more readable than plain CSS, you can really see *where* the styles are applying and that makes it easier to debug if something breaks.


## Folder structure

### Assets

Images/SVG Icons used across the app

### Components

I only use 4 generic components across the app: 

-Button
-Card
-Modal
-TextField

I tried to mantain a cohesive styling amongst all of the components by using a color palette (in Theme).
I created the components from scratch. I made them as generic as possible even though they are only used a few times but I wanted the code to be scalable.

### Theme

Color palette

### Hooks

Hooks. There's only one hook being used here and it's *usePatients*. Here you can access the `patients` array globally across the app and update the patients on the API.

### Services

API requests to FETCH, POST DELETE and PUT patients.

### Stores

Zustand store with the patients.
