from sqlalchemy.orm import Session
import models
import schemas

def create_result(db: Session, resultado: schemas.ResultadoCreate):
    db_result = models.Resultado(
        resultado=resultado.resultado,
        color=resultado.color,
        promedio=resultado.promedio
    )
    db.add(db_result)
    db.commit()
    db.refresh(db_result)
    return db_result

def list_results(db: Session, limit: int = 100):
    return db.query(models.Resultado).order_by(models.Resultado.fecha.desc()).limit(limit).all()
