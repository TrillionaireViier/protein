import os

dirs = []
for i in range(15, 24):
    dirs.extend([
        f"src/app/v{i}/products",
        f"src/app/v{i}/about",
        f"src/app/v{i}/contact"
    ])

for d in dirs:
    os.makedirs(d, exist_ok=True)
