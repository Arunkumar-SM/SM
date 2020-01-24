print("enter the values")
num1=int(input())
num2=int(input())
num3=int(input())



if (num1 > num2) and (num1 >num3):
  print("num1 is largest" )
elif (num2 >num1) and (num2 > num3):
   print("num2 is largest")
elif(num3>num2) and (num3>num1):
   print("num3 is largest")
elif(num1==num2) and (num1!=num3):

   print("num1 and num2 are equal") 
elif(num2==num3) and (num2!=num1):
   print("num2 and num3 are equal")  
elif(num3==num1) and (num3!=num2):
  print("num3 and num1 are equal")
elif(num1==num2)and (num2==num3):
  print("num1 ,num2 and num3 equal")

