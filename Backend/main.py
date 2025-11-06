from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware
import models, schemas
from database import engine, SessionLocal


# Crear tablas si no existen
models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="API de Ilarri — Resultados Test")

# Permitir conexión con React
origins = [
    "http://localhost:3000",  # Frontend local
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependencia para obtener sesión DB
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Endpoint para registrar resultado
@app.post("/resultados", response_model=schemas.ResultadoOut)
def crear_resultado(resultado: schemas.ResultadoCreate, db: Session = Depends(get_db)):
    nuevo = models.ResultadoTest(**resultado.dict())
    db.add(nuevo)
    db.commit()
    db.refresh(nuevo)
    return nuevo

# Endpoint para obtener los últimos resultados
@app.get("/resultados", response_model=list[schemas.ResultadoOut])
def listar_resultados(db: Session = Depends(get_db)):
    resultados = db.query(models.ResultadoTest).order_by(models.ResultadoTest.fecha_registro.desc()).limit(20).all()
    return resultados
