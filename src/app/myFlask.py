from flask import Flask, jsonify, request

app = Flask(__name__)
@app.route('/calculate', methods=['GET'])
def calculate():
# Example function: Calculate factorial
    number = request.args.get('number', default=1, type=int)
    result = factorial(number)
    return jsonify({'result': result})
 
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)
if __name__ == '__main__':
    app.run(debug=True, port=5000)