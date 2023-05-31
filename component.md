# Sand Rose App

## Data layer

### Data

- Collection of Plants
  - Plant:
    - name: string
    - image: string
    - type: string
    - size: string
    - hasFlowers: boolean
    - environment: boolean
    - user: string
    - description: string

### Modifications

- addPlant()
- removePlant()
- updatePlant()
- loadPlants()
- loadPlant()
- filterPlants()
- loginUser()
- logoutUser()
- showLoader()
- hideLoader()
- openModal()
- closeModal()

## Custom hooks

- usePlants()
- useUsers()
- useToken()
- userLocalStorage()

### Components

### Header

- Shows logo
- Renders nav bar

### Nav Bar

- Shows buttons with homePage and create
- Navigates to homePage and create

### Store

#### State

- Collection of Plants
- userState

#### PlantsReducer

- addPlant()
- removePlant()
- updatePlant()
- loadPlants()

### App

- check token, if isToken
- Receives dispatch()
- Renders Layout component

### PlantsList

- Receives a collection of Plants
- if is token renders a list with bottons to delete and modify, if is not token renders a simple list
- if there is a token renders a button with delete icon
- Create a deleteAction on click(), that calls deleteAnimal()
- Create a detailsAction on click() that navigate to detailPage
- Renders as many PlantCard as Plants are in the collection

### PlantDetail

- Receives a Plant from props
- Receives dispatch()
- handleClick()
- Shows the Plant's name inside a heading
- Show the Plant's type
- Show the Plant's size
- Show the Plant's has a flower
- Show the Plant's description
- Shows a check when the received Plant is done

### LoginForm

- HandleSubmit()
- Receives dispatch()
- Shows a input text for the username
- Shows a input text for the password
- Renders a buttons text login and homePage
- actionOnclick: handleSubmit

### PlantForm

- State:
  - Plant
- handleSubmit()
- Receives dispatch()
- Receives an optional Plant to update
- Shows an input text for the name of the Plant, URL image, type, size, has flowers, enviroment and description
- Renders a Button component
  - text: "create" / "update"
  - actionOnClick: handleSubmit

### Button

- Receives a text or an icon
- Receives an action on click
- Shows a button with the received text or a an icon
- Calls the received action when the button is clicked

### Filter

- Renders a checklist with the text outdoor or indoor, show card with type plant

### Modals

- Render a feedback positive
- Render a feedback negative
- State: ui

### loader

- uiStore
