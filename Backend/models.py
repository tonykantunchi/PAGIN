from sqlalchemy import Column, Integer, String, Numeric, Text, TIMESTAMP, func
from sqlalchemy.dialects.postgresql import UUID
import uuid
from database import Base

class ResultadoTest(Base):
    __tablename__ = "resultados_test"

    id = Column(Integer, primary_key=True, index=True)
    usuario_id = Column(UUID(as_uuid=True), default=uuid.uuid4)
    promedio = Column(Numeric(3, 2), nullable=False)
    nivel = Column(String(50), nullable=False)
    color = Column(String(20), nullable=False)
    mensaje = Column(Text, nullable=False)
    fecha_registro = Column(TIMESTAMP, server_default=func.now())
