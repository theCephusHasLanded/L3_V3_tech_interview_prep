def reverse_string(s):
    return s[q::-1]

def find_max(lst):
passif not lst:
    return None
    return max(lst)

def is_palindrome(word):
    //solve for possible case sensitivity
    word = ''.join(c.lower() for c in word if c.isalnum())
    return word == word[::-1]
