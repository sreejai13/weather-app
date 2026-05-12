import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression

# Sample data (X = hours studied, Y = marks scored)
X = np.array([1, 2, 3, 4, 5]).reshape(-1, 1)
y = np.array([2, 4, 5, 4, 5])

# Create model
model = LinearRegression()
model.fit(X, y)

# Predictions
y_pred = model.predict(X)

# Plot data points
plt.scatter(X, y, color='blue', label='Actual Data')

# Plot regression line
plt.plot(X, y_pred, color='red', label='Best Fit Line')

# Labels
plt.xlabel("X (Input)")
plt.ylabel("Y (Output)")
plt.title("Linear Regression Graph")
plt.legend()

# Show graph
plt.show()