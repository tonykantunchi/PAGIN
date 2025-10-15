from pydantic import BaseModel
from datetime import datetime

class ResultadoCreate(BaseModel):
    resultado: str   # AP, SA o SF
    color: str       # rojo, amarillo o verde
    promedio: float

class ResultadoOut(ResultadoCreate):
    id: int
    fecha: datetime

    class Config:
        orm_mode = True
