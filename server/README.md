## Cat Cards Backend
This documentation contains all the necessary
details of backend application.  

The backend API with Starlett with uvicorn server.
Below are the steps to setup the backend server.


## Activate virtual environment

This project uses python's venv to manage
dependencies and environment.

### In windows 

If you are using `cmd`:

```
cd server
.\venv\Scripts\activate.bat
```

If you are using `Powershell` or `Windows Terminal`:

```
cd server
.\venv\Scripts\activate.psl
```

### In Mac/Linux 

```
cd server
./venv/bin/activate
```
## Install dependencies

```
pip install -r requirements.txt
```

## Run the server
Run the following command in the shell to
start a server in `localhost:8000`.
```
uvicorn server:app --reload
```