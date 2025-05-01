from app import application as app
from flask import render_template, request
import joblib
import json
import os

# Load model and vectorizer
model = joblib.load('app/model/trained_model.pkl')
vectorizer = joblib.load('app/model/vectorizer.pkl')

# Load disease info JSON
with open(os.path.join('app', 'disease_info.json')) as f:
    disease_info = json.load(f)

@app.route('/')
def home():
    return render_template('index.html', prediction=None)

@app.route('/predict', methods=['POST'])
def predict():
    symptoms = request.form['symptoms']
    symptoms_vector = vectorizer.transform([symptoms])
    prediction = model.predict(symptoms_vector)[0]

    # Get additional disease information
    info = disease_info.get(prediction, {
        "severity": "Unknown",
        "see_doctor": "No recommendation available.",
        "self_care": "No self-care tips available."
    })

    return render_template('result.html', prediction=prediction, info=info)
