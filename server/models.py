from typing import List, Optional

from sqlmodel import Field, Relationship, SQLModel


class Cats(SQLModel, table=True):
    id: str = Field(default=None, primary_key=True)
    position: int
    type: str
    title: str
    imageUrl: str
