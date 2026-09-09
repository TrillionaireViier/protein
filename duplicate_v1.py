import re

file = "src/app/v1/products/page.tsx"
with open(file, "r") as f:
    content = f.read()

match = re.search(r'(<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">\n)(.*?)(\n        </div>)', content, re.DOTALL)
if match:
    grid_start = match.group(1)
    grid_content = match.group(2)
    grid_end = match.group(3)
    
    new_grid_content = grid_content + "\n" + grid_content + "\n" + grid_content
    
    new_content = content[:match.start()] + grid_start + new_grid_content + grid_end + content[match.end():]
    
    with open(file, "w") as f:
        f.write(new_content)
    print(f"Updated {file}")
else:
    print(f"Could not find grid in {file}")

