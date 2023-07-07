# Generate a ton of large files for stress testing
size_MB = 1  # desired size in megabytes
num_files = 50  # number of files to generate

for i in range(num_files):
    with open(f'generated/large{i+1}.css', 'w') as f:
        for j in range(size_MB * 1024 * 1024 // (11 + len(str(i+1)))):
            f.write(f".class{j} {{color: #000;}}\n")
