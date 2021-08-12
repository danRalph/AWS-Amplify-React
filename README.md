# AWS AMPLIFY REACT

An example portfolio site hosted on AWS. I originally already had an express backend for this site, but not built with Amplify. The contact form was dealt with using Node Mailer.
I decided to rebuild the backend try and get to grips with Amplify and it's CLI.

## Backend

Built using express/serverless Node through AWS Amplify, using the Amplify CLI. There is a contact form which uses an API Gateway, AWS Lambda and an Amazon DynamoDB table to store all the contacts and messages. Cognito is used for identity management (User Pools). As expected, the sites static files are served from an S3 Bucket and monitoring is provided by CloudWatch. 
I also set up and connected a custom domain using Route 53.  

## Frontend

Built with React, this is just an example portfolio project. Mainly built to use react router and try some more interesting page transiitions. The animations on the page are taken care of by GSAP. An amazing library.


![ServNodeExp](https://user-images.githubusercontent.com/64211348/129233090-5b6658f0-f27c-4b9c-ab67-f59755356596.jpg)
(An attempt at visualizing the underlying infrastructure/architecture)

