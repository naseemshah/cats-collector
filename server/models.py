from typing import List, Optional

from sqlmodel import Field, Relationship, SQLModel


class Cats(SQLModel, table=True):
    position: int = Field(default=None, primary_key=True)
    type: str
    title: str
    imageUrl: str
