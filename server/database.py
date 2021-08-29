from sqlmodel import SQLModel, create_engine
# from models import cat_model

sqlite_file_name = "cats.db"
sqlite_url = f"sqlite:///{sqlite_file_name}"

engine = create_engine(sqlite_url)
