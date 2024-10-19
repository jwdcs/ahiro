from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.utils import secure_filename
from PyPDF2 import PdfReader
import docx
import openai
from dotenv import load_dotenv
import os

app = Flask(__name__)
CORS(app)

load_dotenv()  # Load environment variables from .env file
openai.api_key = os.getenv('OPENAI_API_KEY')

# Configure allowed extensions and maximum content length
ALLOWED_EXTENSIONS = {'pdf', 'docx', 'txt'}
MAX_CONTENT_LENGTH = 5 * 1024 * 1024  # 5 MB

app.config['MAX_CONTENT_LENGTH'] = MAX_CONTENT_LENGTH

def allowed_file(filename):
    return (
        '.' in filename and
        filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS
    )

@app.route('/api/upload', methods=['POST'])
def upload_resume():
    if 'resume' not in request.files:
        return jsonify({'error': 'No file part in the request'}), 400

    file = request.files['resume']

    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    if file and allowed_file(file.filename):
        try:
            text_content = extract_text_from_file(file)
        except Exception as e:
            return jsonify({'error': 'Failed to process file', 'details': str(e)}), 500

        suggestions = get_ai_suggestions(text_content)

        return jsonify({'suggestions': suggestions}), 200
    else:
        return jsonify({'error': 'Unsupported file type'}), 400

def extract_text_from_file(file):
    filename = secure_filename(file.filename)
    extension = filename.rsplit('.', 1)[1].lower()

    if extension == 'pdf':
        return extract_text_from_pdf(file)
    elif extension == 'docx':
        return extract_text_from_docx(file)
    elif extension == 'txt':
        return file.read().decode('utf-8')
    else:
        raise ValueError('Unsupported file type')

def extract_text_from_pdf(file):
    reader = PdfReader(file)
    text = ''
    for page in reader.pages:
        text += page.extract_text()
    return text

def extract_text_from_docx(file):
    doc = docx.Document(file)
    text = '\n'.join([para.text for para in doc.paragraphs])
    return text

def get_ai_suggestions(text_content):
    # Truncate text_content if necessary
    max_chars = 3000  # Adjust based on token limits
    if len(text_content) > max_chars:
        text_content = text_content[:max_chars]

    prompt = (
        "You are a professional career coach. Provide actionable feedback to improve the following resume:\n\n"
        f"{text_content}\n\n"
        "Focus on areas like achievements, skills, formatting, and clarity. Present the feedback as a numbered list."
    )

    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",  # Use gpt-3.5-turbo
            messages=[
                {"role": "system", "content": "You are an expert career advisor specialized in providing resume feedback."},
                {"role": "user", "content": prompt}
            ],
            max_tokens=500,
            temperature=0.7,
        )

        assistant_reply = response['choices'][0]['message']['content'].strip()
        suggestions = assistant_reply.split('\n')

        return suggestions

    except Exception as e:
        print(f"Error calling OpenAI API: {e}")
        return ["An error occurred while generating suggestions."]

if __name__ == '__main__':
    app.run(debug=True)
