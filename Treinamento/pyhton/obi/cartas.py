cartas_str = input().split()
cartas = [int(carta) for carta in cartas_str]

for carta in cartas:
    if carta < 1 or carta > 13:
        exit()

if cartas == sorted(cartas):
    print('C')
elif cartas == sorted(cartas, reverse=True):
    print('D')
else:
    print('N')

