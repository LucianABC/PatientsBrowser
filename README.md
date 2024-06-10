# My Patients Browser

This is a mock app to browse patients

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

I used this library to manage the patients fetched from the API in a local store that can be accessed anywhere in the code. I update this state via a hook (`usePatients`) where I  fetched the patients on mount and trigger side effects when updating patients (refetching data so the UI stays updated). I could've  used something like React Query to manage the requests but since this is a small app with just one global state I thought it was a bit of an overkill.

### CSS modules

Since the challenge's acceptance criteria requested not to use UI libraries such as MaterialUI, I wanted to take it a step further and not use any styling libraries at all and use plain CSS. I like CSS modules because I find it's more readable than plain CSS, you can really see *where* the styles are applying and that makes it easier to debug if something breaks. I could've used Sass but I tend to go overboard with the nesting and I wanted to avoid it and use specific classes that are easier to debug. 

### Notistack

This is a library to quickly display notifications.
I used it to show the success/error of the API calls.


## Folder structure

### Assets

Images/SVG Icons used across the app

### Components

I only use 4 generic components across the app: 

-Button
-Card
-Modal
-TextField

I tried to mantain a cohesive styling amongst all of the components by using a color palette (in Theme). Not sure if you noticed, but the App styling was *inspired* by Light It's web. 
I created the components from scratch. I made them as generic as possible even though they are only used a few times but I wanted the code to be scalable.

### Theme

Color palette

### Hooks

Hooks. There's only one hook being used here and it's `usePatients`. Here you can access the `patients` array globally across the app and update the patients on the API.

### Services

API requests to FETCH, POST DELETE and PUT patients.

### Stores

Zustand store with the patients.


## Final Thoughts

    Given the little time I had, I wasn't able to do all of the things I'd wanted to and there's a couple of things that I would've done differently in retrospective.
    The Cards Open styling and animation was a bit more time consuming than expected and I over complicated it. I know there's a simpler more efficient way to do it but I lost too much time with it and once I got it to look the way I wanted to, it was too late to go back. I'm also aware that the behaviour is not exactly the one requested, since there should be a button or icon to expand the Cards onClick and these expand on hover. Again, got a little carried over with the animations work and lost too much time and wanted to move forward.

    I'm pretty sure I could've avoided using Zustand and just used the `usePatient` store, but I wanted to showcase an example of an state management library I use.