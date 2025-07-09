from fastapi import APIRouter, UploadFile, File
from smart_cleaner import clean_dataframe
from fraud_detector import score_fraud
from config import get_config
import pandas as pd
import io

router = APIRouter()

@router.post("/clean")
async def clean_data(file: UploadFile = File(...)):
    df = pd.read_csv(io.BytesIO(await file.read()))
    cleaned = clean_dataframe(df)
    return cleaned.to_dict(orient="records")

@router.post("/score")
async def score_data(file: UploadFile = File(...)):
    df = pd.read_csv(io.BytesIO(await file.read()))
    cleaned = clean_dataframe(df)
    config = get_config()
    scored = score_fraud(cleaned, config.get("fraud_threshold", 0.7))
    return scored.to_dict(orient="records")
