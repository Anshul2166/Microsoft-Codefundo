# CodeFundo Idea

We plan to create a web app with a prediction system on tornado (implemeted using deep learning), which can also send warning to the people who maybe or are in danger via notifications or alerts . If the users are offline because internet is not accessible by people of that area then we will try to notify the local authorities and other concerned bodies via mail. We will create a separate curated list and ensure that the mailing list not miss any area. 

## The main advantages of using this approach are : 
- Since the formation of a low pressure is taken into account, we can detect the formation of a tornado in much early stages so the citizens can be notified much earlier.
- The prediction will be done in real time and will give probabilities of the development of a tornado. If the probability of tornado is above a certain threshold meaning the tornado is inevitable, then we can directly issue te alerts to the govt. bodies and people.
- The web app will also use maps to predict the best route to help them in escape the disaster.
- If you are stuck in a critical zone for than 20 minutes, the app can call SOS services and notify them with your location. 
- The dashboard of the app will also give real time feed of the storm, along with analysis in form of graphs and charts and will notify all the other users like volunteers, responders or others with required information using the app which will be beneficial in working as a team to fight the disaster.

## Tornado Prediction using deep learning

- The dataset contains 60000 instances and 20 variables 
- Our NN consists of input, output and 1 hidden layer. We are using ReLU as activation function of the hidden layer and softmax for our output layer. As an additional bonus we will use Dropout — simple way to reduce overfitting during the training of our network
-  Randomly initialize the weights and biases considering their proper dimensions.
  
We will train our model for 50,000 epochs (training steps) with a batch size of 32. That is, at each step, we will train our NN using 32 rows of our data

### Training
In order for our model to learn, we need to define what is good. Actually, we will define what is bad and try to minimize it using the cost function.The cost function that we are going to use is called Cross-Entropy where y is the predicted probablity of storm distribution and y’ is the ground truth. TensorFlow has a little helper function named softmax_cross_entropy_with_logits. It uses softmax as activation function for our output layer and Cross-Entropy as error function. WE will use Adam which is a type of gradient descent optimization algorithm which essentially tries as hard as he can to find proper weights and biases for our network via minimizing the cost function that we specified above.

```sh 
optimizer = tf.train.AdamOptimizer(learning_rate=0.0001).minimize(cost)
```

### Future Scope
-We can extend the above idea to other areas like flood or other disasters which can be prepared for in advance. We aim to centralize all the data that is coming from various sources and then process it to some useful information that would be of use to the people there on ground, be it volunteers, responders or the citizens who maybe in need of help. 
-We can extend the AI to be more interactive and more responsive to several other issues and also try to make it more useful in several stages of disasters:- before the disaster, in the disaster, and after the disaster. This would help to gather more and more information and would mean better help in relief work.


The project is being developed by [me](https://github.com/Anshul2166) and [Himanshu Gupta](https://github.com/him1411)
