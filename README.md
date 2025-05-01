AI Health Advisor is a beginner-friendly, intelligent web application that predicts possible diseases based on user-entered symptoms. This project was developed as part of my personal learning journey during my first year of B.E. Computer Science and Engineering. It aims to combine healthcare awareness with the basics of machine learning and web development.

The main purpose of this application is to give users a rough idea of what illness their symptoms may relate to, and to offer basic health tips such as treatment options, severity level, self-care, and whether a doctor's consultation is needed. It helps raise health awareness using simple technology tools.

The application is built using Python for logic and Flask as the web framework. The machine learning model is trained on a structured dataset containing various symptoms and their corresponding diseases. Once symptoms are entered, the system vectorizes the input using CountVectorizer, then predicts the disease using a trained classification model.

The model is saved using Pickle (`model.pkl`) and works alongside a vectorizer file (`vectorizer.pkl`). The frontend is designed using HTML and CSS for simplicity and clarity, making the app easy for anyone to use.

As a first-year student, this project gave me hands-on experience in combining data science with real-world problems. I learned how to train ML models, build web applications, and structure a project from scratch.

This project is not meant to replace medical advice but to encourage users to take early action and consult professionals. It reflects my curiosity and commitment to exploring AI in health from the very beginning of my academic journey.
