require('@tensorflow/tfjs-node');
const tf = require('@tensorflow/tfjs');

// Define a model for linear regression.
const model = tf.sequential();
model.add(tf.layers.dense({
  units: 1,
  inputShape: [1]
}));

// Prepare the model for training: Specify the loss and the optimizer.
model.compile({
  loss: 'meanSquaredError',
  optimizer: 'sgd'
});

// Generate some synthetic data for training.
const xs = tf.tensor([1, 2, 3, 4]);
const ys = tf.tensor([1, 3, 5, 7]);

// Train the model using the data.
model.fit(xs, ys).then(() => {
  // Use the model to do inference on a data point the model hasn't seen before:
  model.predict(tf.tensor([5])).print();
});
