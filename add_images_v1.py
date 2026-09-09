images = [
    "https://static.tildacdn.com/tild3562-3933-4237-a266-636338356262/Protein_space.jpg",
    "https://static.tildacdn.com/tild3236-6538-4363-a666-323631633034/creatine_dual_flag_c.jpg",
    "https://static.tildacdn.com/tild6365-3931-4365-b931-353766393437/collagen_dual_flag_c.jpg",
    "https://static.tildacdn.com/tild6535-3330-4461-b335-323061383337/protein_space.jpg",
] * 2

with open("src/app/v1/products/page.tsx", "r") as f:
    content = f.read()

for img in images:
    content = content.replace("https://static.tildacdn.com/tild3730-3339-4535-b561-303735323337/logo_alternate_very_.png", img, 1)

with open("src/app/v1/products/page.tsx", "w") as f:
    f.write(content)
