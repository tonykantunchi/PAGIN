from sqlalchemy import Column, Integer, String, Numeric, DateTime
from database import Base
import datetime

class Resultado(Base):
    __tablename__ = "resultados"

    id = Column(Integer, primary_key=True, index=True)
    resultado = Column(String(10), nullable=False)   # AP, SA, SF
    color = Column(String(15), nullable=False)       # rojo, amarillo, verde
    promedio = Column(Numeric(5,2), nullable=False)
    fecha = Column(DateTime, default=datetime.datetime.utcnow)
