import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
import joblib
import os

# Load the dataset
df = pd.read_csv('symptoms_disease_data.csv')

# Drop rows with any missing values
df = df.dropna()

# Combine the symptom columns into one
df['all_symptoms'] = df['symptom1'] + ' ' + df['symptom2'] + ' ' + df['symptom3']

# Feature extraction
vectorizer = CountVectorizer()
X = vectorizer.fit_transform(df['all_symptoms'])
y = df['disease']

# Train model
model = MultinomialNB()
model.fit(X, y)

# Ensure the model directory exists
os.makedirs('app/model', exist_ok=True)

# Save model and vectorizer
joblib.dump(model, 'app/model/trained_model.pkl')
joblib.dump(vectorizer, 'app/model/vectorizer.pkl')

print("✅ Model trained and saved successfully.")
