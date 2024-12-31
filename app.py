"""
from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit-form', methods=['POST'])
def submit_form():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    print(f"Name: {name}, Email: {email}, Message: {message}")

    return jsonify({"message": "Form submitted successfully!"}), 200

if __name__ == '__main__':
    app.run(debug=True)
"""