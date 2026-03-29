from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Recipe data
recipes = [
    {"id": 1, "name": "Espresso", "type": "coffee", "icon": "☕", "caffeine": 3},
    {"id": 2, "name": "Americano", "type": "coffee", "icon": "☕", "caffeine": 2},
    {"id": 3, "name": "Cappuccino", "type": "coffee", "icon": "☕", "caffeine": 2},
    {"id": 4, "name": "Latte", "type": "coffee", "icon": "☕", "caffeine": 1},
    {"id": 5, "name": "Mocha", "type": "coffee", "icon": "☕", "caffeine": 2},
    {"id": 6, "name": "Vietnamese Latte", "type": "coffee", "icon": "☕", "caffeine": 2},
    {"id": 7, "name": "Indian Filter Coffee", "type": "coffee", "icon": "☕", "caffeine": 2},
    {"id": 8, "name": "Macchiato", "type": "coffee", "icon": "☕", "caffeine": 3},
    {"id": 9, "name": "Cortado", "type": "coffee", "icon": "☕", "caffeine": 2},
    {"id": 10, "name": "Flat White", "type": "coffee", "icon": "☕", "caffeine": 2},
    {"id": 11, "name": "Matcha Latte", "type": "matcha", "icon": "🍵", "caffeine": 2},
    {"id": 12, "name": "Strawberry Matcha", "type": "matcha", "icon": "🍵", "caffeine": 2},
]

@app.route('/')
def index():
    return "Welcome to Coffee for You API"

@app.route('/api/recipes', methods=['GET'])
def get_recipes():
    return jsonify(recipes)

@app.route('/api/recipes/<int:recipe_id>', methods=['GET'])
def get_recipe(recipe_id):
    recipe = next((r for r in recipes if r['id'] == recipe_id), None)
    if recipe:
        return jsonify(recipe)
    return jsonify({"error": "Recipe not found"}), 404

if __name__ == '__main__':
    app.run(debug=True, port=5000)
