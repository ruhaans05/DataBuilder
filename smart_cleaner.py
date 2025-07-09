import pandas as pd

def clean_dataframe(df: pd.DataFrame) -> pd.DataFrame:
    df = df.drop_duplicates()
    df = df.dropna(how='all')
    df = df.dropna(axis=1, how='all')

    for col in df.columns:
        if df[col].dtype == 'object':
            df[col] = df[col].astype(str).str.strip().str.lower()
            try:
                df[col] = pd.to_numeric(df[col])
            except Exception:
                pass
    return df
