from flask import Flask,request
import time

app = Flask(__name__)

@app.route('/Testing')
def get_current_time():
    return{'time':time.time()}

@app.route('/getexample', methods = ['POST'])
def prinas():
    result = request.json
    print(result)
    return {'result':'holiwis'+result}