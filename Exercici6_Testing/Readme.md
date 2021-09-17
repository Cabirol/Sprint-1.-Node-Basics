# Exercici 6: Testing
text

## Instruccions
Per iniciar, instal·lar jest:

````
npm install jest
````
 I fer còrrer els tests amb:

 ````
 npm run test
 ````
 
Petit canvi per a provar el GitHub deskop.

Segon petit canvi per a provar el commit des de visual studio.


## Usage

Below is another example of displaying
````python
import csv

with open("sample.csv","r") as csvinput: # read input csv file
    reader = csv.reader(csvinput) # create a reader
    for row in reader:
        print(row[0])
````