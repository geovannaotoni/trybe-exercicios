import random

random_list = random.sample(range(0, 100000), 1000)
# random_list = random.sample(range(0, 100000), random.randint(0, 1000))

len(random_list)  # Saída: 1000
max(random_list)
min(random_list)