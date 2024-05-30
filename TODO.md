ADD HOVER ANIMATIONS, BORDERS TO EVERYTHING

## general
- Fix push animation
- Add images to tabs w/ animations
- make page indexing not a big if/else - pass indexes in dynamically to screens
  - allocate an index range for activities, projects, etc. you can figure this out

## content
- Project page
  - Phase
    - https://play.google.com/store/apps/details?id=com.maximilianmeiler.Phase&hl=en_US&pli=1
    - https://github.com/MaximilianMeiler/PhaseFrontend
    - https://github.com/MaximilianMeiler/PhaseBackend
  - Odsy
    - https://github.com/MaximilianMeiler/3530-Proj3
    - https://odsy.vercel.app/
  - Clubfinity
    - https://gitlab.com/ufsec/clubfinity
    - https://play.google.com/store/apps/details?id=com.ufsec.Clubfinity
    - https://apps.apple.com/tr/app/clubfinity/id1539334633
  - gpTA
    - https://devpost.com/software/gpta#updates
    - https://github.com/MaximilianMeiler/ShellHacks2023
  - Climbr
    - https://youtu.be/dEX-HEMpfVE
    - https://devpost.com/software/climbr-ou9zmg#updates
    - https://github.com/MaximilianMeiler/SwampHacks2023
  - Portfolio
- Contact page (use grid?)

### redoing animations, how should things work?

#### pop
- transfer down left
- decrement left index
- show left instantly
- decrement back index

#### push
- increment back index
- hide left instantly
- increment left index
- transfer up left