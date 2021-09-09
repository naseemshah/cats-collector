# Cat Collector
A simple fullstack application that allows you 
to collect Cat pictures in a grid of cards.


## Features
- Ability to Drag and drop _Cat Cards_ to reorder 
pictures.
- Auto saves every 5 seconds if any changes has been made.
- View enlarged view. 

![Cats Collector](./preview.gif)


## Tech Stack

- Frontend: Reach.js
- Backend: Starlett
- Database: Sqlite

## Folder Structure

```project-folder/
├─ server/
├─ frontend/
```
Has 2 main folders: 
- `server` which has a starlett(`python`) with uvicorn server.
- `frontend` which has a React application.

# Setting Development Enviornment

## Setting up Frontend development environment.

The `frontend` project was set up using `yarn` package manager. Make sure you have you have `Node.js` and `yarn` installed.

- Navigate to `frontend` folder by: `cd frontend`.
- Install the dependencies:  `yarn install`.
- Create a .env file: 

```

REACT_APP_CATS_API_DEV=localhost:8000
REACT_APP_CATS_API_PRO=localhost:8000

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

# Production Build and Docker Container

This Project uses docker to containerise both frontend and backend applications.
Using `docker-compose` we run both of them as microservices.

## Building Frontend Image.
```
cd frontend
docker build -f Dockerfile.prod -t cats-collector-frontend:latest .
```

## Building Backend Image.
```
cd server
docker build -t cats-collector-backend:latest .
```

## Launch the application
```
cd ../
docker-compose up
```
You have sucessfully launched the fullstack in production as a microservice.

# Running Image saperately rather than using `docker-compose`.

### Run the Frontend Image
```
docker run -it -p 3000:80 --rm cats-collector-frontend:latest
```

### Run the server Image
```
docker run -it -p 8000:80 --rm cats-collector-backend:latest
```
