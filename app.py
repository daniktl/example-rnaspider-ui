from flask import Flask, render_template, url_for
from dotenv import load_dotenv
import os

dotenv_path = os.path.join(os.path.dirname(__file__), os.pardir, '.flaskenv')
load_dotenv(dotenv_path)

app = Flask(__name__)


@app.route('/')
def home():
    return render_template("home.html")


if __name__ == '__main__':
    app.run()
