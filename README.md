# Cat Collector
A simple fullstack application that allows you 
to collect Cat pictures in a grid of cards.

`[Screenshot of final application. Project in progress.]`

## Features
- Ability to Drag and drop _Cat Cards_ to reorder 
pictures.
- Auto saves every 5 seconds if any changes has been made.
- View enlarged view. 

![Cats Collector](./preview.gif)

## Tech Stack

- Frontend: Reach.js
- Backend: Starlett
- Database: PostgreSQL

## Folder Structure

```project-folder/
├─ server/
├─ frontend/
```
Has 2 main folders: 
- `server` which has a starlett(`python`) with uvicorn server.
- `frontend` which has a React application.

## Setting up Frontend development environment.

The `frontend` project was set up using `yarn` package manager. Make sure you have you have `Node.js` and `yarn` installed.

- Navigate to `frontend` folder by: `cd frontend`.
- Install the dependencies:  `yarn install`.
- Create a .env file: 

```

REACT_APP_CATS_API=localhost:8000

```
- Start the development server `yarn start`.

## Setting up Backend application.

The backend API with Starlett with uvicorn server.
Below are the steps to setup the backend server.


### Activate virtual environment

This project uses python's venv to manage
dependencies and environment.

#### In windows 

If you are using `cmd`:

```
cd server
.\venv\Scripts\activate.bat
```

If you are using Powershell or Windows Terminal:

```
cd server
.\venv\Scripts\activate.ps1
```

#### In Mac/Linux 

```
cd server
./venv/bin/activate
```
### Install dependencies

```
pip install -r requirements.txt
```

### Run the server
Run the following command in the shell to
start a server in `localhost:8000`.
```
uvicorn server:app --reload
```