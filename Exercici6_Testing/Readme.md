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
## Nivell 1

Crea un arxiu amb les funcions sumar, restar, multiplicar i dividir dos o més operands. Testeja la correcta execució d'aquestes funcions.
Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await Nivell 1 - Exercici 1
Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await Nivell 2 - Exercici 1
Crea els tests corresponents per verificar el funcionament de l'exercici Promises & Callbacks Nivell 2 - Exercici 3
Verifica mitjançant tests l'execució de l'exercici Async / Await Nivell 2 Exercici 1 utilitzant Jest Fake Timers.

## Nivell 2

Crea un mock que comprovi les crides al constructor de la classe Persona i al seu mètode decirNombre en l'exercici Classes & Arrow Functions - Nivell 2 Exercici 2
Verifica mitjançant tests l'exercici Classes & Arrow Functions Nivell 3 - Exercici 1.

## Nivell 3

Refès l'exercici Async / Await Nivell 1 accedint a un fitxer extern JSON. Crea tests que demostrin la correcta execució de l'exercici fent un mock del fitxer JSON.
Utilitzant com a base l'exercici Async / Await Nivells 2 i 3, crea un test que forci errors de funcionament i verifiqui que l'error llançat per la funció és l'esperat.
