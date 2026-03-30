#1
numVar = 0
sumVar = 0
if upper_bound < 0:
    upper_bound +=1
    
for numVar in range(lower_bound, upper_bound, 1):
    sumVar += numVar 
sumVar += upper_bound
print(f'exercise 1: {sumVar}')    

#2
endpointVar = starting_number + n + 1
for loopVar in range(starting_number, endpointVar, 1):
    if(loopVar % 5 == 0 and loopVar % 7 == 0):
        print(f'exercise 2: {loopVar}')
    else:
        continue   
    loopVar+=1

#3
sumVar = 0
counter = 0
while counter < n_fibo:
    sumVar = fibo_a + fibo_b
    txt = f"exercise 3: {sumVar}"
    print(txt)
    fibo_a = fibo_b
    fibo_b = sumVar
    counter+=1