<h1>Graf-us | Analysis Tool</h1>

Data analysis and visualisation of people for companies to pick and choose who to contact.

Analysis of companies, visits, information, revenue, etc...

Website and mobile application to be built, first mobile application using Flutter,
then edit the CSS and HTML files to build on the generated website.

<hr>

<h1>Installation</h1>

There are a multitude of required modules, please run the following to download all python modules:
```
pip install -r requirements.txt
```
And run the following inside the frontend directory to install all node modules:
```
npm install
```

<h1>Running Application</h1>

The following two commands have to be run concurrently, open two terminal windows to achieve this easily.
To run Django, use the following command inside the Graf_us directory:
```
python manage.py runserver
```
To run React, go to the frontend directory and run:
```
npm run dev
```
The React application runs on port 3000 and resides in the "frontend" directory, while Django uses port 8000 and is set up in the "api" directory.

<h1>Accesing Live Server</h1>
<pre>URL:              <a href="https://graf-us.co.uk/">graf-us.co.uk</a></br>
SSH Username:     graf_us</br>
SSH Host:         graf-us.co.uk</br>
SSH Port:         22</pre>
</br>

Access through SSH using the terminal:
```
ssh -l graf_us graf-us.co.uk
```
The current password is:
```
ComputingProject@0505
```

<hr>

Example of undirected graph with dense edges to be used as the data structure for people/companies:

<img src="https://adatis.co.uk/wp-content/uploads/Black-n-White.png">

For the visualisation, when a node is hovered over, display basic information.<br>
To be made with nodes that hold data and information about the nodes it links with.

<h2>Tools</h2>
<ul>
  <li><a href="https://docs.docker.com">Docker</a></li>
  <li>Dart (<a href="https://flutter.dev/docs">Flutter</a>) / JavaScript (<a href="https://reactjs.org">React</a>, <a href="https://d3js.org">D3.js</a>, Node.js)</li>
  <li>Python (<a href="https://docs.djangoproject.com/en/3.2/">Django</a>, <a href="https://matplotlib.org">Matplotlib</a>/<a href="https://pandas.pydata.org">Pandas</a>)</li>
  <li>GraphQL (<a href="https://graphql.org/code/#python">Graphene</a>)</li>
  <li><a href="https://www.postgresql.org">PostgreSQL</a> / <a href="http://mongodb.com">MongoDB</a></li>
  <li>RESTful APIs (unless we use a DBMS)</li>
</ul>

<a href="https://www.geeksforgeeks.org/how-to-connect-django-with-reactjs/">Connect Django with ReactJS</a>


<hr>

## Basic Structure
![alt text](Images/basic.png "Responsive Image") 

## Flowchart connection
![alt text](Images/flowdiagram.png "Flowchart Image") 
