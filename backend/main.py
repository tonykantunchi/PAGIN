from fastapi import FastAPI, Depends
from typing import List
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware

from database import SessionLocal, engine, Base
import models
import schemas
import crud

# Crear tablas si no existen
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Ilarri API")

# Permitir peticiones desde el frontend
origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependencia de la sesión
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/resultados/", response_model=schemas.ResultadoOut)
def create_resultado(resultado: schemas.ResultadoCreate, db: Session = Depends(get_db)):
    return crud.create_result(db, resultado)

@app.get("/resultados/", response_model=List[schemas.ResultadoOut])
def list_resultados(db: Session = Depends(get_db)):
    return crud.list_results(db)
