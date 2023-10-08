nomes_1 = ["Felps", "Carlos", "Will", "Bux"]
nomes_2 = ["Flávio", "Carlos", "Roni", ""]

all(nomes_1)  # Saída: True
all(nomes_2)  # Saída: False

any(nomes_1)  # Saída: True
any(nomes_2)  # Saída: True

for item in enumerate(nomes_1):
    print(item)
# Saída:
# (0, 'Felps')
# (1, 'Carlos')
# (2, 'Will')
# (3, 'Bux')

for index, item in enumerate(nomes_1):
    print(f"{index}: {item}")
# Saída:
# 0: Felps
# 1: Carlos
# 2: Will
# 3: Bux