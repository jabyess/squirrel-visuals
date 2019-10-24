from flask import Flask, render_template
import os
import psycopg2

app = Flask(__name__)

BASE_DIR = os.path.abspath(os.path.dirname(__file__))

conn = psycopg2.connect("dbname=jabyess user=jabyess")
@app.route('/')
def index(name=None):
    return render_template("index.html", name=name)

@app.route('/markers/')
def get_markers():
    cur = conn.cursor()
    cur.execute("SELECT x, y FROM squirrels LIMIT 25;")
    result = cur.fetchone()
    print(result)
    return result



