#!/usr/bin/env python3
import hashlib
import matplotlib.pyplot as plt

counts = [0 for _ in range(256)]

# this file is standard on some unix distributions but might need installing some package
with open("/usr/share/dict/words") as file:
    while line := file.readline():
        i = int.from_bytes(hashlib.shake_256(line.rstrip().encode("utf-8")).digest(1))
        counts[i] += 1
        if i == 0 or i == 255:
            print(f"{i:>3}", line.rstrip())

plt.plot([i for i in range(256)], counts)
plt.show()
