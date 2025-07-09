import pandas as pd
import joblib
import numpy as np

MODEL_PATH = "models/fraud_detector_xgb.pkl"

def score_fraud(df: pd.DataFrame, threshold: float = 0.7) -> pd.DataFrame:
    model = joblib.load(MODEL_PATH)
    usable = df.select_dtypes(include=[np.number]).fillna(0)
    preds = model.predict_proba(usable)[:, 1]
    df["fraud_score"] = preds
    df["is_fraud"] = (df["fraud_score"] >= threshold).astype(int)
    return df
