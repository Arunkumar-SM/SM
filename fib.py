def fibonacci():
  nterms = int(input("enter Fibonacci number"))

  n1, n2 = 0, 1


  if nterms <= 0:
   print("Please enter a positive integer")
  elif nterms == 1:
   print("Fibonacci sequence upto",nterms,":")
   print(n1)
  else:
   for i in range (nterms):
    nth = n1 + n2
    if(nterms==nth):
     print("the number is Fibonacci")
    n1 = n2
    n2 = nth
 
       
while(True):
  print("type start to enter the numer")
  print("enter stop to stop the procces")
  name=input()
  if(name=="start"):
    fibonacci()
  elif(name=="stop"):
    break
       
       


      
     

