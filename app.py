from flask import Flask, render_template, url_for
from dotenv import load_dotenv
import os

dotenv_path = os.path.join(os.path.dirname(__file__), os.pardir, '.flaskenv')
load_dotenv(dotenv_path)

app = Flask(__name__)

media_version = "1.1"


@app.context_processor
def inject_vars():
    return dict(media_version=media_version)


@app.route('/')
def home_page():
    return render_template("home.html")


@app.route('/about')
def about_page():
    return render_template("about.html")


@app.route('/help')
def help_page():
    return render_template("help.html")


@app.route('/cite-us')
def cite_us_page():
    return render_template("cite.html")


@app.route("/task<int:task_id>")
def task_page(task_id):
    return render_template("task.html", task_id=task_id)


if __name__ == '__main__':
    app.run()
