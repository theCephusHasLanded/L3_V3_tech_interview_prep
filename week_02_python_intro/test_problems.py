import pytest
from problems import reverse_string, find_max, is_palindrome

class TestReverseString:
    test_cases = [
        ("hello", "olleh"),
        ("python", "nohtyp"),
        ("", ""),
        ("a", "a"),
        ("12345", "54321")
    ]

    @pytest.mark.parametrize("input_str, expected", test_cases)
    def test_reverse_string(self, input_str, expected):
        assert reverse_string(input_str) == expected

class TestFindMax:
    test_cases = [
        ([1, 5, 3, 9], 9),
        ([-10, -5, 0, 5, 10], 10),
        ([0], 0),
        ([-1, -2, -3], -1),
        ([], None)
    ]

    @pytest.mark.parametrize("input_list, expected", test_cases)
    def test_find_max(self, input_list, expected):
        assert find_max(input_list) == expected

class TestIsPalindrome:
    test_cases = [
        ("racecar", True),
        ("hello", False),
        ("", True),
        ("A man a plan a canal Panama", True),
        ("Race Car", True),
        ("No lemon, no melon", True),
        ("Not a palindrome", False),
        ("12321", True),
        ("123", False)
    ]

    @pytest.mark.parametrize("input_word, expected", test_cases)
    def test_is_palindrome(self, input_word, expected):
        assert is_palindrome(input_word) == expected

if __name__ == '__main__':
    import sys
    import pytest
    sys.exit(pytest.main(['-v', __file__]))
