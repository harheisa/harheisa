# Coding project: a program that prints the Fibonacci sequence for as many terms as user wants

# asking how many numbers of the Fibonacci sequence are to be printed

nterms = int(input("Fibonacci sequence: how many terms?"))

# The first two terms have to be 0 and 1 to make the sequence functional
n1, n2 = 0, 1
count = 0

# check the validity of the input

if nterms <= 0:
    print("Positive integers only, please.")

# if input is for only one term, return n1

elif nterms == 1:
   print("Fibonacci sequence: up to",nterms,":")
   print(n1)

# finally the actual sequence code

else:
   print("Fibonacci sequence:")
   while count < nterms:
       print(n1)
       nth = n1 + n2
       # updating the values to keep the sequence going
       n1 = n2
       n2 = nth
       count += 1