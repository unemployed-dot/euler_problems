sequenza_fibonacci = [1,2]
sequenza_fibonacci_pari = 0
i=1

while sequenza_fibonacci[i]<4000000:
    sequenza_fibonacci.append(sequenza_fibonacci[i]+sequenza_fibonacci[i-1])
    i+=1

#print(sequenza_fibonacci)

for l in range(len(sequenza_fibonacci)):
    if sequenza_fibonacci[l]%2==0:
        sequenza_fibonacci_pari=sequenza_fibonacci_pari+sequenza_fibonacci[l]


print(sequenza_fibonacci_pari)
