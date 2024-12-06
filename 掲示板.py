from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def bbs():
    message = "Hello"
    return render_template("index.html", message = message)

if __name__ == "__main__":
    app.run(debug=True)

class Article(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    pub_date = db.Column(db.DateTime, nullable=False,
                                default=datetime.utcnow)
    name = db.Column(db.Text())
    article = db.Column(db.Text())
