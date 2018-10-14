# Getting started:

1.) Make sure [Git](https://git-scm.com/downloads) and [NodeJS](https://nodejs.org/en/) are installed

2.) Open command line, 'cd' to your home directory and then clone this app:
```
git clone https://github.com/Anshul2166/Microsoft-Codefundo
```
3.) 'cd' into newly cloned app directory
```
cd codefundo
```

4.) Install any dependencies required by app
```
npm install
```
5.) Run app
```
npm start
```
6.) Go to http://localhost:3000 to view

# CodeFundo Idea

We plan to create a web app with a prediction system on tornado (implemented using deep learning), which can also send a warning to the people who may be or are in danger via notifications or alerts. If the users are offline because the internet is not accessible by people of that area then we will try to notify the local authorities and other concerned bodies via mail. We will create a separate curated list and ensure that the mailing list does not miss any area. 

## The main advantages of using this approach are : 
- Since the formation of a low pressure is taken into account, we can detect the formation of a tornado in many early stages so the citizens can be notified much earlier.
- The prediction will be done in real time and will give probabilities of the development of a tornado. If the tornado is inevitable, then we can directly issue the alerts to the govt. bodies and people.
- The web app will also use maps to predict the best route to help them in escape the disaster.
- If you are stuck in a critical zone for than 20 minutes, the app can call SOS services and notify them of your location. 
- The dashboard of the app will also give the real-time feed of the storm, along with analysis in form of graphs and charts and will notify all the other users like volunteers, responders or others with required information using the app which will be beneficial in working as a team to fight the disaster.

## Tornado Prediction using deep learning

- The dataset contains 60000 instances and 20 variables 
- Our NN consists of input, output and 1 hidden layer. We are using ReLU as the activation function of the hidden layer and softmax for our output layer. We will also use Dropout — simple way to reduce overfitting during the training of our network
-  Randomly initialize the weights and biases considering their proper dimensions.
  
### Training
In order for our model to learn, we will define what is bad and try to minimize it using the cost function.We will use Adam which is a type of gradient descent optimization algorithm which essentially tries as hard as he can to find proper weights and biases for our network via minimizing the cost function that we specified above.


### Future Scope
-We can extend the above idea to other areas like the flood or other disasters which can be prepared for in advance. We aim to centralize all the data that is coming from various sources and then process it to some useful information that would be of use to the people there on the ground, be it volunteers etc.
-We can extend the AI to be more responsive to several other issues and also try to make it more useful in several stages of disasters:- before, in disaster, and after the disaster. This would help to gather more and more information and would mean better help in relief work.
