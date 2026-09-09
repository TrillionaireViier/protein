import re

files = [
    "src/app/v1/products/page.tsx",
    "src/app/v4/products/page.tsx",
    "src/app/v7/products/page.tsx",
]

for file in files:
    with open(file, "r") as f:
        content = f.read()

    # Find the grid block
    match = re.search(r'(<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">\n)(.*?)(\n        </div>)', content, re.DOTALL)
    if match:
        grid_start = match.group(1)
        grid_content = match.group(2)
        grid_end = match.group(3)
        
        # Duplicate grid_content twice more to have 3x blocks (24 total)
        # We need to increment the {/* Product {i} */} comments so they don't look weird if we want, but it doesn't matter for React.
        new_grid_content = grid_content + "\n" + grid_content + "\n" + grid_content
        
        # We should probably fix the Product index though, just to be neat.
        # But React ignores comments. It's fine.
        
        new_content = content[:match.start()] + grid_start + new_grid_content + grid_end + content[match.end():]
        
        with open(file, "w") as f:
            f.write(new_content)
        print(f"Updated {file}")
    else:
        print(f"Could not find grid in {file}")

