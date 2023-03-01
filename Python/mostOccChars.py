
def mostOccChars(phrase):
    chars = dict()
    mostOccured = ''
    for c in phrase:
        try:
            chars[c] += 1
        except KeyError:
            chars[c] = 1
        mostOccured = c if chars[c] >= max(chars.values()) else mostOccured
    return mostOccured


print(mostOccChars("mohammed"))